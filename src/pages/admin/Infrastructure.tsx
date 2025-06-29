
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { useTheme } from '@/context/ThemeContext';

const Settings = () => {
  const { theme } = useTheme();

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-forge-gray-dark dark:text-white mb-1">
            Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage your admin preferences
          </p>
        </div>
        
        <div className="bg-white dark:bg-forge-gray rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4 text-forge-gray-dark dark:text-white">
            Appearance
          </h2>
          <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
            <div>
              <h3 className="font-medium text-forge-gray-dark dark:text-white">
                Theme Mode
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Switch between light and dark mode
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 dark:text-gray-300">
                {theme === 'light' ? 'Light' : 'Dark'} mode active
              </span>
              <ThemeToggle />
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-forge-gray rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4 text-forge-gray-dark dark:text-white">
            Security
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-forge-gray-dark dark:text-white mb-2">
                Change Password
              </h3>
              <Button variant="outline" className="text-forge-gray-dark dark:text-white">
                Update Password
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Settings;
