import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { TrendingUp, Package, IndianRupee, RefreshCw, Download, Calendar, BarChart3 } from 'lucide-react';

export default function AdminReports() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const [dateRange, setDateRange] = useState('month');

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || !user?.isAdmin)) {
      window.location.href = '/login';
    }
  }, [isAuthenticated, user, isLoading]);

  const summaryKpis = [
    { label: 'Revenue', value: '₹1.24 Cr', icon: IndianRupee, color: 'text-green-600', change: '+12.5%' },
    { label: 'Orders', value: '18,432', icon: Package, color: 'text-blue-600', change: '+8.3%' },
    { label: 'Avg Order Value', value: '₹3,210', icon: TrendingUp, color: 'text-purple-600', change: '+5.2%' },
    { label: 'Returns Rate', value: '2.4%', icon: RefreshCw, color: 'text-orange-600', change: '-0.3%' }
  ];

  const productPerformance = [
    { name: 'Natural Jute Tote Bag', unitsSold: 2456, revenue: 1105200, returns: 12, stock: 24 },
    { name: 'Artisan Leather Pouch', unitsSold: 1876, revenue: 1031800, returns: 8, stock: 8 },
    { name: 'Handwoven Cotton Scarf', unitsSold: 1234, revenue: 469320, returns: 15, stock: 0 },
    { name: 'Eco-Friendly Canvas Bag', unitsSold: 987, revenue: 375060, returns: 5, stock: 45 }
  ];

  const customerInsights = [
    { label: 'New Customers', value: '3,245', percentage: '65%' },
    { label: 'Returning Customers', value: '1,789', percentage: '35%' },
    { label: 'Repeat Purchase Rate', value: '28.4%', percentage: null }
  ];

  const topCities = [
    { city: 'Mumbai', orders: 4523 },
    { city: 'Delhi', orders: 3876 },
    { city: 'Bangalore', orders: 2934 },
    { city: 'Pune', orders: 2103 },
    { city: 'Hyderabad', orders: 1876 }
  ];

  const revenueData = [
    { date: '1 Feb', revenue: 42000 },
    { date: '2 Feb', revenue: 38000 },
    { date: '3 Feb', revenue: 51000 },
    { date: '4 Feb', revenue: 45000 },
    { date: '5 Feb', revenue: 58000 },
    { date: '6 Feb', revenue: 62000 },
    { date: '7 Feb', revenue: 55000 },
    { date: '8 Feb', revenue: 67000 }
  ];

  const maxRevenue = Math.max(...revenueData.map(d => d.revenue));

  const handleExport = (format: string) => {
    alert(`Exporting report as ${format}...`);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0F0F0F]">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-white dark:bg-[#1A1A1A] border-b border-[#E5E7EB] dark:border-[#374151]">
        <div className="flex items-center justify-between px-4 md:px-6 py-4">
          <div className="flex items-center gap-4">
            <a href="/admin" className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E]">
              ← Dashboard
            </a>
            <h1 className="text-[20px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF]">
              Reports & Analytics
            </h1>
          </div>

          <div className="flex items-center gap-3">
            {/* Date Range */}
            <div className="flex items-center gap-2 px-3 py-2 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg">
              <Calendar className="w-4 h-4 text-[#6B7280] dark:text-[#9CA3AF]" />
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="bg-transparent border-none outline-none text-[13px] font-semibold"
              >
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>

            {/* Export Buttons */}
            <button
              onClick={() => handleExport('CSV')}
              className="flex items-center gap-2 px-4 py-2 bg-[#1E7A6E] text-white rounded-lg text-[13px] font-semibold hover:bg-[#176559]"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
      </header>

      <div className="p-4 md:p-6 space-y-6">
        {/* Summary KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {summaryKpis.map((kpi, index) => (
            <div key={index} className="bg-white dark:bg-[#1A1A1A] rounded-lg p-5 border border-[#E5E7EB] dark:border-[#374151]">
              <div className="flex items-start justify-between mb-3">
                <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF]">{kpi.label}</p>
                <kpi.icon className={`w-5 h-5 ${kpi.color}`} />
              </div>
              <p className="text-[28px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF] mb-1">
                {kpi.value}
              </p>
              <p className={`text-[12px] font-semibold ${kpi.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {kpi.change} vs last period
              </p>
            </div>
          ))}
        </div>

        {/* Revenue Chart */}
        <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E7EB] dark:border-[#374151]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[18px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF]">
              Revenue Over Time
            </h2>
            <button className="text-[13px] text-[#1E7A6E] font-semibold hover:underline">
              Compare Period
            </button>
          </div>
          
          <div className="h-[300px] flex items-end gap-2">
            {revenueData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-[#1E7A6E] rounded-t hover:bg-[#176559] transition-colors relative group" style={{ height: `${(data.revenue / maxRevenue) * 250}px` }}>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[11px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    ₹{(data.revenue / 1000).toFixed(0)}K
                  </div>
                </div>
                <span className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF]">{data.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Product Performance */}
          <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E7EB] dark:border-[#374151]">
            <h2 className="text-[18px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF] mb-4">
              Product Performance
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#E5E7EB] dark:border-[#374151]">
                    <th className="px-2 py-2 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF]">Product</th>
                    <th className="px-2 py-2 text-right text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF]">Units</th>
                    <th className="px-2 py-2 text-right text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF]">Revenue</th>
                    <th className="px-2 py-2 text-right text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF]">Stock</th>
                  </tr>
                </thead>
                <tbody>
                  {productPerformance.map((product, index) => (
                    <tr key={index} className="border-b border-[#E5E7EB] dark:border-[#374151]">
                      <td className="px-2 py-3 text-[13px] text-[#1F1F1F] dark:text-[#FFFFFF]">{product.name}</td>
                      <td className="px-2 py-3 text-[13px] text-right font-semibold text-[#1F1F1F] dark:text-[#FFFFFF]">
                        {product.unitsSold.toLocaleString()}
                      </td>
                      <td className="px-2 py-3 text-[13px] text-right font-semibold text-[#1F1F1F] dark:text-[#FFFFFF]">
                        ₹{(product.revenue / 1000).toFixed(0)}K
                      </td>
                      <td className="px-2 py-3 text-[13px] text-right">
                        <span className={product.stock === 0 ? 'text-red-600' : 'text-[#6B7280] dark:text-[#9CA3AF]'}>
                          {product.stock}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Customer Insights */}
          <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E7EB] dark:border-[#374151]">
            <h2 className="text-[18px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF] mb-4">
              Customer Insights
            </h2>
            
            <div className="space-y-4 mb-6">
              {customerInsights.map((insight, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF]">{insight.label}</p>
                    <p className="text-[16px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF]">{insight.value}</p>
                  </div>
                  {insight.percentage && (
                    <div className="w-full bg-[#F9FAFB] dark:bg-[#0F0F0F] rounded-full h-2">
                      <div className="bg-[#1E7A6E] h-2 rounded-full" style={{ width: insight.percentage }}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#E5E7EB] dark:border-[#374151]">
              <h3 className="text-[14px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF] mb-3">Top Cities</h3>
              <div className="space-y-2">
                {topCities.map((city, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-[13px] text-[#1F1F1F] dark:text-[#FFFFFF]">{city.city}</span>
                    <span className="text-[13px] font-semibold text-[#6B7280] dark:text-[#9CA3AF]">
                      {city.orders.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Export Section */}
        <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E7EB] dark:border-[#374151]">
          <h2 className="text-[18px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF] mb-4">
            Download Reports
          </h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => handleExport('CSV')}
              className="flex items-center gap-2 px-4 py-2 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[13px] font-semibold hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Download className="w-4 h-4" />
              Download CSV
            </button>
            <button
              onClick={() => handleExport('PDF')}
              className="flex items-center gap-2 px-4 py-2 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[13px] font-semibold hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1E7A6E] text-white rounded-lg text-[13px] font-semibold hover:bg-[#176559]">
              <BarChart3 className="w-4 h-4" />
              Schedule Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
