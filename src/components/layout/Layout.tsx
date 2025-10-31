
import { ReactNode } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import SEO from '../SEO';


const titles: Record<string, string> = {
  '/': 'Home - Shivam Forge',
  '/products': 'Products - Shivam Forge',
  '/about': 'About Us - Shivam Forge',
  '/contact': 'Contact - Shivam Forge',
};

const descriptions: Record<string, string> = {
  '/': 'Welcome to Shivam Forge – World-class forging and machining solutions.',
  '/products': 'Explore our precision-forged products and CNC/VMC machined components. 1.Automotive Oil And Gas Industry 2.Tractor And Farm Equipments 3.Mining 4.Industrial',
  '/about': 'Learn more about Shivam Forge’s legacy and advanced facility.',
  '/contact': 'Get in touch with Shivam Forge’s dynamic team.',
};

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const location = useLocation();
  const path = location.pathname;

  return (
    
    <div className="min-h-screen flex flex-col">
      <SEO title={titles[path] || 'Shivam Forge'} description={descriptions[path] || 'Shivam Forge: World-class forging and casting solutions.'}/>
      <main className="flex-grow pt-16">
      <NavBar />
        {children}
      </main>
      <Footer />
    </div>
  );
}
