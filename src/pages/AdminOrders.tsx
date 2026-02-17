import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Search, X, Package, User, CreditCard, MapPin, FileDown, RefreshCw } from 'lucide-react';

interface Order {
  id: string;
  customer: string;
  email: string;
  phone: string;
  amount: number;
  paymentMethod: string;
  paymentStatus: string;
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled' | 'returned';
  date: string;
  items: OrderItem[];
  shippingAddress: {
    name: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  courier?: string;
  trackingId?: string;
}

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

export default function AdminOrders() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || !user?.isAdmin)) {
      window.location.href = '/login';
    }
  }, [isAuthenticated, user, isLoading]);

  const [orders, setOrders] = useState<Order[]>([
    {
      id: '#ORD789456',
      customer: 'Meghram Meena',
      email: 'meghram@email.com',
      phone: '8058060375',
      amount: 450,
      paymentMethod: 'COD',
      paymentStatus: 'Pending',
      status: 'paid',
      date: '8 Feb 2026',
      items: [{ name: 'Natural Jute Tote Bag', quantity: 1, price: 450 }],
      shippingAddress: {
        name: 'Meghram Meena',
        address: 'IIIT Bhagalpur',
        city: 'Bhagalpur',
        state: 'Bihar',
        pincode: '813210'
      }
    },
    {
      id: '#ORD789457',
      customer: 'Priya Sharma',
      email: 'priya@email.com',
      phone: '+91 98XXXXXXXX',
      amount: 850,
      paymentMethod: 'UPI',
      paymentStatus: 'Paid',
      status: 'shipped',
      date: '8 Feb 2026',
      items: [{ name: 'Artisan Leather Pouch', quantity: 1, price: 550 }, { name: 'Canvas Bag', quantity: 1, price: 300 }],
      shippingAddress: {
        name: 'Priya Sharma',
        address: '123 Main Street',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400001'
      },
      courier: 'Delhivery',
      trackingId: 'DL123456789'
    },
    {
      id: '#ORD789458',
      customer: 'Rajesh Kumar',
      email: 'rajesh@email.com',
      phone: '+91 97XXXXXXXX',
      amount: 1200,
      paymentMethod: 'Card',
      paymentStatus: 'Paid',
      status: 'delivered',
      date: '7 Feb 2026',
      items: [{ name: 'Handwoven Scarf', quantity: 3, price: 400 }],
      shippingAddress: {
        name: 'Rajesh Kumar',
        address: '456 Park Avenue',
        city: 'Delhi',
        state: 'Delhi',
        pincode: '110001'
      },
      courier: 'BlueDart',
      trackingId: 'BD987654321'
    }
  ]);

  useEffect(() => {
    if (!isAuthenticated || !user?.isAdmin) {
      window.location.href = '/login';
    }
  }, [isAuthenticated, user]);

  const statusFilters = [
    { label: 'All', value: 'all' },
    { label: 'Pending', value: 'pending' },
    { label: 'Paid', value: 'paid' },
    { label: 'Shipped', value: 'shipped' },
    { label: 'Delivered', value: 'delivered' },
    { label: 'Cancelled', value: 'cancelled' },
    { label: 'Returned', value: 'returned' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300';
      case 'paid': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300';
      case 'shipped': return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300';
      case 'delivered': return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300';
      case 'cancelled': return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300';
      case 'returned': return 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300';
      default: return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300';
    }
  };

  const filteredOrders = statusFilter === 'all'
    ? orders
    : orders.filter(o => o.status === statusFilter);

  const selectedOrder = orders.find(o => o.id === selectedOrderId);

  const handleMarkShipped = (orderId: string) => {
    const courier = prompt('Enter courier name:');
    const trackingId = prompt('Enter tracking ID:');
    
    if (courier && trackingId) {
      setOrders(prev =>
        prev.map(o =>
          o.id === orderId
            ? { ...o, status: 'shipped', courier, trackingId }
            : o
        )
      );
      alert('Order marked as shipped!');
    }
  };

  const handleCancelOrder = (orderId: string) => {
    if (confirm('Cancel this order?')) {
      setOrders(prev =>
        prev.map(o => o.id === orderId ? { ...o, status: 'cancelled' } : o)
      );
      setSelectedOrderId(null);
    }
  };

  const handleRefund = (orderId: string) => {
    if (confirm('Process refund for this order?')) {
      alert('Refund initiated. Amount will be credited in 5-7 business days.');
    }
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
              Orders
            </h1>
          </div>

          {/* Search */}
          <div className="flex items-center gap-2 px-3 py-2 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg">
            <Search className="w-4 h-4 text-[#6B7280] dark:text-[#9CA3AF]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Order ID / Customer"
              className="bg-transparent border-none outline-none text-[13px] w-[200px]"
            />
          </div>
        </div>
      </header>

      {/* Status Filter Strip */}
      <div className="bg-white dark:bg-[#1A1A1A] border-b border-[#E5E7EB] dark:border-[#374151]">
        <div className="px-4 md:px-6 py-3 flex gap-2 overflow-x-auto">
          {statusFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setStatusFilter(filter.value)}
              className={`px-4 py-2 rounded-lg text-[13px] font-semibold whitespace-nowrap transition-all ${
                statusFilter === filter.value
                  ? 'bg-[#1E7A6E] text-white'
                  : 'bg-[#F9FAFB] dark:bg-[#0F0F0F] text-[#6B7280] dark:text-[#9CA3AF] hover:bg-gray-200 dark:hover:bg-gray-800'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex">
        {/* Orders Table */}
        <div className={`flex-1 p-4 md:p-6 ${selectedOrderId ? 'lg:pr-[450px]' : ''} transition-all`}>
          <div className="bg-white dark:bg-[#1A1A1A] rounded-lg border border-[#E5E7EB] dark:border-[#374151] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#F9FAFB] dark:bg-[#0F0F0F]">
                  <tr>
                    <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] uppercase">
                      Order ID
                    </th>
                    <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] uppercase">
                      Customer
                    </th>
                    <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] uppercase">
                      Amount
                    </th>
                    <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] uppercase">
                      Payment
                    </th>
                    <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] uppercase">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] uppercase">
                      Date
                    </th>
                    <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] uppercase">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => (
                    <tr
                      key={order.id}
                      className={`border-t border-[#E5E7EB] dark:border-[#374151] hover:bg-[#F9FAFB] dark:hover:bg-[#0F0F0F] cursor-pointer ${
                        selectedOrderId === order.id ? 'bg-blue-50 dark:bg-blue-900/10' : ''
                      }`}
                      onClick={() => setSelectedOrderId(order.id)}
                    >
                      <td className="px-4 py-3 text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF]">
                        {order.id}
                      </td>
                      <td className="px-4 py-3 text-[13px] text-[#1F1F1F] dark:text-[#FFFFFF]">
                        {order.customer}
                      </td>
                      <td className="px-4 py-3 text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF]">
                        ₹{order.amount}
                      </td>
                      <td className="px-4 py-3 text-[13px] text-[#6B7280] dark:text-[#9CA3AF]">
                        {order.paymentMethod}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-[11px] font-semibold ${getStatusColor(order.status)}`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-[13px] text-[#6B7280] dark:text-[#9CA3AF]">
                        {order.date}
                      </td>
                      <td className="px-4 py-3">
                        <button className="text-[13px] text-[#1E7A6E] font-semibold hover:underline">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Order Detail Drawer (Right Slide-in) */}
        {selectedOrder && (
          <div className="hidden lg:block fixed right-0 top-[57px] bottom-0 w-[440px] bg-white dark:bg-[#1A1A1A] border-l border-[#E5E7EB] dark:border-[#374151] overflow-y-auto shadow-2xl z-40">
            <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h2 className="text-[18px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF]">
                  Order Details
                </h2>
                <button
                  onClick={() => setSelectedOrderId(null)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Order Summary */}
              <div className="p-4 bg-[#F9FAFB] dark:bg-[#0F0F0F] rounded-lg">
                <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] mb-1">Order ID</p>
                <p className="text-[16px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF] mb-3">{selectedOrder.id}</p>
                <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF]">
                  Placed: {selectedOrder.date}
                </p>
              </div>

              {/* Customer */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <User className="w-4 h-4 text-[#6B7280] dark:text-[#9CA3AF]" />
                  <h3 className="text-[14px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF]">Customer</h3>
                </div>
                <p className="text-[14px] text-[#1F1F1F] dark:text-[#FFFFFF] mb-1">{selectedOrder.customer}</p>
                <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] mb-1">{selectedOrder.email}</p>
                <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF]">{selectedOrder.phone}</p>
              </div>

              {/* Items */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Package className="w-4 h-4 text-[#6B7280] dark:text-[#9CA3AF]" />
                  <h3 className="text-[14px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF]">Items</h3>
                </div>
                <div className="space-y-2">
                  {selectedOrder.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span className="text-[13px] text-[#1F1F1F] dark:text-[#FFFFFF]">
                        {item.name} x {item.quantity}
                      </span>
                      <span className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF]">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <CreditCard className="w-4 h-4 text-[#6B7280] dark:text-[#9CA3AF]" />
                  <h3 className="text-[14px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF]">Payment</h3>
                </div>
                <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] mb-1">Method: {selectedOrder.paymentMethod}</p>
                <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] mb-2">Status: {selectedOrder.paymentStatus}</p>
                <p className="text-[16px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF]">₹{selectedOrder.amount}</p>
              </div>

              {/* Shipping */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-[#6B7280] dark:text-[#9CA3AF]" />
                  <h3 className="text-[14px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF]">Shipping Address</h3>
                </div>
                <p className="text-[13px] text-[#1F1F1F] dark:text-[#FFFFFF]">{selectedOrder.shippingAddress.name}</p>
                <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF]">
                  {selectedOrder.shippingAddress.address}, {selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.state} - {selectedOrder.shippingAddress.pincode}
                </p>
                {selectedOrder.courier && (
                  <div className="mt-3 p-3 bg-[#F9FAFB] dark:bg-[#0F0F0F] rounded">
                    <p className="text-[12px] text-[#6B7280] dark:text-[#9CA3AF] mb-1">Courier: {selectedOrder.courier}</p>
                    <p className="text-[12px] text-[#6B7280] dark:text-[#9CA3AF]">Tracking: {selectedOrder.trackingId}</p>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="space-y-2 pt-4 border-t border-[#E5E7EB] dark:border-[#374151]">
                {selectedOrder.status === 'paid' && (
                  <button
                    onClick={() => handleMarkShipped(selectedOrder.id)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1E7A6E] text-white rounded-lg text-[13px] font-semibold hover:bg-[#176559]"
                  >
                    <Package className="w-4 h-4" />
                    Mark as Shipped
                  </button>
                )}
                
                {selectedOrder.status === 'pending' && (
                  <button
                    onClick={() => handleCancelOrder(selectedOrder.id)}
                    className="w-full px-4 py-2.5 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-[13px] font-semibold hover:bg-red-100 dark:hover:bg-red-900/30"
                  >
                    Cancel Order
                  </button>
                )}

                {selectedOrder.status === 'delivered' && (
                  <button
                    onClick={() => handleRefund(selectedOrder.id)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-lg text-[13px] font-semibold hover:bg-orange-100 dark:hover:bg-orange-900/30"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Process Refund
                  </button>
                )}

                <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[13px] font-semibold hover:bg-gray-100 dark:hover:bg-gray-800">
                  <FileDown className="w-4 h-4" />
                  Generate Invoice
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
