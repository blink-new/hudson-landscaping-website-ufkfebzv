import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'
import { CheckCircle, Star } from 'lucide-react'
import { bundles } from '../lib/services'

export function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-hudson-green to-hudson-blue text-white">
        <div className="container-max section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Pricing & Bundles
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            Transparent, competitive pricing for all your landscaping and snow removal needs
          </p>
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

      {/* Hourly Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Straightforward Hourly Rate
            </h2>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-5xl font-bold text-hudson-green">$20</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-gray-600">per hour, per employee</p>
              </CardContent>
            </Card>
            <p className="text-lg text-gray-600 mt-8">
              We believe in simple, transparent pricing. You only pay for the time and manpower your project requires. 
              This ensures you get a fair price for every job, big or small.
            </p>
          </div>
        </div>
      </section>

      {/* Why Our Pricing Works */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Our Pricing Works
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-hudson-green/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-hudson-green" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparent Pricing</h3>
                <p className="text-gray-600">
                  No hidden fees or surprise charges. We provide clear estimates 
                  upfront so you know exactly what to expect.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-hudson-blue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-10 w-10 text-hudson-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Value</h3>
                <p className="text-gray-600">
                  Student-run doesn't mean lower quality. We deliver professional 
                  results at competitive prices you can afford.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fair & Honest</h3>
                <p className="text-gray-600">
                  We believe in fair pricing that reflects the value we provide 
                  while supporting our educational and business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-hudson-green text-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Your Free Estimate?
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Contact us today for a personalized quote based on your project's needs. We'll estimate the time and team size required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-hudson-green hover:bg-gray-100">
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:2163167289">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-hudson-green"
              >
                Call (216) 316-7289
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}