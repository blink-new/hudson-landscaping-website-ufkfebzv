import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './ui/button'
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from './ui/navigation-menu'
import { Menu, X, Phone, Leaf, User } from 'lucide-react'
import { winterServices, springServices, summerServices, fallServices, bundles } from '../lib/services'
import { useAuth } from '../hooks/useAuth'
import { blink } from '../blink/client'
import { isUserAdmin } from '../lib/auth'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      sublinks: [
        { name: 'Winter', services: winterServices.map(s => s.name) },
        { name: 'Spring', services: springServices.map(s => s.name) },
        { name: 'Summer', services: summerServices.map(s => s.name) },
        { name: 'Fall', services: fallServices.map(s => s.name) },
        { name: 'Bundles', services: bundles.map(b => b.name) },
      ]
    },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const { user, loading } = useAuth()

  const handleSignOut = () => {
    blink.auth.logout();
  }

  const handleSignIn = () => {
    blink.auth.login();
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container-max section-padding">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 bg-hudson-green rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Hudson Landscaping</h1>
              <p className="text-sm text-hudson-blue font-medium">& Snow Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.href ? (
                      <NavigationMenuLink 
                        asChild
                        className={`text-sm font-medium transition-colors hover:text-hudson-green ${
                          isActive(item.href)
                            ? 'text-hudson-green'
                            : 'text-gray-700'
                        }`}
                      >
                        <Link to={item.href}>
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    ) : (
                      <>
                        <NavigationMenuTrigger className="text-sm font-medium text-gray-700 hover:text-hudson-green">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid grid-cols-5 gap-4 p-4 w-[1000px]">
                            {item.sublinks?.map(sublink => (
                              <div key={sublink.name}>
                                <h3 className="font-bold text-hudson-green mb-2">{sublink.name}</h3>
                                <ul className="space-y-1">
                                  {sublink.services.map(service => (
                                    <li key={service}>
                                      <NavigationMenuLink asChild className="text-sm text-gray-600 hover:text-hudson-green">
                                        <Link to="/services">
                                          {service}
                                        </Link>
                                      </NavigationMenuLink>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:2163167289"
              className="flex items-center space-x-2 text-hudson-blue hover:text-hudson-blue-dark transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">(216) 316-7289</span>
            </a>
            <Link to="/booking">
              <Button className="btn-primary">Book Now</Button>
            </Link>
            
            {/* Authentication & Admin Section */}
            {loading ? (
              <div className="w-20 h-9 bg-gray-100 animate-pulse rounded"></div>
            ) : user ? (
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 text-sm text-gray-700">
                  <User className="h-4 w-4" />
                  <span className="font-medium">{user.email?.split('@')[0]}</span>
                </div>
                {isUserAdmin(user) && (
                  <Link to="/admin">
                    <Button variant="outline" size="sm">Admin Panel</Button>
                  </Link>
                )}
                <Button variant="outline" size="sm" onClick={handleSignOut}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button variant="outline" onClick={handleSignIn}>
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="container-max section-padding py-4">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                item.href ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-base font-medium py-2 transition-colors hover:text-hudson-green ${
                      isActive(item.href) ? 'text-hudson-green' : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div key={item.name}>
                    <h3 className="text-base font-bold text-hudson-green py-2">{item.name}</h3>
                    {item.sublinks?.map(sublink => (
                      <div key={sublink.name} className="pl-4">
                        <h4 className="font-semibold text-gray-800 mt-2">{sublink.name}</h4>
                        <ul className="space-y-1 mt-1">
                          {sublink.services.slice(0,5).map(service => (
                            <li key={service}>
                              <Link to="/services" onClick={() => setIsMenuOpen(false)} className="text-sm text-gray-600 hover:text-hudson-green">
                                {service}
                              </Link>
                            </li>
                          ))}
                           <li key="more">
                              <Link to="/services" onClick={() => setIsMenuOpen(false)} className="text-sm text-hudson-green hover:underline">
                                ... and more
                              </Link>
                            </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                )
              ))}
              
              {/* Mobile Authentication */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a
                  href="tel:2163167289"
                  className="flex items-center space-x-2 text-hudson-blue hover:text-hudson-blue-dark transition-colors py-2"
                >
                  <Phone className="h-4 w-4" />
                  <span className="text-base font-medium">(216) 316-7289</span>
                </a>
                <Link to="/booking" onClick={() => setIsMenuOpen(false)}>
                  <Button className="btn-primary w-full">Book Now</Button>
                </Link>
                
                {loading ? (
                  <div className="w-full h-9 bg-gray-100 animate-pulse rounded"></div>
                ) : user ? (
                  <>
                    <div className="flex items-center space-x-2 text-sm text-gray-700 py-2">
                      <User className="h-4 w-4" />
                      <span>Signed in as {user.email?.split('@')[0]}</span>
                    </div>
                    {isUserAdmin(user) && (
                      <Link to="/admin" onClick={() => setIsMenuOpen(false)}>
                        <Button variant="outline" className="w-full">Admin Panel</Button>
                      </Link>
                    )}
                    <Button variant="outline" className="w-full" onClick={() => { handleSignOut(); setIsMenuOpen(false); }}>
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <Button variant="outline" className="w-full" onClick={() => { handleSignIn(); setIsMenuOpen(false); }}>
                    Sign In
                  </Button>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}