import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Leaf, Facebook, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-hudson-green rounded-lg">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Hudson Landscaping</h3>
                <p className="text-sm text-hudson-blue font-medium">& Snow Services</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional student-run landscaping and snow removal services in Hudson, Ohio. 
              Quality work with competitive pricing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-hudson-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-hudson-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-hudson-green transition-colors text-sm">
                Home
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-hudson-green transition-colors text-sm">
                Services
              </Link>
              <Link to="/gallery" className="block text-gray-300 hover:text-hudson-green transition-colors text-sm">
                Gallery
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-hudson-green transition-colors text-sm">
                About Us
              </Link>
              <Link to="/pricing" className="block text-gray-300 hover:text-hudson-green transition-colors text-sm">
                Pricing
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-hudson-green transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Lawn Mowing & Maintenance</li>
              <li>Snow Removal & Salting</li>
              <li>Mulching & Garden Care</li>
              <li>Leaf Cleanup</li>
              <li>Holiday Light Setup</li>
              <li>Gutter Cleaning</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:216-316-7289"
                className="flex items-center space-x-2 text-gray-300 hover:text-hudson-blue transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                <span>(216) 316-7289</span>
              </a>
              <a
                href="mailto:dniaura@gmail.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-hudson-blue transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>info@hudsonlandscaping.com</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Hudson, Ohio</span>
              </div>
            </div>
            <div className="mt-4">
              <Link
                to="/booking"
                className="inline-block bg-hudson-green text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-hudson-green-light transition-colors"
              >
                Schedule Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-max section-padding py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 Hudson Landscaping & Snow. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Student-run business serving Hudson, Ohio
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}