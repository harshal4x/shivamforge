
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '../SEO';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    // { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'About', path: '/about' },
    { name: 'Process', path: '/process' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
      <>
    {/* <SEO title={"Navbar"} description={`Quality forging`}/> */}
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-white/90 dark:bg-forge-gray-dark/90 backdrop-blur-md shadow-md' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="https://res.cloudinary.com/dcuhpeczg/image/upload/v1749619186/products/oqynug8dvg6ydb1vxcbx.png" 
            alt="Shivam Forge" 
            className="h-10 w-auto rounded-full border-1 border-white block mx-auto mb-2.5 object-cover">
          
          </img>

        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                location.pathname === link.path
                  ? 'text-forge-orange'
                  : 'text-forge-gray-dark dark:text-white hover:text-forge-orange dark:hover:text-forge-orange'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
          {/* <Link to="/admin">
            <Button 
              className="ml-2 bg-gradient-forge hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
            >
              Admin
            </Button>
          </Link> */}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-forge-gray-dark dark:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-forge-gray-dark shadow-lg animate-slide-in-down">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-lg font-medium ${
                  location.pathname === link.path
                    ? 'bg-gray-100 dark:bg-forge-gray text-forge-orange'
                    : 'text-forge-gray-dark dark:text-white hover:bg-gray-100 dark:hover:bg-forge-gray'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/admin" className="mt-2">
              <Button className="w-full bg-gradient-forge">
                Admin
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
    </>
  );
}
