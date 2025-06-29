
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import ProductCategories from "@/components/home/ProductCategories";
import AboutSection from "@/components/home/AboutSection";
import CallToAction from "@/components/home/CallToAction";
import StatsBanner from "@/components/StatsBanner";
const Index = () => {
  return (
    <Layout>
      <Hero />
      {/* <Features /> */}
      <ProductCategories />
      <StatsBanner/>
      <AboutSection />
      <CallToAction />
    </Layout>
  );
};

export default Index;
