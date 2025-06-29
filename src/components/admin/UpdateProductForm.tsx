import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Category, Product } from '@/models/types';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Product name must be at least 2 characters' }),
  category: z.string().min(1, { message: 'Please select a category' }),
  description: z.string().min(10, { message: 'Description must be at least 10 characters' }),
  image: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function UpdateProductForm() {
  const { id } = useParams();
  const [file, setFile] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState('');
  const [uploading, setUploading] = useState(false);
  const [catagorytext, setcatagorytext] = useState('');
  const [categories, setcategories] = useState<Category[]>([]);
  const [product, setproduct] = useState<Product | null>(null);
  const [LoadingAutoFill , setLoadingAutoFill] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      category: '',
      description: '',
      image: '',
    },
  });

  // Fetch categories
  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch("https://shivamforge-backend.onrender.com/category");
      const data = await res.json();
      setcategories(data);
    }
    fetchCategories();
  }, []);

  // Fetch product (edit mode)
  useEffect(() => {
    async function fetchProduct() {
      if (!id) return;
      try {
        const res = await fetch(`https://shivamforge-backend.onrender.com/products/${id}`);
        const data = await res.json();
        setproduct(data);
        form.reset({
          name: data.name || '',
          category: data.category || '',
          description: data.description || '',
          image: data.image || '',
        });
        setImageURL(data.image || '');
      } catch (err) {
        console.error('Error fetching product:', err);
      }
    }
    fetchProduct();
  }, [id, form]);

  const toBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;
    setFile(selectedFile);
    setUploading(true);
    try {
      const imageBase64 = await toBase64(selectedFile);
      const response = await axios.post('https://shivamforge-backend.onrender.com/products/upload', {
        imageBase64,
      });
      setImageURL(response.data.url);
      toast({
        title: 'Image uploaded',
        description: 'Image uploaded successfully to Cloudinary.',
      });
    } catch (error) {
      toast({ title: 'Upload failed', description: 'Failed to upload image.' });
    } finally {
      setUploading(false);
    }
  };

  const onSubmit = async (data: FormValues) => {
    if (!imageURL) {
      alert('Please upload an image first.');
      return;
    }

    const payload = {
      ...data,
      image: imageURL,
    };
    //console.log("id of frontend "+id)
    //console.log("payload of frontend "+payload.name)
    

    if(!id){
      return
    }

    try {
      const res = await fetch(`https://shivamforge-backend.onrender.com/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast({
          title: 'Product created',
          description: 'The product has been successfully created.',
        });
        form.reset();
        setImageURL('');
        setFile(null);
      } else {
        toast({ title: 'Error', description: 'Failed to create product.' });
      }
    } catch (error) {
      toast({ title: 'Error', description: 'Something went wrong.' });
    }
  };

  async function addCatagoryHandler() {
    try {
      await fetch('https://shivamforge-backend.onrender.com/category', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: catagorytext }),
      });
      toast({
        title: '🎉 Category Added!',
        description: 'New category added successfully.',
        duration: 3000,
      });
    } catch (e) {
      toast({
        title: 'Error in submit!',
        description: 'Please try again.',
        duration: 3000,
      });
    }

    window.location.reload(); // reload after toast
  }

  async function dleteCategoryHandler(id:String){
      //console.log("delete clicked")
      await fetch(`https://shivamforge-backend.onrender.com/category/${id}` , {
        method: 'Delete'
      })
        window.location.reload();
    }
  
    async function autoFill() {
    setLoadingAutoFill(true);
    try {
      const response = await fetch('https://shivamforge-backend.onrender.com/hf-callapi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: form.getValues('name') }), // send product name or other data if needed
      });
  
      if (!response.ok) throw new Error('Failed to fetch autofill data');
  
      const data = await response.json();
  
      // Assuming the API returns { message: "Generated description" }
      form.setValue('description', data.msg); // update description field
      setLoadingAutoFill(false);
  
      toast({
        title: 'Auto-filled!',
        description: 'Description updated with AI-generated content.',
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Auto-fill Failed',
        description: 'Could not fetch description from server.',
        variant: 'destructive',
      });
    }
  }
  

  return (
    <div className="bg-white dark:bg-forge-gray rounded-xl shadow-sm p-6">
      <input
        type="text"
        placeholder="Add New Category"
        onChange={(e) => setcatagorytext(e.target.value)}
        style={{ color: "black", padding: "10px", borderRadius: "10px" }}
      />
      <Button onClick={addCatagoryHandler}>Add new category</Button>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Name</FormLabel>
                <FormControl>
                  <Input {...field} className="forge-input" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

                    <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="forge-input">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    {categories.map((category) => (
                      <div
                        key={category._id}
                        className="relative flex items-center justify-between px-3 py-2 hover:bg-blue-50 dark:hover:bg-neutral-800 rounded-md transition"
                      >
                        <SelectItem
                          value={category.name}
                          className="flex-1 pr-8 truncate"
                        >
                          {category.name}
                        </SelectItem>

                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent selecting the item
                            dleteCategoryHandler(category._id);
                          }}
                          className="absolute right-3 text-red-500 hover:text-red-700 text-sm z-10"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>

            )}
          />


           <Button onClick={autoFill}>Auto fill</Button>
                    {LoadingAutoFill &&  
                    <div>
                      <div className="flex flex-col items-center gap-4">
                        {/* Spinner */}
                        <div className="relative w-12 h-12">
                          <div className="absolute inset-0 rounded-full border-4 border-blue-900 dark:border-blue-300 border-t-transparent animate-spin"></div>
                        </div>
          
                        {/* Loading Text */}
                        <p className="text-blue-900 dark:text-blue-300 text-lg font-medium tracking-wide animate-pulse">
                          Loading...
                        </p>
                      </div>
                    </div>
                    }

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter product description"
                    {...field}
                    className="forge-input min-h-[120px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <FormLabel>Choose Product Image</FormLabel>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {uploading && <p className="text-sm text-muted">Uploading...</p>}
            {imageURL && (
              <div style={{ marginTop: 10 }}>
                <img src={imageURL} alt="Uploaded" width="300" style={{ borderRadius: 8 }} />
                <p className="text-xs text-muted">
                  <strong>URL:</strong>{' '}
                  <a href={imageURL} target="_blank" rel="noopener noreferrer">
                    {imageURL}
                  </a>
                </p>
              </div>
            )}
          </div>

          <Button
            type="submit"
            className="bg-gradient-forge text-white"
            disabled={!imageURL || uploading}
          >
            Update Product
          </Button>
        </form>
      </Form>
    </div>
  );
}
