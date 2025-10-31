
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/hooks/useAuth";
import AdminGuard from "@/components/admin/AdminGuard";
import { HelmetProvider } from 'react-helmet-async';

// Pages
import Index from "./pages/Index";
import ProductsPage from "./pages/ProductsPage.tsx";
import InfrastructurePage from "./pages/InfrastructurePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import OneProductPage from './pages/OneProductPage'
import ProcessPage from "./pages/Process.tsx";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import Inquiries from "./pages/admin/Inquiries";
import ProductForm from "./pages/admin/ProductForm";
import Settings from "./pages/admin/Settings";
import Infrastructure from "./pages/admin/Infrastructure";
import UpdateProductPage from "./pages/admin/UpdateProduct"

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ThemeProvider>
          <AuthContextWrapper />
        </ThemeProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

// Separate component to use authentication context within BrowserRouter
const AuthContextWrapper = () => (
  <AuthProvider>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<OneProductPage />} />
      <Route path="/infrastructure" element={<InfrastructurePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/process" element={<ProcessPage />} />

      
      {/* Admin Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminGuard><Dashboard /></AdminGuard>} />
      <Route path="/admin/products" element={<AdminGuard><Products /></AdminGuard>} />
      <Route path="/admin/products/new" element={<AdminGuard><ProductForm /></AdminGuard>} />
      <Route path="/admin/products/update/:id" element={<AdminGuard><UpdateProductPage /></AdminGuard>} />
      <Route path="/admin/inquiries" element={<AdminGuard><Inquiries /></AdminGuard>} />
      <Route path="/admin/settings" element={<AdminGuard><Settings /></AdminGuard>} />
      <Route path="/admin/infrastructure" element={<AdminGuard><Infrastructure /></AdminGuard>} />
      <Route path="/admin" element={<AdminGuard><Dashboard /></AdminGuard>} />
      
      
      {/* Catch-all route for 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </AuthProvider>
);

export default App;
