import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { 
  Snowflake, 
  Sun, 
  Leaf, 
  Wind
} from 'lucide-react'

export function HomePage() {
  const services = [
    {
      icon: <Snowflake className="h-8 w-8" />,
      title: "Winter Services",
      description: "Snow removal, salting, and holiday light setup",
      color: "bg-hudson-blue"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Spring Services", 
      description: "Mulching, flower bed prep, and aeration",
      color: "bg-hudson-green"
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Summer Services",
      description: "Lawn mowing, trimming, and garden care",
      color: "bg-yellow-500"
    },
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Fall Services",
      description: "Leaf cleanup and seasonal shutdown",
      color: "bg-orange-500"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-hudson-green via-hudson-green-light to-hudson-blue py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container-max section-padding">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Student-Run Lawn & Snow Services in 
              <span className="block text-hudson-blue-light">Hudson, OH</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
              Professional landscaping and snow removal services by dedicated high school students. 
              Quality work at competitive prices, year-round.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button size="lg" className="bg-white text-hudson-green hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  Book Service Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-hudson-green px-8 py-4 text-lg font-semibold"
                >
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seasonal Services We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From spring cleanup to winter snow removal, we provide comprehensive 
              landscaping services throughout the year in Hudson, Ohio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to="/services" className="text-hudson-green hover:text-hudson-green-dark font-medium text-sm">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hudson-green text-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Join over 150 satisfied customers in Hudson. Book your service today 
            and experience the difference of professional student-run landscaping.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-white text-hudson-green hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Schedule Service
              </Button>
            </Link>
            <a href="tel:216-316-7289">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-hudson-green px-8 py-4 text-lg font-semibold"
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