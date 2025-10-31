
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { useInView } from "react-intersection-observer";

const infrastructureItems = [
  {
    title: "State-of-the-Art Manufacturing Facility",
    description: "Our 2,000 sq. m. facility is equipped with the latest technology and machinery.",
    image: "/lovable-uploads/8f4bbe31-8dc0-4981-9dca-b1b1c8ab9b51.png",
  },
  {
    title: "Bar Cutting Facility",
    description: "Precision cutting equipment for exact specifications and minimal waste.",
    image: "/lovable-uploads/0f68f689-c42a-4d8b-9878-25a7083170bf.png",
  },
  {
    title: "Measurement & Lab Facility",
    description: "Advanced testing and quality control lab for all products.",
    image: "/lovable-uploads/0f68f689-c42a-4d8b-9878-25a7083170bf.png",
  },
  {
    title: "Zinc Plating & Galvanizing",
    description: "Superior finishing and corrosion protection processes.",
    image: "/lovable-uploads/0f68f689-c42a-4d8b-9878-25a7083170bf.png",
  },
  {
    title: "Forging & Casting Design",
    description: "Expert design and development for custom solutions.",
    image: "/lovable-uploads/4c086d5f-ccd8-4223-91fb-13841c1feb10.png",
  },
  {
    title: "Shot Blasting",
    description: "Surface preparation and cleaning for perfect finishes.",
    image: "/lovable-uploads/0f68f689-c42a-4d8b-9878-25a7083170bf.png",
  },
  {
    title: "CNC / VMC Machining",
    description: "Precision machining with computer numerical control.",
    image: "/lovable-uploads/0f68f689-c42a-4d8b-9878-25a7083170bf.png",
  },
];

const InfrastructurePage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Layout>


      <SEO title={"InfrastructurePage"} description={"Shivam Forge offers world-class forging, casting, and machining solutions with a state-of-the-art 2,000 sq.m. facility. Equipped with CNC/VMC machines, zinc plating, bar cutting, precision testing labs, and shot blasting, we provide end-to-end product development, reverse engineering, and global-quality manufacturing."}/>
      <div className="bg-gradient-to-r from-forge-orange to-forge-red py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Our Infrastructure
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Shivam Forge boasts world-class infrastructure and advanced technologies to deliver exceptional quality and precision.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-forge-gray-dark dark:text-white">
            Comprehensive Facilities & Advanced Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            The Shivam Forge facility comprises globally benchmarked divisions covering the entire spectrum from product development to dispatch.
          </p>
        </div>

        <div 
          ref={ref}
          className="space-y-16"
        >
          {infrastructureItems.map((item, index) => (
            <div 
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center transition-all duration-1000 transform ${
                inView
                  ? index % 2 === 0 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-100 translate-x-0'
                  : index % 2 === 0 
                    ? 'opacity-0 -translate-x-12' 
                    : 'opacity-0 translate-x-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-forge-gray-dark dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-forge-gray-dark dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-forge-gray-dark/50 py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-forge-gray-dark dark:text-white">
              The Shivam Forge Edge
            </h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p>
                Experienced and dynamic management when complemented by world-class infrastructure results in high-quality products and services. Keeping pace with fast-changing technology, Shivam Forge has tied up with leading companies across the world to develop an infrastructure worthy of a leader.
              </p>
              <p>
                The Shivam Forge facility comprises globally benchmarked divisions covering the entire spectrum from product development to dispatch. This enables us to provide accelerated development plus services, such as reverse engineering to aid indigenization programs.
              </p>
              <p>
                From design to delivery, quality enhancement to cost reduction, we bring together energized talent and cutting-edge technology to provide unmatched value to our customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InfrastructurePage;
