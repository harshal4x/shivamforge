
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

import { Product } from '@/models/types';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Edit, Trash2, Plus } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import {useEffect} from 'react'
import ProductForm from './ProductForm';
import { promises } from 'dns';
import SEO from '../SEO';


// Sample data for demonstration
const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Automotive Gear',
    category: 'Automotive',
    description: 'High-precision gear for automotive applications',
    image: '/lovable-uploads/b33655ec-234f-45da-9451-0b984ef8d32e.png',
    createdAt: new Date('2023-04-15'),
    updatedAt: new Date('2023-04-15'),
  },
  {
    id: '2',
    name: 'Railway Coupling',
    category: 'Railway',
    description: 'Durable railway coupling component',
    image: '/lovable-uploads/b33655ec-234f-45da-9451-0b984ef8d32e.png',
    createdAt: new Date('2023-04-10'),
    updatedAt: new Date('2023-04-12'),
  },
  {
    id: '3',
    name: 'Oil Flange',
    category: 'Oil & Gas',
    description: 'Corrosion-resistant flange for oil industry',
    image: '/lovable-uploads/b33655ec-234f-45da-9451-0b984ef8d32e.png',
    createdAt: new Date('2023-04-05'),
    updatedAt: new Date('2023-04-05'),
  },
  {
    id: '4',
    name: 'Defense Coupling',
    category: 'Defense',
    description: 'Specialized coupling for defense applications',
    image: '/lovable-uploads/b33655ec-234f-45da-9451-0b984ef8d32e.png',
    createdAt: new Date('2023-04-01'),
    updatedAt: new Date('2023-04-03'),
  },
  {
    id: '5',
    name: 'Power Shaft',
    category: 'Power Transmission',
    description: 'High-performance shaft for power transmission',
    image: '/lovable-uploads/b33655ec-234f-45da-9451-0b984ef8d32e.png',
    createdAt: new Date('2023-03-28'),
    updatedAt: new Date('2023-03-30'),
  },
];

export default function ProductList() {
  const navigate = useNavigate();


  // const [products, setProducts] = useState<Product[]>(sampleProducts);

  const [products, setProducts] = useState<Product[]>([]);
  const [categoryName, setCategoryName] = useState("");


    useEffect(()=>{
      async function fetchdata(){
        const res = await fetch("https://shivamforge-backend.onrender.com/products")
        //console.log(res)
        const data = await res.json() 
        data.forEach((e)=>e.createdAt = new Date(e.createdAt))
        data.forEach((e)=>e.updatedAt = new Date(e.updatedAt))
        setProducts(data)
        // //console.log("dataaaa "+typeof(data[0].createdAt))
        // //console.log("dataaaa "+typeof(data[0].name))
      }
      fetchdata()
    },[])

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  const deleteProduct = async (id: string) => {

    await fetch(`https://shivamforge-backend.onrender.com/products/${id}` , {
      method: 'DELETE'
    })

    
    setProducts(products.filter(product => product._id !== id));
    toast({
      title: 'Product deleted',
      description: 'The product has been successfully deleted.',
    });
  };


  const editProduct = async (id:String) => {
    //console.log("click")
    navigate(`/admin/products/update/${id}`)
    return 
  }

//   async function findNameUsingId(id:String){
//     const res = await fetch(`https://shivamforge-backend.onrender.com/category/${id}`)
//     const data =  await res.json() 
//     return data.name
// }

  return (
    <div className="space-y-4">
      <SEO title={'Products'} description={''}/>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-forge-gray-dark dark:text-white">
          Products
        </h1>
        <Link to="/admin/products/new">
          <Button className="bg-gradient-forge">
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </Link>
      </div>

      <div className="bg-white dark:bg-forge-gray rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Updated</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product._id}>
                  <TableCell>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="h-10 w-10 rounded-md object-cover"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product?.category}</TableCell>
                  <TableCell>{formatDate(product.createdAt)}</TableCell>
                  <TableCell>{formatDate(product.updatedAt)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-blue-500"
                        onClick={()=>editProduct(product._id)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-500"
                        onClick={() => deleteProduct(product._id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
