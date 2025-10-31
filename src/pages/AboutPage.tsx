import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.1 });

  const storyVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 100 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.4,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.3
    }
  }
};

  return (
    <>
    <SEO
      title="About Shivam Forge – Leaders in Forging"
      description="Learn more about Shivam Forge's journey, mission, and dedication to delivering quality forged and casted components."
      canonicalUrl="https://www.shivamforge.com/about"
    />

    <Layout>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden bg-gradient-to-r from-forge-orange to-forge-red"
      >
        <div className="absolute inset-0 opacity-25 animate-blob bg-gradient-to-br from-pink-300 via-orange-300 to-red-400 mix-blend-overlay blur-xl"></div>
        <div className="relative py-12 md:py-16 px-6 text-center text-white z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold drop-shadow-lg text-white flex flex-wrap justify-center gap-2 cursor-default"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.05 }
              }
            }}
          >
            {"Welcome to Shivam".split("").map((char, index) => (
              <motion.span
                key={index}
                className="text-white transition duration-300"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.3, rotate: 2 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <motion.span
              className="text-white flex items-center gap-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10, delay: 1 }}
            >
              Forge <Flame className="animate-fire w-6 h-6 text-white" />
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-4 text-base md:text-lg max-w-2xl mx-auto text-white/90"
          >
            Leading the industry in forging and casting solutions with unmatched quality, innovation, and precision engineering.
          </motion.p>
        </div>
      </motion.div>

      {/* Animated Fire Keyframes */}
      <style>{`
        @keyframes fire {
          0%, 100% { transform: scale(1) rotate(0deg); color: inherit; }
          50% { transform: scale(1.2) rotate(-10deg); color: inherit; }
        }
        .animate-fire {
          animation: fire 1s infinite ease-in-out;
        }
      `}</style>

      {/* Our Story */}
      <div ref={ref1} className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6 text-forge-gray-dark dark:text-white">
              Our Legacy of Excellence
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              Shivam Forge stands as a hallmark of synergy and innovation. From humble beginnings, our vision was clear — deliver world-class forging and casting solutions.
              Our 2,000 sq. m facility is a powerhouse of modern machinery, capable of serving industries across the globe with unmatched precision and reliability.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We believe in engineering excellence. Through continuous research and development, we constantly upgrade our processes to align with global benchmarks and exceed customer expectations.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative group overflow-hidden rounded-xl shadow-xl"
          >
            <img
              src="https://res.cloudinary.com/dcuhpeczg/image/upload/v1751086112/products/ev6ix67yfs7oqeve5cg7.jpg"
              alt="Shivam Forge Facility"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">Shivam Forge HQ</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Experience Section */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 px-6">
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 100 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="container mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forge-gray-dark dark:text-white mb-4">
              The Shivam Forge Experience
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              Harnessing world-class talent, cutting-edge technology, and industry wisdom to deliver excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{ id: "01", title: "Expert Team", text: "Guided by industry leaders from top forging & casting companies." },
              { id: "02", title: "Technical Excellence", text: "Masters in heat treatment, plating, galvanizing & metallurgy." },
              { id: "03", title: "Relentless Quality", text: "Process-driven approach with international certifications." }].map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
                className="bg-white dark:bg-forge-gray rounded-2xl shadow-md p-8 text-center hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="h-16 w-16 mx-auto bg-gradient-to-tr from-orange-200 to-red-400 text-white flex items-center justify-center rounded-full text-xl font-bold mb-4 shadow-inner">
                  {card.id}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-forge-gray-dark dark:text-white">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Growth Journey */}
      <div ref={ref3} className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://res.cloudinary.com/dcuhpeczg/image/upload/v1751086018/products/smitpk7gle9pkwiftvhq.jpg"
              alt="Growth Chart"
              className="w-full h-auto"
            />
          </motion.div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-forge-gray-dark dark:text-white mb-4">
              Our Growth Journey
            </h2>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-forge-gray-dark dark:text-white">
                Growth Footprint
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                Scaling from ₹6 Cr to ₹100 Cr in 5 years with a ₹10 Cr investment in machinery and innovation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-forge-gray-dark dark:text-white">
                Innovation at Core
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                Constant research fuels our ability to outperform and reimagine forging standards.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-forge-gray-dark dark:text-white">
                People Powered
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                Empowered by multidisciplinary talent, we foster innovation and reliability at scale.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
    </>
  );
};

export default AboutPage;
