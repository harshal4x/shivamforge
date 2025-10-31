
import AdminLayout from '@/components/admin/AdminLayout';
import ProductFormComponent from '@/components/admin/ProductForm';

const ProductFormPage = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-forge-gray-dark dark:text-white mb-1">
            Add New Product
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Create a new product to showcase on the website
          </p>
        </div>
        
        <ProductFormComponent />
      </div>
    </AdminLayout>
  );
};

export default ProductFormPage;
