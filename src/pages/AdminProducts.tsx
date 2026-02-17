import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import {
  Search,
  Plus,
  MoreVertical,
  Edit,
  Copy,
  Eye,
  Power,
  Trash2,
  Filter
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
  status: 'active' | 'draft' | 'disabled';
  updatedAt: string;
  image: string;
}

export default function AdminProducts() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || !user?.isAdmin)) {
      window.location.href = '/login';
    }
  }, [isAuthenticated, user, isLoading]);

  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Natural Jute Tote Bag',
      sku: 'NJTB-001',
      price: 450,
      stock: 24,
      status: 'active',
      updatedAt: '2h ago',
      image: 'https://images.unsplash.com/photo-1758487424832-a53ae6cdefdb?w=100'
    },
    {
      id: '2',
      name: 'Artisan Leather Pouch',
      sku: 'ALP-002',
      price: 550,
      stock: 12,
      status: 'active',
      updatedAt: '5h ago',
      image: 'https://images.unsplash.com/photo-1722963296065-d5f164b46d8c?w=100'
    },
    {
      id: '3',
      name: 'Handwoven Cotton Scarf',
      sku: 'HCS-003',
      price: 380,
      stock: 5,
      status: 'active',
      updatedAt: '1d ago',
      image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=100'
    },
    {
      id: '4',
      name: 'Eco-Friendly Canvas Bag',
      sku: 'EFCB-004',
      price: 380,
      stock: 0,
      status: 'disabled',
      updatedAt: '2d ago',
      image: 'https://images.unsplash.com/photo-1576192350050-d9e08ee1f122?w=100'
    }
  ]);

  useEffect(() => {
    if (!isAuthenticated || !user?.isAdmin) {
      window.location.href = '/login';
    }
  }, [isAuthenticated, user]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300';
      case 'draft': return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300';
      case 'disabled': return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300';
      default: return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300';
    }
  };

  const toggleProductSelection = (id: string) => {
    setSelectedProducts(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const toggleAllProducts = () => {
    if (selectedProducts.length === products.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(products.map(p => p.id));
    }
  };

  const handleBulkAction = (action: string) => {
    console.log('Bulk action:', action, selectedProducts);
    alert(`${action} applied to ${selectedProducts.length} products`);
    setSelectedProducts([]);
  };

  const handleProductAction = (action: string, productId: string) => {
    console.log('Product action:', action, productId);
    switch (action) {
      case 'view':
        window.open('/product', '_blank');
        break;
      case 'edit':
        window.location.href = `/admin/products/${productId}/edit`;
        break;
      case 'duplicate':
        alert('Product duplicated!');
        break;
      case 'disable':
        if (confirm('Disable this product?')) {
          setProducts(prev =>
            prev.map(p => p.id === productId ? { ...p, status: 'disabled' } : p)
          );
        }
        break;
      case 'delete':
        if (confirm('Delete this product permanently?')) {
          setProducts(prev => prev.filter(p => p.id !== productId));
        }
        break;
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
              Products
            </h1>
          </div>

          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg">
              <Search className="w-4 h-4 text-[#6B7280] dark:text-[#9CA3AF]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search SKU / Name"
                className="bg-transparent border-none outline-none text-[13px] w-[200px]"
              />
            </div>

            {/* Add Product Button */}
            <button
              onClick={() => window.location.href = '/admin/products/add'}
              className="flex items-center gap-2 px-4 py-2 bg-[#1E7A6E] text-white rounded-lg text-[13px] font-semibold hover:bg-[#176559] transition-all"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden md:inline">Add Product</span>
            </button>
          </div>
        </div>
      </header>

      {/* Filters & Bulk Actions */}
      <div className="bg-white dark:bg-[#1A1A1A] border-b border-[#E5E7EB] dark:border-[#374151]">
        <div className="px-4 md:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-2 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[13px] hover:bg-gray-100 dark:hover:bg-gray-800">
              <Filter className="w-4 h-4" />
              Category
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[13px] hover:bg-gray-100 dark:hover:bg-gray-800">
              Status
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[13px] hover:bg-gray-100 dark:hover:bg-gray-800">
              Stock
            </button>
          </div>

          {selectedProducts.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF]">
                {selectedProducts.length} selected
              </span>
              <button
                onClick={() => handleBulkAction('Update Price')}
                className="px-3 py-1.5 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded text-[12px] hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Update Price
              </button>
              <button
                onClick={() => handleBulkAction('Update Stock')}
                className="px-3 py-1.5 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded text-[12px] hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Update Stock
              </button>
              <button
                onClick={() => handleBulkAction('Disable')}
                className="px-3 py-1.5 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 rounded text-[12px] hover:bg-red-100 dark:hover:bg-red-900/30"
              >
                Disable
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Products Table */}
      <div className="p-4 md:p-6">
        <div className="bg-white dark:bg-[#1A1A1A] rounded-lg border border-[#E5E7EB] dark:border-[#374151] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F9FAFB] dark:bg-[#0F0F0F]">
                <tr>
                  <th className="px-4 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedProducts.length === products.length}
                      onChange={toggleAllProducts}
                      className="rounded"
                    />
                  </th>
                  <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] uppercase">
                    Product
                  </th>
                  <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] uppercase">
                    SKU
                  </th>
                  <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] uppercase">
                    Price
                  </th>
                  <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] uppercase">
                    Stock
                  </th>
                  <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] uppercase">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] uppercase">
                    Updated
                  </th>
                  <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] uppercase">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-t border-[#E5E7EB] dark:border-[#374151] hover:bg-[#F9FAFB] dark:hover:bg-[#0F0F0F]">
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={selectedProducts.includes(product.id)}
                        onChange={() => toggleProductSelection(product.id)}
                        className="rounded"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-10 h-10 rounded object-cover"
                        />
                        <span className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF]">
                          {product.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[13px] text-[#6B7280] dark:text-[#9CA3AF]">
                      {product.sku}
                    </td>
                    <td className="px-4 py-3 text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF]">
                      ₹{product.price}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-[13px] font-semibold ${product.stock < 10 ? 'text-red-600' : 'text-[#1F1F1F] dark:text-[#FFFFFF]'}`}>
                        {product.stock}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-[11px] font-semibold ${getStatusColor(product.status)}`}>
                        {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[13px] text-[#6B7280] dark:text-[#9CA3AF]">
                      {product.updatedAt}
                    </td>
                    <td className="px-4 py-3">
                      <div className="relative group">
                        <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                          <MoreVertical className="w-5 h-5 text-[#6B7280] dark:text-[#9CA3AF]" />
                        </button>
                        <div className="absolute right-0 top-8 w-40 bg-white dark:bg-[#1A1A1A] border border-[#E5E7EB] dark:border-[#374151] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                          <button
                            onClick={() => handleProductAction('view', product.id)}
                            className="w-full flex items-center gap-2 px-3 py-2 text-[13px] hover:bg-gray-50 dark:hover:bg-gray-800"
                          >
                            <Eye className="w-4 h-4" />
                            View
                          </button>
                          <button
                            onClick={() => handleProductAction('edit', product.id)}
                            className="w-full flex items-center gap-2 px-3 py-2 text-[13px] hover:bg-gray-50 dark:hover:bg-gray-800"
                          >
                            <Edit className="w-4 h-4" />
                            Edit
                          </button>
                          <button
                            onClick={() => handleProductAction('duplicate', product.id)}
                            className="w-full flex items-center gap-2 px-3 py-2 text-[13px] hover:bg-gray-50 dark:hover:bg-gray-800"
                          >
                            <Copy className="w-4 h-4" />
                            Duplicate
                          </button>
                          <button
                            onClick={() => handleProductAction('disable', product.id)}
                            className="w-full flex items-center gap-2 px-3 py-2 text-[13px] hover:bg-gray-50 dark:hover:bg-gray-800"
                          >
                            <Power className="w-4 h-4" />
                            Disable
                          </button>
                          <button
                            onClick={() => handleProductAction('delete', product.id)}
                            className="w-full flex items-center gap-2 px-3 py-2 text-[13px] text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                          >
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="border-t border-[#E5E7EB] dark:border-[#374151] px-4 py-3 flex items-center justify-between">
            <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF]">
              Showing {products.length} products
            </p>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded text-[13px] hover:bg-gray-100 dark:hover:bg-gray-800">
                Previous
              </button>
              <button className="px-3 py-1.5 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded text-[13px] hover:bg-gray-100 dark:hover:bg-gray-800">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
