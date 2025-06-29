
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  specifications?: Record<string, string>;
  createdAt: Date;
  updatedAt: Date;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: 'pending' | 'approved' | 'blocked';
  createdAt: Date;
}

export interface User {
  id: string;
  username: string;
  role: 'admin';
}

export interface Category{
  id:String,
  name:String
}

export interface Categories{
  id:String,
  name:String,
  description:String,
  image:String
}