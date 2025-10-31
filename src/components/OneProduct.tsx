import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SEO from './SEO'; // adjust the path as needed

type Product = {
  _id: string;
  name: string;
  description: string;
  category: string;
  image: string;
};

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const productName = `Product ${id}`; // Replace with actual lookup
  const description = `High-quality ${productName} for industrial use. Forged with precision at Shivam Forge.`;
  const canonicalUrl = `https://www.shivamforge.com/products/${id}`;


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://shivamforge-backend.onrender.com/products");
      const products = await res.json();
      setAllProducts(products);
      const current = products.find((p: Product) => p._id === id);
      setProduct(current || null);
      setLoading(false);
    }
    fetchData();
  }, [id]);

  const goToCategory = () => {
    if (product?.category) {
      navigate(`/products?category=${product.category}`);
    }
  };

  const goToPrevious = () => {
    if (!product) return;
    const index = allProducts.findIndex((p) => p._id === product._id);
    const prevIndex = (index - 1 + allProducts.length) % allProducts.length;
    navigate(`/products/${allProducts[prevIndex]._id}`);
  };

  const goToNext = () => {
    if (!product) return;
    const index = allProducts.findIndex((p) => p._id === product._id);
    const nextIndex = (index + 1) % allProducts.length;
    navigate(`/products/${allProducts[nextIndex]._id}`);
  };

  if (loading || !product) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white dark:from-neutral-900 dark:to-neutral-800">
        <p className="text-xl text-blue-800 dark:text-blue-300 animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <>
    {id && (
        <SEO
          title={`${productName} – Shivam Forge`}
          description={description}
          canonicalUrl={canonicalUrl}
          indexable={false} // block indexing if needed
        />
    )}
    
    <div className="w-screen h-screen flex flex-col md:flex-row overflow-y-auto scrollbar-hidden bg-gradient-to-br from-white to-blue-50 dark:from-neutral-900 dark:to-neutral-800 text-black dark:text-white">
      
      <div className="w-full md:w-1/2">
        <div className="w-full h-[40vh] md:h-screen overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-500 hover:scale-105 cursor-grab active:cursor-grabbing"
            draggable
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 h-full px-6 py-8 overflow-y-auto scrollbar-hidden">
        <div className="space-y-6 pb-24">

          <button
            onClick={goToCategory}
            className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-4 py-1 text-sm rounded-full font-medium hover:scale-105 transition"
          >
            {product.category.toUpperCase()}
          </button>

          <h1 className="text-4xl font-extrabold text-blue-900 dark:text-white">
            {product.name}
          </h1>

          <p className="text-gray-700 dark:text-gray-300 border-l-4 border-blue-300 dark:border-blue-500 pl-4 italic leading-relaxed">
            {product.description}
          </p>

          <div className="flex gap-4 pt-4">
            <button
              onClick={goToPrevious}
              className="flex-1 px-4 py-3 bg-white dark:bg-neutral-800 border border-blue-300 dark:border-blue-600 rounded-xl text-blue-800 dark:text-white font-medium hover:scale-105 transition"
            >
              ← Previous
            </button>
            <button
              onClick={goToNext}
              className="flex-1 px-4 py-3 bg-white dark:bg-neutral-800 border border-blue-300 dark:border-blue-600 rounded-xl text-blue-800 dark:text-white font-medium hover:scale-105 transition"
            >
              Next →
            </button>
          </div>

          <div className="pt-4">
            <button
              onClick={() => navigate("/contact")}
              className="w-full px-6 py-3 bg-blue-800 text-white rounded-xl text-lg font-semibold hover:bg-blue-900 shadow transition hover:scale-105"
            >
              Enquire Now
            </button>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}
