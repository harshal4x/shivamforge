
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SEO from '../SEO';

const features = [
  {
    title: 'Bar Cutting Facility',
    description: 'Precision cutting for exact specifications and minimal waste',
    image: '/lovable-uploads/0f68f689-c42a-4d8b-9878-25a7083170bf.png',
  },
  {
    title: 'Measurement & Lab Facility',
    description: 'Advanced testing and quality control for all products',
    image: '/lovable-uploads/0f68f689-c42a-4d8b-9878-25a7083170bf.png',
  },
  {
    title: 'Zinc Plating & Galvanizing',
    description: 'Superior finishing and corrosion protection',
    image: '/lovable-uploads/0f68f689-c42a-4d8b-9878-25a7083170bf.png',
  },
  {
    title: 'Forging & Casting Design',
    description: 'Expert design and development for custom solutions',
    image: '/lovable-uploads/4c086d5f-ccd8-4223-91fb-13841c1feb10.png',
  },
  {
    title: 'Shot Blasting',
    description: 'Surface preparation and cleaning for perfect finishes',
    image: '/lovable-uploads/0f68f689-c42a-4d8b-9878-25a7083170bf.png',
  },
  {
    title: 'CNC / VMC Machining',
    description: 'Precision machining with computer numerical control',
    image: '/lovable-uploads/0f68f689-c42a-4d8b-9878-25a7083170bf.png',
  },
];

export default function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
    <SEO title={"Key Infrastructure at Shivam Forge"} description={`Bar Cutting Facility , Measurement & Lab Facility , Zinc Plating & Galvanizing , Shot Blasting , CNC / VMC Machining`}/>
    <section
      id="content-section"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-forge-gray-dark/50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-forge-gray-dark dark:text-white">
            Key Infrastructure at Shivam Forge
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our state-of-the-art facilities enable us to deliver precision and quality in every product
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`forge-card p-6 h-full transform transition-all duration-500 ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video mb-6 overflow-hidden rounded-lg">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-forge-gray-dark dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
