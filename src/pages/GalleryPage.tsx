import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'

export function GalleryPage() {
  // Sample images - in a real app, these would come from a CMS or database
  const galleryItems = [
    {
      id: 1,
      title: "Fresh Spring Mulching",
      category: "Spring",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
      description: "Professional mulching service for flower beds"
    },
    {
      id: 2,
      title: "Snow Removal Service",
      category: "Winter",
      image: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=600&h=400&fit=crop",
      description: "Complete driveway and walkway snow clearing"
    },
    {
      id: 3,
      title: "Lawn Mowing Excellence",
      category: "Summer",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      description: "Precision lawn care with professional equipment"
    },
    {
      id: 4,
      title: "Garden Bed Maintenance",
      category: "Spring",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
      description: "Weeding and garden preparation services"
    },
    {
      id: 5,
      title: "Fall Leaf Cleanup",
      category: "Fall",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      description: "Complete yard cleanup for autumn season"
    },
    {
      id: 6,
      title: "Holiday Light Installation",
      category: "Winter",
      image: "https://images.unsplash.com/photo-1545048702-79362596cdc9?w=600&h=400&fit=crop",
      description: "Professional holiday lighting setup"
    },
    {
      id: 7,
      title: "Hedge Trimming",
      category: "Summer",
      image: "https://images.unsplash.com/photo-1586508404742-3b8ad78ad608?w=600&h=400&fit=crop",
      description: "Precision hedge shaping and maintenance"
    },
    {
      id: 8,
      title: "Gutter Cleaning",
      category: "Fall",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      description: "Thorough gutter cleaning and maintenance"
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Spring': return 'bg-hudson-green text-white'
      case 'Summer': return 'bg-yellow-500 text-white'
      case 'Fall': return 'bg-orange-500 text-white'
      case 'Winter': return 'bg-hudson-blue text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-hudson-green to-hudson-blue text-white">
        <div className="container-max section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Work Gallery
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            See the quality and professionalism of our landscaping and snow removal services
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(item.category)}>
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready for Professional Service?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us bring the same level of quality and professionalism to your property. 
            Contact us today for a free estimate!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:216-316-7289" className="btn-primary">
              Call (216) 316-7289
            </a>
            <a href="/contact" className="btn-secondary">
              Get Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}