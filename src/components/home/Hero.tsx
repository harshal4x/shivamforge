
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import SEO from '../SEO';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    const contentElement = document.getElementById('content-section');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <SEO title={"Shivam Forge Hero section"} description={`Precision forging solutions powered by innovation, trust, and global standards.`}/>
    <div className="relative h-screen flex items-center">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-10"
          style={{ mixBlendMode: 'multiply' }}
        ></div>
        <img 
          src="https://res.cloudinary.com/dcuhpeczg/image/upload/v1751085970/products/jssyvfvfnga44kikjfrs.jpg" 
          alt="Forging Process" 
          className="w-full h-full object-cover animate-forge-heat"
        />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`max-w-3xl transition-all duration-1000 transform ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="flex items-center gap-4 text-4xl md:text-6xl font-bold text-white mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Shivam Forge
          </span>
          {/* <img 
            src="/lovable-uploads/logbgromove.png" 
            alt="Logo" 
            className="h-12 md:h-16 w-auto"
          /> */}
        </h1>

          {/* <img src="/lovable-uploads/logbgromove.png" alt="" /> */}
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Precision forging solutions powered by innovation, trust, and global standards.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/products">
              <Button 
                className="bg-gradient-forge text-white px-6 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white px-6 py-6 text-lg hover:bg-white/20 transition-all duration-300"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer animate-bounce"
        onClick={scrollToContent}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={24} />
        </div>
      </div>
    </div>
    </>
  );
}
