import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  CreditCard,
  Archive,
  Tag,
  Bell,
  BarChart3,
  Settings,
  UserCog,
  LogOut,
  Menu,
  X,
  Search,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  XCircle
} from 'lucide-react';

export default function AdminDashboard() {
  const { user, logout, isAuthenticated, isLoading } = useAuth();
  const [activeSection, setActiveSection] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Redirect if not authenticated or not admin
    if (!isLoading && (!isAuthenticated || !user?.isAdmin)) {
      window.location.href = '/login';
    }
  }, [isAuthenticated, user, isLoading]);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard, href: '/admin' },
    { id: 'orders', label: 'Orders', icon: Package, href: '/admin/orders' },
    { id: 'products', label: 'Products', icon: ShoppingBag, href: '/admin/products' },
    { id: 'customers', label: 'Customers', icon: Users, href: null },
    { id: 'payments', label: 'Payments', icon: CreditCard, href: null },
    { id: 'inventory', label: 'Inventory', icon: Archive, href: '/admin/inventory' },
    { id: 'promotions', label: 'Promotions', icon: Tag, href: null },
    { id: 'notifications', label: 'Notifications', icon: Bell, href: null },
    { id: 'reports', label: 'Reports', icon: BarChart3, href: '/admin/reports' }
  ];

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      logout();
      window.location.href = '/login';
    }
  };

  // Mock data
  const kpiData = [
    { label: 'Total Revenue', value: '₹12,45,000', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Orders Today', value: '132', icon: Package, color: 'text-blue-600' },
    { label: 'Pending Orders', value: '18', icon: AlertCircle, color: 'text-orange-600' },
    { label: 'Low Stock Items', value: '6', icon: Archive, color: 'text-red-600' }
  ];

  const recentOrders = [
    { id: '#ORD789456', customer: 'Meghram Meena', amount: 450, status: 'Processing', payment: 'COD', date: '8 Feb 2026' },
    { id: '#ORD789457', customer: 'Priya Sharma', amount: 850, status: 'Shipped', payment: 'Prepaid', date: '8 Feb 2026' },
    { id: '#ORD789458', customer: 'Rajesh Kumar', amount: 1200, status: 'Delivered', payment: 'UPI', date: '7 Feb 2026' },
    { id: '#ORD789459', customer: 'Anjali Patel', amount: 650, status: 'Processing', payment: 'Card', date: '7 Feb 2026' },
    { id: '#ORD789460', customer: 'Vikram Singh', amount: 2100, status: 'Cancelled', payment: 'COD', date: '7 Feb 2026' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Processing': return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300';
      case 'Shipped': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300';
      case 'Delivered': return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300';
      case 'Cancelled': return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300';
      default: return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0F0F0F]">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-white dark:bg-[#1A1A1A] border-b border-[#E5E7EB] dark:border-[#374151]">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <Menu className="w-5 h-5 text-[#1F1F1F] dark:text-[#FFFFFF]" />
            </button>
            <h1 className="text-[18px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF]">
              Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg">
              <Search className="w-4 h-4 text-[#6B7280] dark:text-[#9CA3AF]" />
              <input
                type="text"
                placeholder="Search orders, products..."
                className="bg-transparent border-none outline-none text-[13px] w-[200px]"
              />
            </div>

            {/* Notifications */}
            <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
              <Bell className="w-5 h-5 text-[#1F1F1F] dark:text-[#FFFFFF]" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Admin Profile */}
            <div className="flex items-center gap-2 px-3 py-2 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg">
              <div className="w-7 h-7 bg-[#1E7A6E] rounded-full flex items-center justify-center">
                <span className="text-[12px] font-bold text-white">A</span>
              </div>
              <span className="hidden md:block text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF]">
                {user?.name}
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white dark:bg-[#1A1A1A] border-r border-[#E5E7EB] dark:border-[#374151] transition-transform lg:translate-x-0 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-[calc(100vh-65px)] overflow-y-auto">
            {/* Menu Items */}
            <nav className="flex-1 p-3 space-y-1">
              {menuItems.map((item) => (
                item.href ? (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${
                      activeSection === item.id
                        ? 'bg-[#1E7A6E] text-white'
                        : 'text-[#1F1F1F] dark:text-[#FFFFFF] hover:bg-[#F9FAFB] dark:hover:bg-[#2A2A2A]'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${
                      activeSection === item.id
                        ? 'bg-[#1E7A6E] text-white'
                        : 'text-[#1F1F1F] dark:text-[#FFFFFF] hover:bg-[#F9FAFB] dark:hover:bg-[#2A2A2A]'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </button>
                )
              ))}
            </nav>

            {/* Bottom Actions */}
            <div className="p-3 border-t border-[#E5E7EB] dark:border-[#374151] space-y-1">
              <a
                href="/admin/settings"
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF] hover:bg-[#F9FAFB] dark:hover:bg-[#2A2A2A] transition-colors"
              >
                <Settings className="w-4 h-4" />
                Settings
              </a>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF] hover:bg-[#F9FAFB] dark:hover:bg-[#2A2A2A] transition-colors">
                <UserCog className="w-4 h-4" />
                Admin Users
              </button>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-semibold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </aside>

        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-6">
          {/* Overview Section */}
          {activeSection === 'overview' && (
            <div className="space-y-6">
              {/* KPI Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {kpiData.map((kpi, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-[#1A1A1A] rounded-lg p-5 border border-[#E5E7EB] dark:border-[#374151]"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF]">{kpi.label}</p>
                      <kpi.icon className={`w-5 h-5 ${kpi.color}`} />
                    </div>
                    <p className="text-[28px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF]">
                      {kpi.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Recent Orders */}
              <div className="bg-white dark:bg-[#1A1A1A] rounded-lg border border-[#E5E7EB] dark:border-[#374151]">
                <div className="p-5 border-b border-[#E5E7EB] dark:border-[#374151]">
                  <h2 className="text-[18px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF]">
                    Recent Orders
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#F9FAFB] dark:bg-[#0F0F0F]">
                      <tr>
                        <th className="px-5 py-3 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] uppercase">
                          Order ID
                        </th>
                        <th className="px-5 py-3 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] uppercase">
                          Customer
                        </th>
                        <th className="px-5 py-3 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] uppercase">
                          Amount
                        </th>
                        <th className="px-5 py-3 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] uppercase">
                          Status
                        </th>
                        <th className="px-5 py-3 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] uppercase">
                          Payment
                        </th>
                        <th className="px-5 py-3 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] uppercase">
                          Date
                        </th>
                        <th className="px-5 py-3 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] uppercase">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="border-t border-[#E5E7EB] dark:border-[#374151]">
                          <td className="px-5 py-3 text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF]">
                            {order.id}
                          </td>
                          <td className="px-5 py-3 text-[13px] text-[#1F1F1F] dark:text-[#FFFFFF]">
                            {order.customer}
                          </td>
                          <td className="px-5 py-3 text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF]">
                            ₹{order.amount}
                          </td>
                          <td className="px-5 py-3">
                            <span className={`px-2 py-1 rounded-full text-[11px] font-semibold ${getStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="px-5 py-3 text-[13px] text-[#6B7280] dark:text-[#9CA3AF]">
                            {order.payment}
                          </td>
                          <td className="px-5 py-3 text-[13px] text-[#6B7280] dark:text-[#9CA3AF]">
                            {order.date}
                          </td>
                          <td className="px-5 py-3">
                            <a href="/admin/orders" className="text-[13px] text-[#1E7A6E] font-semibold hover:underline">
                              View
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Other Sections Placeholder */}
          {activeSection !== 'overview' && (
            <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-8 border border-[#E5E7EB] dark:border-[#374151]">
              <h2 className="text-[24px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF] mb-4 capitalize">
                {activeSection}
              </h2>
              <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF]">
                {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} management coming soon...
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
