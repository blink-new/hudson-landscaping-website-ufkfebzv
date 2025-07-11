import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'
import { Snowflake, Sun, Leaf, Wind, CheckCircle, Package } from 'lucide-react'
import { winterServices, springServices, summerServices, fallServices, bundles } from '../lib/services'

export function ServicesPage() {
  const seasonalServices = [
    {
      season: "Winter",
      icon: <Snowflake className="h-8 w-8" />,
      color: "bg-hudson-blue",
      services: winterServices
    },
    {
      season: "Spring",
      icon: <Leaf className="h-8 w-8" />,
      color: "bg-hudson-green",
      services: springServices
    },
    {
      season: "Summer",
      icon: <Sun className="h-8 w-8" />,
      color: "bg-yellow-500",
      services: summerServices
    },
    {
      season: "Fall",
      icon: <Wind className="h-8 w-8" />,
      color: "bg-orange-500",
      services: fallServices
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-hudson-green to-hudson-blue text-white">
        <div className="container-max section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            Comprehensive landscaping and snow removal services for every season in Hudson, Ohio
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {seasonalServices.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center text-white`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-2xl">{category.season} Services</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-hudson-green mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-gray-700 font-medium">{service.name}</span>
                          <span className="block text-gray-500 text-sm">{service.description}</span>
                          <span className="block text-xs text-gray-400">Estimated: {service.estimatedTime}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bundles Section */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Bundles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Save with our most popular service bundles, each with a set price and included services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bundles.map((bundle, idx) => (
              <Card key={idx} className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center text-white">
                      <Package className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl">{bundle.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-2 text-gray-700 font-medium">${bundle.price.toLocaleString()}</div>
                  <div className="mb-2 text-gray-500 text-sm">{bundle.description}</div>
                  <ul className="list-disc pl-5 text-gray-600 text-sm mb-2">
                    {bundle.includedServices.map((svc, i) => (
                      <li key={i}>{svc}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Simple, transparent pricing at $20/hour per employee. 
            Contact us for a detailed quote for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button className="btn-primary">Schedule Service</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-hudson-green text-hudson-green hover:bg-hudson-green hover:text-white">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
