
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import ProductCategories from "@/components/home/ProductCategories";
import AboutSection from "@/components/home/AboutSection";
import CallToAction from "@/components/home/CallToAction";
import StatsBanner from "@/components/StatsBanner";
import SEO from "@/components/SEO";
const Index = () => {
  return (
    <>
    <SEO
      title="Shivam Forge – Forging & Casting Experts"
      description="Shivam Forge is a leading manufacturer in Shapar, Gujarat offering high-quality forging, casting, and CNC machining solutions."
      canonicalUrl="https://www.shivamforge.com/"
    />


    <Layout>
      <Hero />
      {/* <Features /> */}
      <ProductCategories />
      <StatsBanner/>
      <AboutSection />
      <CallToAction />
    </Layout>
    </>
  );
};

export default Index;
