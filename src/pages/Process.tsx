
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import ProductCategories from "@/components/home/ProductCategories";
import AboutSection from "@/components/home/AboutSection";
import CallToAction from "@/components/home/CallToAction";
import ProcessPage from "@/components/process/ProcessPage";
import SEO from "@/components/SEO";
import {useEffect} from 'react'
const Index = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
    <SEO title={"Process page"} description={`Manufacturing Process Flow A leader in forging and casting solutions with unmatched quality and innovation`} />
    <Layout>
      <div className="bg-gradient-to-r from-forge-orange to-forge-red py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Manufacturing Process Flow
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            A leader in forging and casting solutions with unmatched quality and innovation
          </p>
        </div>
      </div>
        <ProcessPage/>
    </Layout>
    </>
  );
};

export default Index;
