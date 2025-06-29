
import AdminLayout from '@/components/admin/AdminLayout';
import UpdateProductForm from '@/components/admin/UpdateProductForm';

const UpdateProductPage = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-forge-gray-dark dark:text-white mb-1">
            update Product
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Update product to showcase on the website
          </p>
        </div>
        
        <UpdateProductForm />
      </div>
    </AdminLayout>
  );
};

export default UpdateProductPage;
