import { useState, useEffect } from 'react';
import { createClient } from '@blinkdotnew/sdk';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Calendar } from '../components/ui/calendar';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';
import { Phone, User, Calendar as CalendarIcon } from 'lucide-react';

const blink = createClient({ projectId: 'hudson-landscaping-website-ufkfebzv', authRequired: false });

interface Service {
  id: number;
  name: string;
}

interface Bundle {
  id: number;
  name: string;
}

export function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string>("");
  const [services, setServices] = useState<Service[]>([]);
  const [bundles, setBundles] = useState<Bundle[]>([]);
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    service_id: '',
    bundle_id: '',
    notes: ''
  });

  useEffect(() => {
    const fetchServicesAndBundles = async () => {
      const { data: servicesData } = await blink.db.services.list();
      const { data: bundlesData } = await blink.db.bundles.list();
      setServices(servicesData as Service[]);
      setBundles(bundlesData as Bundle[]);
    }
    fetchServicesAndBundles();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  }

  const handleSelectChange = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  }

  const handleRequestAppointment = async () => {
    if (!date || !time) {
      alert('Please select a date and time.');
      return;
    }

    const appointmentData = {
      ...formData,
      appointment_date: date.toISOString().split('T')[0],
      appointment_time: time,
    };

    await blink.db.appointments.create(appointmentData);
    alert('Appointment requested! We will contact you shortly to confirm.');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-hudson-green to-hudson-blue text-white">
        <div className="container-max section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Schedule Your Service
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            Select a date and time that works for you. We'll confirm your appointment within 24 hours.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Calendar & Time Selection */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2"><CalendarIcon/>Select Date & Time</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border p-4"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Available Times</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
                        '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
                      ].map(t => (
                        <Button 
                          key={t} 
                          variant={time === t ? "default" : "outline"} 
                          onClick={() => setTime(t)}
                        >
                          {t}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2"><User/>Your Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="customer_name">Full Name</Label>
                    <Input id="customer_name" placeholder="John Doe" onChange={handleInputChange} />
                  </div>
                  <div>
                    <Label htmlFor="customer_email">Email</Label>
                    <Input id="customer_email" type="email" placeholder="you@example.com" onChange={handleInputChange} />
                  </div>
                  <div>
                    <Label htmlFor="customer_phone">Phone</Label>
                    <Input id="customer_phone" type="tel" placeholder="(123) 456-7890" onChange={handleInputChange} />
                  </div>
                  <div>
                    <Label htmlFor="service_id">Service</Label>
                    <Select onValueChange={(value) => handleSelectChange('service_id', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map(service => (
                          <SelectItem key={service.id} value={String(service.id)}>{service.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="bundle_id">Bundle</Label>
                    <Select onValueChange={(value) => handleSelectChange('bundle_id', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a bundle (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        {bundles.map(bundle => (
                          <SelectItem key={bundle.id} value={String(bundle.id)}>{bundle.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="notes">Additional Details</Label>
                    <Textarea id="notes" placeholder="Anything else we should know?" onChange={handleInputChange} />
                  </div>
                  <Button className="w-full btn-primary" onClick={handleRequestAppointment}>Request Appointment</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for other times */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need a Different Time or Urgent Service?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            If you don't see a time that works for you, or if you need emergency service, please call us directly.
          </p>
          <a href="tel:2163167289">
            <Button size="lg" className="btn-primary">
              <Phone className="mr-2 h-4 w-4"/> Call (216) 316-7289
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}