
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import LoginForm from '@/components/admin/LoginForm';

const AdminLogin = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      navigate('/admin/dashboard');
    }
  }, [isAuthenticated, isLoading, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-forge-gray-dark p-4">
      <div className="max-w-md w-full bg-white dark:bg-forge-gray rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center mb-4">
            <img 
              src="https://res.cloudinary.com/dcuhpeczg/image/upload/v1749619186/products/oqynug8dvg6ydb1vxcbx.png" 
              alt="Shivam Forge" 
              className="h-12 w-auto rounded-full border-1 border-white block mx-auto mb-2.5 object-cover">
            
            </img>
            <span className="ml-2 font-medium text-forge-gray-dark dark:text-white">
              Shivam Forge
            </span>
          </div>
          <h1 className="text-2xl font-bold text-forge-gray-dark dark:text-white">
            Admin Login
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Sign in to access the admin dashboard
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-forge-orange"></div>
          </div>
        ) : (
          <LoginForm />
        )}
      </div>
    </div>
  );
};

export default AdminLogin;
