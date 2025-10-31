
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin} from 'lucide-react';
import SEO from '../SEO';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
    {/* <SEO title={"Shivam Forge Footer"} description={`Quality forging and casting products for farm equipment, automotive and heavy industries.

salesshivamforge@gmail.com
Yash: +91 9265772827
Hetvik: +91 6352877378
Parth: +91 7600066117
Chaitanya ind.area, ganga gate, near Shapar, Veraval, Shapar, Gujarat 360024`}/> */}
    <footer className="bg-white dark:bg-forge-gray-dark border-t border-gray-200 dark:border-forge-gray">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
             <img 
              src="https://res.cloudinary.com/dcuhpeczg/image/upload/v1749619186/products/oqynug8dvg6ydb1vxcbx.png" 
              alt="Shivam Forge" 
              className="h-20 w-auto rounded-full border-1 border-white block ">
            
            </img>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xs">
              Quality forging and casting products for farm equipment, automotive and heavy industries.
            </p>
            <div className="flex flex-col space-y-2">
              <a href="mailto:salesshivamforge@gmail.com" className="flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-forge-orange dark:hover:text-forge-orange transition-colors">
                <Mail size={16} className="mr-2" />
                salesshivamforge@gmail.com
              </a>
              <a
                href="https://www.facebook.com/people/Shivam-Forge/61562313057709/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-forge-orange dark:hover:text-forge-orange transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="mr-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12z" />
                </svg>
                Facebook Page
              </a>

              <a href="tel:+919265772827" className="flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-forge-orange dark:hover:text-forge-orange transition-colors">
                <Phone size={16} className="mr-2" />
                Yash: +91 9265772827
              </a>
              <a href="tel:+916352877378" className="flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-forge-orange dark:hover:text-forge-orange transition-colors">
                <Phone size={16} className="mr-2" />
                Hetvik: +91 6352877378
              </a>
              <a href="tel:+917600066117" className="flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-forge-orange dark:hover:text-forge-orange transition-colors">
                <Phone size={16} className="mr-2" />
                Parth: +91 7600066117
              </a>
              <div className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>Shivam Forge<br />Plot No.3/B,Rs No.551p 3 , Ganga Forging Chaitanya Ind<br/> Shapar(Rajkot) - 360024</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-forge-gray-dark dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-forge-orange dark:hover:text-forge-orange transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 dark:text-gray-300 hover:text-forge-orange dark:hover:text-forge-orange transition-colors">Products</Link>
              </li>
              {/* <li>
                <Link to="/infrastructure" className="text-gray-600 dark:text-gray-300 hover:text-forge-orange dark:hover:text-forge-orange transition-colors">Infrastructure</Link>
              </li> */}
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-forge-orange dark:hover:text-forge-orange transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-forge-orange dark:hover:text-forge-orange transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-forge-gray-dark dark:text-white">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/?category=Automotive" className="text-gray-600 dark:text-gray-300 hover:text-forge-orange dark:hover:text-forge-orange transition-colors">Automotive</Link>
              </li>
              <li>
                <Link to="/products/?category=Industrial" className="text-gray-600 dark:text-gray-300 hover:text-forge-orange dark:hover:text-forge-orange transition-colors">Industrial</Link>
              </li>
              <li>
                <Link to="/products/?category=Oil%20And%20Gas%20Industry" className="text-gray-600 dark:text-gray-300 hover:text-forge-orange dark:hover:text-forge-orange transition-colors">Oil & Gas</Link>
              </li>
              <li>
                <Link to="/products/?category=Tractor%20And%20Farm%20Equipments" className="text-gray-600 dark:text-gray-300 hover:text-forge-orange dark:hover:text-forge-orange transition-colors">Tractor And Farm & Equipments</Link>
              </li>
              <li>
                <Link to="/products/?category=Mining" className="text-gray-600 dark:text-gray-300 hover:text-forge-orange dark:hover:text-forge-orange transition-colors">Mining</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-forge-gray mt-8 pt-8 text-center text-sm text-gray-600 dark:text-gray-300">
          <p>&copy; {currentYear} Shivam Forge. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
}
