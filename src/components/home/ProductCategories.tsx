
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Category, Product,Categories } from '@/models/types';
import {useEffect,useState} from 'react'
import SEO from '../SEO';

const categories = [
  {
    id: 'automotive',
    name: 'Automotive',
    description: 'Precision components for the automotive industry',
    image: '/lovable-uploads/b33655ec-234f-45da-9451-0b984ef8d32e.png',
  },
  {
    id: 'railway',
    name: 'Railway',
    description: 'Durable parts for railway applications',
    image: '/lovable-uploads/b33655ec-234f-45da-9451-0b984ef8d32e.png',
  },
  {
    id: 'oil-and-gas',
    name: 'Oil & Gas',
    description: 'Reliable components for demanding environments',
    image: '/lovable-uploads/b33655ec-234f-45da-9451-0b984ef8d32e.png',
  },
  {
    id: 'defense',
    name: 'Defense',
    description: 'Specialized parts for defense applications',
    image: '/lovable-uploads/b33655ec-234f-45da-9451-0b984ef8d32e.png',
  },
  {
    id: 'power-transmission',
    name: 'Power Transmission',
    description: 'Components for energy transmission systems',
    image: '/lovable-uploads/b33655ec-234f-45da-9451-0b984ef8d32e.png',
  },
  {
    id: 'cnc-machined',
    name: 'CNC Machined',
    description: 'Precision crafted CNC machined parts',
    image: '/lovable-uploads/e8af8c9f-c47e-41a5-a69e-2a86de9611ff.png',
  },
];

export default function ProductCategories() {
  
  const [categories , setcategories] = useState<Categories>([])
  const [categoryName, setcategoryName] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(()=>{
    async function fetchdata(){
      const res = await fetch("https://shivamforge-backend.onrender.com/category")
      //console.log(res)
      const data = await res.json() 
      setcategoryName(data)
      // //console.log("dataaaa "+typeof(data[0].createdAt))
      // //console.log("dataaaa "+typeof(data[0].name))
    }
    fetchdata()
  },[])

useEffect(() => {
  async function fetchdata() {
    const res = await fetch("https://shivamforge-backend.onrender.com/products");
    const data = await res.json();
    setProducts(data);
  }
  fetchdata();
}, []);

// //console.log("categoryName _id "+categoryName[0]._id)
  // //console.log("products description "+products[0].description)
useEffect(() => {
    if (categoryName.length > 0 && products.length > 0) {

    const combined:any = categoryName.map((c:any,ind)=>(
      {
          id:c._id,
          name:c.name,
          description:products[ind].description,
          image:products[ind].image
      }))

      setcategories(combined)

    }
},[categoryName, products])




  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
    <SEO title={"Our Product Categories"} description={`Automotive
    Oil And Gas Industry
    Tractor And Farm Equipments
    Mining
    Industrial
    Impression-Die Forging
    Industrial Part`}/>
    
    <section ref={ref} className="py-20 bg-white dark:bg-forge-gray-dark">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-forge-gray-dark dark:text-white">
            Our Product Categories
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Explore our wide range of quality products across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link 
              to={`/products/?category=${category.name}`} 
              key={category.id}
              className={`group relative overflow-hidden rounded-lg shadow-md transition-all duration-500 ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 transition-all duration-300 opacity-90 group-hover:opacity-100">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-white/80 text-sm transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {category.description.slice(0,150)}...
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
