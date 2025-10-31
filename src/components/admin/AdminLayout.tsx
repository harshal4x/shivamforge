
import { ReactNode, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  Settings, 
  LogOut, 
  ChevronLeft, 
  Menu 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navItems = [
    { 
      name: 'Dashboard', 
      path: '/admin/dashboard', 
      icon: <LayoutDashboard size={20} /> 
    },
    { 
      name: 'Products', 
      path: '/admin/products', 
      icon: <Package size={20} /> 
    },
    { 
      name: 'Inquiries', 
      path: '/admin/inquiries', 
      icon: <Users size={20} /> 
    },
    { 
      name: 'Settings', 
      path: '/admin/settings', 
      icon: <Settings size={20} /> 
    },
    // { 
    //   name: 'Infrastructure', 
    //   path: '/admin/infrastructure', 
    //   icon: <Settings size={20} /> 
    // }
  ];

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 dark:bg-forge-gray-dark">
      {/* Sidebar */}
      <aside 
        className={`fixed md:sticky top-0 left-0 z-30 h-screen bg-white dark:bg-forge-gray shadow-md transition-all duration-300 ${
          sidebarOpen ? 'w-64' : 'w-0 md:w-20 overflow-hidden'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-forge-gray">
            <Link to="/admin/dashboard" className="flex items-center">
              {sidebarOpen ? (
                <>
                  {/* <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-forge">
                    <span className="text-forge-red">S</span>
                    <span className="text-forge-orange">F</span>
                  </div> */}
                  <img 
                    src="https://res.cloudinary.com/dcuhpeczg/image/upload/v1749619186/products/oqynug8dvg6ydb1vxcbx.png" 
                    alt="Shivam Forge" 
                    className="h-12 w-auto rounded-full border-1 border-white block mx-auto mb-2.5 object-cover">
                  
                  </img>
                  <span className="ml-2 font-medium text-forge-gray-dark dark:text-white">
                    Admin Panel
                  </span>
                </>
              ) : (
                <img 
                    src="https://res.cloudinary.com/dcuhpeczg/image/upload/v1749619186/products/oqynug8dvg6ydb1vxcbx.png" 
                    alt="Shivam Forge" 
                    className="h-7 w-11 w-auto rounded-full border-1 border-white block mx-auto mb-2.5 object-cover">
                  
                  </img>
              )}
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hidden md:flex"
            >
              <ChevronLeft 
                size={20} 
                className={`transition-transform duration-300 ${sidebarOpen ? '' : 'transform rotate-180'}`} 
              />
            </Button>
          </div>
          
          <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-3 py-3 rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'bg-forge-orange/10 text-forge-orange'
                    : 'text-forge-gray-dark dark:text-white hover:bg-gray-100 dark:hover:bg-forge-gray'
                }`}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {sidebarOpen && <span className="ml-3">{item.name}</span>}
              </Link>
            ))}
          </nav>
          
          <div className="p-4 border-t border-gray-100 dark:border-forge-gray flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className={`text-forge-gray-dark dark:text-white hover:bg-gray-100 dark:hover:bg-forge-gray ${
                sidebarOpen ? 'w-full justify-start' : 'w-auto justify-center'
              }`}
            >
              <LogOut size={20} />
              {sidebarOpen && <span className="ml-2">Logout</span>}
            </Button>
            {sidebarOpen && <ThemeToggle />}
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-20 bg-white dark:bg-forge-gray shadow-md">
        <div className="flex items-center justify-between p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu size={24} />
          </Button>
          <Link to="/admin/dashboard" className="flex items-center">
            <img 
              src="https://res.cloudinary.com/dcuhpeczg/image/upload/v1749619186/products/oqynug8dvg6ydb1vxcbx.png" 
              alt="Shivam Forge" 
              className="h-9 w-auto rounded-full border-1 border-white block mx-auto mb-2.5 object-cover">
            
            </img>  
            <span className="ml-2 font-medium text-forge-gray-dark dark:text-white">
              Admin
            </span>
          </Link>
          <ThemeToggle />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 pt-20 md:pt-8">
        {children}
      </main>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
