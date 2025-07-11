import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Label } from '../components/ui/label'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the form data to a backend
    alert('Thank you for your message! We\'ll get back to you within 24 hours.')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-hudson-green to-hudson-blue text-white">
        <div className="container-max section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            Get in touch for a free quote or to schedule your landscaping and snow removal services
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Ready to schedule service or have questions? We're here to help! 
                  Reach out using any of the methods below.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-hudson-green/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-hudson-green" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Phone</h3>
                        <a 
                          href="tel:216-316-7289"
                          className="text-hudson-blue hover:text-hudson-blue-dark text-lg font-medium"
                        >
                          (216) 316-7289
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-hudson-blue/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-hudson-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Email</h3>
                        <a 
                          href="mailto:dniaura@gmail.com"
                          className="text-hudson-blue hover:text-hudson-blue-dark text-lg"
                        >
                          info@hudsonlandscaping.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Location */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-yellow-500/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Service Area</h3>
                        <p className="text-gray-600 text-lg">Hudson, Ohio & Surrounding Areas</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Hours */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-500/10 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Available Hours</h3>
                        <div className="space-y-1 text-gray-600">
                          <p>Monday - Friday: 3:30 PM - 8:00 PM</p>
                          <p>Saturday: 8:00 AM - 6:00 PM</p>
                          <p>Sunday: 10:00 AM - 4:00 PM</p>
                          <p className="text-hudson-blue font-medium">Emergency Snow: 24/7</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="h-6 w-6 text-hudson-green" />
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(216) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service">Service Needed</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-hudson-green focus:border-transparent"
                      >
                        <option value="">Select a service...</option>
                        <option value="lawn-mowing">Lawn Mowing</option>
                        <option value="snow-removal">Snow Removal</option>
                        <option value="mulching">Mulching</option>
                        <option value="leaf-cleanup">Leaf Cleanup</option>
                        <option value="gutter-cleaning">Gutter Cleaning</option>
                        <option value="holiday-lights">Holiday Light Setup</option>
                        <option value="other">Other / Multiple Services</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, property size, timing, or any specific requirements..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <Button type="submit" className="btn-primary w-full">
                      Send Message
                    </Button>

                    <p className="text-sm text-gray-600 text-center">
                      We typically respond within 24 hours. For urgent requests, please call us directly.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              For urgent requests or immediate scheduling, give us a call. 
              We're always ready to help with your landscaping and snow removal needs.
            </p>
            <a href="tel:216-316-7289">
              <Button size="lg" className="btn-primary">
                Call Now: (216) 316-7289
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}