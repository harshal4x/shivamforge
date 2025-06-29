import React from 'react';
import { useInView } from 'react-intersection-observer'; // Assuming useInView is from 'react-intersection-observer'
import { Link } from 'react-router-dom'; // Assuming Link is from 'react-router-dom'
import SEO from '../SEO';

// --- Button Component Definition (Added to resolve compilation error) ---
// This is a placeholder Button component. In a real application, you might
// have this in a separate file like './Button.jsx' or './Button.js'.
const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`py-3 px-6 rounded-lg font-semibold text-center transition duration-300 ease-in-out hover:opacity-90 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
// --- End Button Component Definition ---


// Define a consistent set of dark blue colors
// You can customize these hex codes as needed
const blueColors = {
  // Main backgrounds
  lightBg: '#e0e7ed', // Very light blue-gray
  darkBg: '#0F1D36',  // Deep navy for dark mode background

  // Text colors
  headingLight: '#0F1D36', // Deep navy for light mode headings
  headingDark: '#E0E7ED',  // Light blue-gray for dark mode headings
  bodyLight: '#3D5A80',   // Steel blue for light mode body text
  bodyDark: '#AABCCD',   // Lighter gray-blue for dark mode body text

  // Gradient colors (for highlights, buttons, checkmarks)
  gradientFrom: '#1A2B4C', // Dark muted blue
  gradientTo: '#0F1D36',   // Deeper navy
  footerBg: '#051022',    // Very dark blue for footer-like elements
};

export default function ShivamForgeEdgeSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
    <SEO title={"Aboutsection"} description={`The Shivam Forge Edge From design to delivery, quality enhancement to cost reduction, we bring together energized talent and cutting-edge technology to provide unmatched value to our customers.`}/>
    // Updated background colors for light and dark modes
    <section ref={ref} className={`py-20 bg-[${blueColors.lightBg}] dark:bg-[${blueColors.darkBg}]`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 transform ${
              inView
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Updated heading colors for light and dark modes */}
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-[${blueColors.headingLight}] dark:text-[${blueColors.headingDark}]`}>
              The Shivam Forge Edge
            </h2>
            {/* Updated paragraph text colors for light and dark modes */}
            <p className={`text-[${blueColors.bodyLight}] dark:text-[${blueColors.bodyDark}] mb-6`}>
              From design to delivery, quality enhancement to cost reduction, we bring together energized talent and cutting-edge technology to provide unmatched value to our customers.
            </p>
            <p className={`text-[${blueColors.bodyLight}] dark:text-[${blueColors.bodyDark}] mb-6`}>
              We believe in pursuing excellence at all levels. Towards this, we continuously evolve product and process efficiencies by implementing practices that align with highest standards, nationally and globally.
            </p>
            <div className="mb-8 space-y-4">
              <div className="flex items-start">
                {/* Updated background gradient for checkmark circles */}
                <div className={`flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[${blueColors.gradientFrom}] to-[${blueColors.gradientTo}] flex items-center justify-center mt-1`}>
                  <span className="text-white text-xs">✓</span>
                </div>
                {/* Updated text color for list items */}
                <p className={`ml-3 text-[${blueColors.bodyLight}] dark:text-[${blueColors.bodyDark}]`}>Experienced and dynamic management team</p>
              </div>
              <div className="flex items-start">
                {/* Updated background gradient for checkmark circles */}
                <div className={`flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[${blueColors.gradientFrom}] to-[${blueColors.gradientTo}] flex items-center justify-center mt-1`}>
                  <span className="text-white text-xs">✓</span>
                </div>
                {/* Updated text color for list items */}
                <p className={`ml-3 text-[${blueColors.bodyLight}] dark:text-[${blueColors.bodyDark}]`}>World-class infrastructure and technology</p>
              </div>
              <div className="flex items-start">
                {/* Updated background gradient for checkmark circles */}
                <div className={`flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[${blueColors.gradientFrom}] to-[${blueColors.gradientTo}] flex items-center justify-center mt-1`}>
                  <span className="text-white text-xs">✓</span>
                </div>
                {/* Updated text color for list items */}
                <p className={`ml-3 text-[${blueColors.bodyLight}] dark:text-[${blueColors.bodyDark}]`}>Globally benchmarked production processes</p>
              </div>
            </div>
            <Link to="/about">
              {/* Updated background gradient for the button */}
              <Button className={`bg-gradient-to-r from-[${blueColors.gradientFrom}] to-[${blueColors.gradientTo}] text-white`}>
                Learn More About Us
              </Button>
            </Link>
          </div>
          <div
            className={`relative transition-all duration-1000 transform ${
              inView
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://res.cloudinary.com/dcuhpeczg/image/upload/v1751085867/products/bsaaxqaztp7q5wwxi9b9.jpg"
                alt="Shivam Forge Facility"
                className="w-full h-auto"
              />
            </div>
            {/* The absolute positioned image/div does not have explicit colors in the original,
                but if animate-glow-pulse implies a color, you might need to adjust it
                depending on its definition in your global CSS.
                For now, keeping it as is.
            */}
            {/* <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-lg overflow-hidden shadow-lg animate-glow-pulse">
              <img
                src="/lovable-uploads/4c086d5f-ccd8-4223-91fb-13841c1feb10.png"
                alt="Forging Process"
                className="w-full h-full object-cover"
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
