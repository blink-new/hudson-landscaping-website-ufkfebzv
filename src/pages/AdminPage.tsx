import { useAuth } from '../hooks/useAuth'
import { blink } from '../blink/client'
import { useState, useEffect } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

const ADMIN_EMAIL = 'devinniaura@gmail.com'

// DB table names
const CONTACT_TABLE = 'business_contact'
const SERVICES_TABLE = 'services'
const BUNDLES_TABLE = 'bundles'

// Types
interface Contact {
  id?: string
  phone: string
  email: string
}

interface Service {
  id?: string
  name: string
  season: string
  estimatedTime: number
}

interface Bundle {
  id?: string
  name: string
  description: string
  price: number
}

export function AdminPage() {
  const { user, loading } = useAuth()
  const [signingOut, setSigningOut] = useState(false)

  // Contact info state
  const [contact, setContact] = useState<Contact>({ phone: '', email: '' })
  const [contactSaving, setContactSaving] = useState(false)

  // Services state
  const [services, setServices] = useState<Service[]>([])
  const [servicesSaving, setServicesSaving] = useState(false)

  // Bundles state
  const [bundles, setBundles] = useState<Bundle[]>([])
  const [bundlesSaving, setBundlesSaving] = useState(false)

  // Load contact info
  useEffect(() => {
    async function loadContact() {
      try {
        const rows = await blink.db[CONTACT_TABLE].list()
        if (rows.length > 0) setContact(rows[0])
      } catch (error) {
        console.error('Failed to load contact:', error)
      }
    }
    loadContact()
  }, [])

  // Load services
  useEffect(() => {
    async function loadServices() {
      try {
        const rows = await blink.db[SERVICES_TABLE].list({ orderBy: { season: 'asc', name: 'asc' }, limit: 100 })
        setServices(rows)
      } catch (error) {
        console.error('Failed to load services:', error)
      }
    }
    loadServices()
  }, [])

  // Load bundles
  useEffect(() => {
    async function loadBundles() {
      try {
        const rows = await blink.db[BUNDLES_TABLE].list({ orderBy: { name: 'asc' }, limit: 100 })
        setBundles(rows)
      } catch (error) {
        console.error('Failed to load bundles:', error)
      }
    }
    loadBundles()
  }, [])

  // Save contact info
  async function saveContact() {
    setContactSaving(true)
    try {
      // Upsert (update or insert)
      if (contact.id) {
        await blink.db[CONTACT_TABLE].update(contact.id, contact)
      } else {
        await blink.db[CONTACT_TABLE].create(contact)
      }
    } catch (error) {
      console.error('Failed to save contact:', error)
    } finally {
      setContactSaving(false)
    }
  }

  // Save services
  async function saveServices() {
    setServicesSaving(true)
    try {
      for (const s of services) {
        if (s.id) {
          await blink.db[SERVICES_TABLE].update(s.id, s)
        } else {
          await blink.db[SERVICES_TABLE].create(s)
        }
      }
    } catch (error) {
      console.error('Failed to save services:', error)
    } finally {
      setServicesSaving(false)
    }
  }

  // Save bundles
  async function saveBundles() {
    setBundlesSaving(true)
    try {
      for (const b of bundles) {
        if (b.id) {
          await blink.db[BUNDLES_TABLE].update(b.id, b)
        } else {
          await blink.db[BUNDLES_TABLE].create(b)
        }
      }
    } catch (error) {
      console.error('Failed to save bundles:', error)
    } finally {
      setBundlesSaving(false)
    }
  }

  // Add new service
  function addService() {
    setServices(s => [...s, { name: '', season: 'summer', estimatedTime: 1 }])
  }
  // Remove service
  function removeService(idx: number) {
    setServices(s => s.filter((_, i) => i !== idx))
  }
  // Edit service
  function editService(idx: number, field: keyof Service, value: string | number) {
    setServices(s => s.map((item, i) => i === idx ? { ...item, [field]: value } : item))
  }

  // Add new bundle
  function addBundle() {
    setBundles(b => [...b, { name: '', price: 100, description: '' }])
  }
  // Remove bundle
  function removeBundle(idx: number) {
    setBundles(b => b.filter((_, i) => i !== idx))
  }
  // Edit bundle
  function editBundle(idx: number, field: keyof Bundle, value: string | number) {
    setBundles(b => b.map((item, i) => i === idx ? { ...item, [field]: value } : item))
  }

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        <h1 className="text-2xl font-bold">Admin Sign In</h1>
        <Button onClick={() => blink.auth.login()}>Sign In with Email</Button>
      </div>
    )
  }
  if (user.email !== ADMIN_EMAIL) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        <h1 className="text-2xl font-bold text-red-600">Not authorized</h1>
        <p className="text-gray-600">You must be signed in as the admin to access this page.</p>
        <Button onClick={async () => { setSigningOut(true); await blink.auth.logout(); setSigningOut(false) }} disabled={signingOut}>
          {signingOut ? 'Signing Out...' : 'Sign Out'}
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-8 max-w-5xl mx-auto space-y-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button onClick={async () => { setSigningOut(true); await blink.auth.logout(); setSigningOut(false) }} disabled={signingOut}>
          {signingOut ? 'Signing Out...' : 'Sign Out'}
        </Button>
      </div>

      {/* Contact Info */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Business Contact Info</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <label className="block font-medium mb-1">Phone</label>
              <Input value={contact.phone} onChange={e => setContact(c => ({ ...c, phone: e.target.value }))} placeholder="2163167289" />
            </div>
            <div className="flex-1">
              <label className="block font-medium mb-1">Email</label>
              <Input value={contact.email} onChange={e => setContact(c => ({ ...c, email: e.target.value }))} placeholder="dniaura@gmail.com" />
            </div>
            <Button onClick={saveContact} disabled={contactSaving} className="mt-4 md:mt-0">
              {contactSaving ? 'Saving...' : 'Save'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Services Table */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Services (All Seasons)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full border text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2">Name</th>
                  <th className="p-2">Season</th>
                  <th className="p-2">Estimated Time (hr)</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.map((s, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="p-2"><Input value={s.name} onChange={e => editService(idx, 'name', e.target.value)} /></td>
                    <td className="p-2">
                      <select value={s.season} onChange={e => editService(idx, 'season', e.target.value)} className="border rounded px-2 py-1">
                        <option value="winter">Winter</option>
                        <option value="spring">Spring</option>
                        <option value="summer">Summer</option>
                        <option value="fall">Fall</option>
                      </select>
                    </td>
                    <td className="p-2"><Input type="number" min={0.25} step={0.25} value={s.estimatedTime} onChange={e => editService(idx, 'estimatedTime', parseFloat(e.target.value))} /></td>
                    <td className="p-2">
                      <Button variant="outline" size="sm" onClick={() => removeService(idx)}>Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 flex gap-2">
              <Button onClick={addService} variant="secondary">Add Service</Button>
              <Button onClick={saveServices} disabled={servicesSaving}>{servicesSaving ? 'Saving...' : 'Save All'}</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bundles Table */}
      <Card>
        <CardHeader>
          <CardTitle>Bundles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full border text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2">Name</th>
                  <th className="p-2">Description</th>
                  <th className="p-2">Set Price ($)</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bundles.map((b, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="p-2"><Input value={b.name} onChange={e => editBundle(idx, 'name', e.target.value)} /></td>
                    <td className="p-2"><Input value={b.description} onChange={e => editBundle(idx, 'description', e.target.value)} /></td>
                    <td className="p-2"><Input type="number" min={0} step={1} value={b.price} onChange={e => editBundle(idx, 'price', parseFloat(e.target.value))} /></td>
                    <td className="p-2">
                      <Button variant="outline" size="sm" onClick={() => removeBundle(idx)}>Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 flex gap-2">
              <Button onClick={addBundle} variant="secondary">Add Bundle</Button>
              <Button onClick={saveBundles} disabled={bundlesSaving}>{bundlesSaving ? 'Saving...' : 'Save All'}</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}