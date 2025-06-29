
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';
import SEO from '../SEO';

export default function CallToAction() {
  return (
    <>
    <SEO title={"Ready to Forge Your Success"} description={`Ready to Forge Your Success? Let's discuss how Shivam Forge can deliver the precise components your industry needs.`}/>
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-forge-orange/90 to-forge-red/90 mix-blend-multiply"></div>
        <img 
          src="https://res.cloudinary.com/dcuhpeczg/image/upload/v1751086056/products/wtfklv4ntgziurgrnnyt.jpg" 
          alt="Forging Process" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Ready to Forge Your Success?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how Shivam Forge can deliver the precise components your industry needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-white text-forge-orange hover:bg-white/90 px-8 py-6 text-lg">
                Contact Us
                {/* <Mail className="ml-2 h-5 w-5" /> */}
              </Button>
            </Link>
            {/* <a href="tel:+919265772827">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Call Yash
                <Phone className="ml-2 h-5 w-5" />
              </Button>
            </a> */}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
