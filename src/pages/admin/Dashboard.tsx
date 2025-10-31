
import AdminLayout from '@/components/admin/AdminLayout';
import DashboardStats from '@/components/admin/DashboardStats';
import RecentInquiries from '@/components/admin/RecentInquiries';

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-forge-gray-dark dark:text-white mb-1">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Welcome to the Shivam Forge admin panel
          </p>
        </div>
        
        <DashboardStats />
        
        <RecentInquiries />
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
