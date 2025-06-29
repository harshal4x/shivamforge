
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { MapPin } from "lucide-react";
import SEO from "@/components/SEO";
import { useEffect } from "react";


const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <SEO
      title="Contact Shivam Forge – Let's Connect"
      description="Get in touch with Shivam Forge for forging, casting, and precision machining services. Based in Shapar, Gujarat."
      canonicalUrl="https://www.shivamforge.com/contact"
    />

    <Layout>    
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-forge-gray-dark dark:text-white">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Have questions or need assistance? Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-forge-gray rounded-xl shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-6 text-forge-gray-dark dark:text-white">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
            
            <div className="bg-white dark:bg-forge-gray rounded-xl shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-6 text-forge-gray-dark dark:text-white">
                Contact Information
              </h2>
              <ContactInfo />
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md h-96 relative">
            {/* <div className="absolute inset-0 flex items-center justify-center bg-forge-gray-dark/20 z-10">
              <div className="bg-white dark:bg-forge-gray-dark shadow-lg p-4 rounded-lg inline-flex items-center">
                <MapPin className="h-6 w-6 text-forge-orange mr-2" />
                <span className="font-medium text-forge-gray-dark dark:text-white">Shivam Forge Location</span>
              </div>
            </div> */}
            <iframe 
              title="Shivam Forge Location"
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14780.69948980821!2d70.75243749077805!3d22.15741453061799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395835b3ff756e3d%3A0xdad5abbf81ae969e!2sShivam%20forge!5e0!3m2!1sen!2sin!4v1750071561351!5m2!1sen!2sin'
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </Layout>
    </>
  );
};

export default ContactPage;
