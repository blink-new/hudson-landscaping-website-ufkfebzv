import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'
import { Users, Award, Clock, Heart } from 'lucide-react'

export function AboutPage() {
  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Work",
      description: "We take pride in delivering professional results that exceed expectations, even as students."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Reliability",
      description: "Rain or shine, snow or sun - when we commit to a job, you can count on us to show up."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Community Focus",
      description: "We're proud to serve our Hudson community while learning valuable business and work skills."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Spirit",
      description: "Our student team works together to provide the best possible service at competitive prices."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-hudson-green to-hudson-blue text-white">
        <div className="container-max section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Hudson Landscaping & Snow
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            Student-run business bringing professionalism, quality, and competitive pricing to Hudson, Ohio
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop" 
                  alt="Students working together"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Started by Hudson High School Students</h3>
                <p className="text-gray-600 leading-relaxed">
                  Hudson Landscaping & Snow was founded by a group of motivated high school students 
                  who wanted to provide quality landscaping and snow removal services to their community 
                  while learning valuable business and work skills.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  What started as a small group effort has grown into a trusted service provider 
                  in Hudson, Ohio. We've served over 150 customers and completed more than 500 jobs, 
                  all while maintaining our commitment to quality and professionalism.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We believe that being student-run doesn't mean compromising on quality. 
                  In fact, our energy, attention to detail, and dedication to proving ourselves 
                  often exceeds what you'd expect from traditional services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do, from small lawn maintenance to major snow removal operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center h-full">
                <CardContent className="p-6">
                  <div className="bg-hudson-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-hudson-green">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Student-Run */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose a Student-Run Business?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-hudson-blue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💪</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">High Energy & Enthusiasm</h3>
                <p className="text-gray-600">
                  Our young team brings incredible energy and enthusiasm to every job, 
                  eager to prove ourselves and build our reputation.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-hudson-green/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Competitive Pricing</h3>
                <p className="text-gray-600">
                  As students, we can offer competitive rates while still delivering 
                  professional-quality work that rivals established companies.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Attention to Detail</h3>
                <p className="text-gray-600">
                  We pay extra attention to detail because we know every job is an opportunity 
                  to build our reputation and learn new skills.
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
            Ready to Work with Us?
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Experience the difference of working with motivated students who care about 
            quality and building lasting relationships in the Hudson community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-white text-hudson-green hover:bg-gray-100">
                Schedule Service
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-hudson-green"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}