
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SEO from '../SEO';

export default function ContactInfo() {
  return (

    <div className="space-y-6">
        <SEO title={"ContactInfo"} description={`Quality forging and casting products for farm equipment, automotive and heavy industries.
        salesshivamforge@gmail.com
        Yash: +91 9265772827
        Hetvik: +91 6352877378
        Parth: +91 7600066117
        Shapar (Veraval), Rajkot 360026 GJ, india`} />

      <div className="flex flex-col space-y-2">
        <h3 className="text-lg font-semibold text-forge-gray-dark dark:text-white">Address</h3>
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-forge-orange mr-3 mt-1 flex-shrink-0" />
          <p className="text-gray-600 dark:text-gray-300">
            Shivam Forge<br />
            Plot No.3/B,Rs No.551p 3 , Ganga Forging Chaitanya Ind<br/>
            Shapar(Rajkot) - 360024
          </p>
        </div>
      </div>
      
      <div className="flex flex-col space-y-2">
        <h3 className="text-lg font-semibold text-forge-gray-dark dark:text-white">Contact</h3>
        <div className="flex items-center">
          <Phone className="h-5 w-5 text-forge-orange mr-3" />
          <div className="flex flex-col">
            <a href="tel:+919265772827" className="text-gray-600 dark:text-gray-300 hover:text-forge-orange dark:hover:text-forge-orange transition-colors">
              Yash Patel: +91 9265772827
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <Phone className="h-5 w-5 text-forge-orange mr-3" />
          <div className="flex flex-col">
            <a href="tel:+916352877378" className="text-gray-600 dark:text-gray-300 hover:text-forge-orange dark:hover:text-forge-orange transition-colors">
              Hetvik Patel: +91 6352877378
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <Phone className="h-5 w-5 text-forge-orange mr-3" />
          <div className="flex flex-col">
            <a href="tel:+917600066117" className="text-gray-600 dark:text-gray-300 hover:text-forge-orange dark:hover:text-forge-orange transition-colors">
              Parth Patel: +91 7600066117
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <Mail className="h-5 w-5 text-forge-orange mr-3" />
          <a href="mailto:salesshivamforge@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-forge-orange dark:hover:text-forge-orange transition-colors">
            salesshivamforge@gmail.com
          </a>
        </div>
      </div>
      
      <div className="flex flex-col space-y-2">
        <h3 className="text-lg font-semibold text-forge-gray-dark dark:text-white">Hours</h3>
        <div className="flex items-start">
          <Clock className="h-5 w-5 text-forge-orange mr-3 mt-1 flex-shrink-0" />
          <div className="text-gray-600 dark:text-gray-300">
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 2:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
