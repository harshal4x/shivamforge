import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Category, Product } from '@/models/types';
import { Link } from "lucide-react";
import SEO from "@/components/SEO";

const ProductsPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const categoryQuery = searchParams.get("category");

  const [products, setProducts] = useState<Product[]>([]);
  const [productCategories, setProductCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState(categoryQuery || 'all');

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  // Sync activeCategory if URL param changes
  useEffect(() => {
    if (categoryQuery) {
      setActiveCategory(categoryQuery);
    }
  }, [categoryQuery]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://shivamforge-backend.onrender.com/products");
      const data = await res.json();
      data.forEach((e: any) => {
        e.createdAt = new Date(e.createdAt);
        e.updatedAt = new Date(e.updatedAt);
      });
      setProducts(data);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch("https://shivamforge-backend.onrender.com/category");
      const data = await res.json();
      setProductCategories(data);
    }
    fetchCategories();
  }, []);

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <>
    <SEO
      title="Our Products – Shivam Forge"
      description="View our range of forged and casted products designed for industrial, automotive, and agricultural applications."
      canonicalUrl="https://www.shivamforge.com/products"
    />

    <Layout>
      <div className="bg-gradient-to-r from-forge-orange to-forge-red py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Our Products
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Explore our range of high-quality forging and casting products for various industries.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {productCategories.map((category: any) => (
              <Button
                key={category._id}
                variant={activeCategory === category.name ? activeCategory : "all" }
                className={`whitespace-nowrap ${
                  activeCategory === category.name
                    ? "bg-gradient-forge text-white"
                    : "text-forge-gray-dark dark:text-white"
                }`}
                onClick={() => {
                  setActiveCategory(category.name);
                  navigate(`?category=${category.name}`);
                }}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product, index) => (
            <div
              key={product._id}
              onClick={() => navigate(`/products/${product._id}`)}
              className={`forge-card group transition-all duration-500 transform cursor-pointer rounded-lg shadow-md hover:shadow-xl bg-white dark:bg-gray-900 overflow-hidden ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-forge-gray-dark dark:text-white">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {product.description.slice(0,150)}...
                </p>
                <div className="text-[13px] text-blue-700 dark:text-blue-400 font-semibold mt-2">
                  View Product →
                </div>
              </div>
            </div>
          ))}

        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
      
    </Layout>
    </>
  );
};

export default ProductsPage;
