import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Search, Filter, Package, AlertTriangle, XCircle, CheckCircle, MoreVertical, Edit, Eye, Move, Power } from 'lucide-react';

interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  stock: number;
  threshold: number;
  warehouse: string;
  status: 'ok' | 'low' | 'out';
  image: string;
}

interface StockAdjustment {
  productId: string;
  currentStock: number;
  adjustment: number;
  reason: string;
}

export default function AdminInventory() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [adjustDrawerOpen, setAdjustDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<InventoryItem | null>(null);

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || !user?.isAdmin)) {
      window.location.href = '/login';
    }
  }, [isAuthenticated, user, isLoading]);

  const [adjustment, setAdjustment] = useState<StockAdjustment>({
    productId: '',
    currentStock: 0,
    adjustment: 0,
    reason: ''
  });

  const [inventory, setInventory] = useState<InventoryItem[]>([
    {
      id: '1',
      name: 'Natural Jute Tote Bag',
      sku: 'NJTB-001',
      stock: 24,
      threshold: 10,
      warehouse: 'BLR',
      status: 'ok',
      image: 'https://images.unsplash.com/photo-1758487424832-a53ae6cdefdb?w=100'
    },
    {
      id: '2',
      name: 'Artisan Leather Pouch',
      sku: 'ALP-002',
      stock: 8,
      threshold: 10,
      warehouse: 'DEL',
      status: 'low',
      image: 'https://images.unsplash.com/photo-1722963296065-d5f164b46d8c?w=100'
    },
    {
      id: '3',
      name: 'Handwoven Cotton Scarf',
      sku: 'HCS-003',
      stock: 0,
      threshold: 5,
      warehouse: 'MUM',
      status: 'out',
      image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=100'
    },
    {
      id: '4',
      name: 'Eco-Friendly Canvas Bag',
      sku: 'EFCB-004',
      stock: 45,
      threshold: 15,
      warehouse: 'BLR',
      status: 'ok',
      image: 'https://images.unsplash.com/photo-1576192350050-d9e08ee1f122?w=100'
    }
  ]);

  useEffect(() => {
    if (!isAuthenticated || !user?.isAdmin) {
      window.location.href = '/login';
    }
  }, [isAuthenticated, user]);

  const kpis = [
    { label: 'Total SKUs', value: inventory.length.toLocaleString(), color: 'text-blue-600' },
    { label: 'In Stock', value: inventory.filter(i => i.stock > 0).length.toLocaleString(), color: 'text-green-600' },
    { label: 'Low Stock', value: inventory.filter(i => i.status === 'low').length.toLocaleString(), color: 'text-orange-600' },
    { label: 'Out of Stock', value: inventory.filter(i => i.status === 'out').length.toLocaleString(), color: 'text-red-600' }
  ];

  const getStatusBadge = (item: InventoryItem) => {
    if (item.stock === 0) {
      return <span className="flex items-center gap-1 text-[11px] font-semibold text-red-600 dark:text-red-400"><XCircle className="w-3 h-3" />Out</span>;
    }
    if (item.stock < item.threshold) {
      return <span className="flex items-center gap-1 text-[11px] font-semibold text-orange-600 dark:text-orange-400"><AlertTriangle className="w-3 h-3" />Low</span>;
    }
    return <span className="flex items-center gap-1 text-[11px] font-semibold text-green-600 dark:text-green-400"><CheckCircle className="w-3 h-3" />OK</span>;
  };

  const openAdjustDrawer = (item: InventoryItem) => {
    setSelectedProduct(item);
    setAdjustment({
      productId: item.id,
      currentStock: item.stock,
      adjustment: 0,
      reason: ''
    });
    setAdjustDrawerOpen(true);
  };

  const handleUpdateStock = () => {
    if (!adjustment.reason) {
      alert('Please select a reason');
      return;
    }

    const newStock = adjustment.currentStock + adjustment.adjustment;
    
    setInventory(prev =>
      prev.map(item => {
        if (item.id === adjustment.productId) {
          const updated = { ...item, stock: newStock };
          if (newStock === 0) updated.status = 'out';
          else if (newStock < item.threshold) updated.status = 'low';
          else updated.status = 'ok';
          return updated;
        }
        return item;
      })
    );

    alert(`Stock updated! New stock: ${newStock}`);
    setAdjustDrawerOpen(false);
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
              Inventory
            </h1>
          </div>

          {/* Search */}
          <div className="flex items-center gap-2 px-3 py-2 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg">
            <Search className="w-4 h-4 text-[#6B7280] dark:text-[#9CA3AF]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search SKU / Product"
              className="bg-transparent border-none outline-none text-[13px] w-[200px]"
            />
          </div>
        </div>
      </header>

      {/* KPI Strip */}
      <div className="bg-white dark:bg-[#1A1A1A] border-b border-[#E5E7EB] dark:border-[#374151]">
        <div className="px-4 md:px-6 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {kpis.map((kpi, index) => (
              <div key={index} className="p-4 bg-[#F9FAFB] dark:bg-[#0F0F0F] rounded-lg">
                <p className="text-[12px] text-[#6B7280] dark:text-[#9CA3AF] mb-1">{kpi.label}</p>
                <p className={`text-[24px] font-bold ${kpi.color}`}>{kpi.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-[#1A1A1A] border-b border-[#E5E7EB] dark:border-[#374151]">
        <div className="px-4 md:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-2 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[13px]">
              <Filter className="w-4 h-4" />
              Category
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[13px]">
              Stock Status
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[13px]">
              Warehouse
            </button>
          </div>

          {selectedItems.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF]">
                {selectedItems.length} selected
              </span>
              <button className="px-3 py-1.5 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded text-[12px]">
                Update Stock
              </button>
              <button className="px-3 py-1.5 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded text-[12px]">
                Update Threshold
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Inventory Table */}
      <div className="p-4 md:p-6">
        <div className="bg-white dark:bg-[#1A1A1A] rounded-lg border border-[#E5E7EB] dark:border-[#374151] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F9FAFB] dark:bg-[#0F0F0F]">
                <tr>
                  <th className="px-4 py-3 text-left">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] uppercase">
                    Product
                  </th>
                  <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] uppercase">
                    SKU
                  </th>
                  <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] uppercase">
                    Stock
                  </th>
                  <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] uppercase">
                    Threshold
                  </th>
                  <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] uppercase">
                    Warehouse
                  </th>
                  <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] uppercase">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-[12px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] uppercase">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item) => (
                  <tr key={item.id} className="border-t border-[#E5E7EB] dark:border-[#374151] hover:bg-[#F9FAFB] dark:hover:bg-[#0F0F0F]">
                    <td className="px-4 py-3">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <img src={item.image} alt={item.name} className="w-10 h-10 rounded object-cover" />
                        <span className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF]">
                          {item.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[13px] text-[#6B7280] dark:text-[#9CA3AF]">
                      {item.sku}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-[13px] font-semibold ${item.stock === 0 ? 'text-red-600' : item.stock < item.threshold ? 'text-orange-600' : 'text-[#1F1F1F] dark:text-[#FFFFFF]'}`}>
                        {item.stock}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[13px] text-[#6B7280] dark:text-[#9CA3AF]">
                      {item.threshold}
                    </td>
                    <td className="px-4 py-3 text-[13px] text-[#6B7280] dark:text-[#9CA3AF]">
                      {item.warehouse}
                    </td>
                    <td className="px-4 py-3">
                      {getStatusBadge(item)}
                    </td>
                    <td className="px-4 py-3">
                      <div className="relative group">
                        <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                          <MoreVertical className="w-5 h-5 text-[#6B7280] dark:text-[#9CA3AF]" />
                        </button>
                        <div className="absolute right-0 top-8 w-48 bg-white dark:bg-[#1A1A1A] border border-[#E5E7EB] dark:border-[#374151] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                          <button
                            onClick={() => openAdjustDrawer(item)}
                            className="w-full flex items-center gap-2 px-3 py-2 text-[13px] hover:bg-gray-50 dark:hover:bg-gray-800"
                          >
                            <Edit className="w-4 h-4" />
                            Adjust Stock
                          </button>
                          <button className="w-full flex items-center gap-2 px-3 py-2 text-[13px] hover:bg-gray-50 dark:hover:bg-gray-800">
                            <Eye className="w-4 h-4" />
                            View Product
                          </button>
                          <button className="w-full flex items-center gap-2 px-3 py-2 text-[13px] hover:bg-gray-50 dark:hover:bg-gray-800">
                            <Move className="w-4 h-4" />
                            Move Warehouse
                          </button>
                          <button className="w-full flex items-center gap-2 px-3 py-2 text-[13px] text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
                            <Power className="w-4 h-4" />
                            Disable Product
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Adjust Stock Drawer */}
      {adjustDrawerOpen && selectedProduct && (
        <>
          <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setAdjustDrawerOpen(false)}></div>
          <div className="fixed right-0 top-0 bottom-0 w-full md:w-[400px] bg-white dark:bg-[#1A1A1A] shadow-2xl z-50 overflow-y-auto">
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-[18px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF]">
                  Adjust Stock
                </h2>
                <button onClick={() => setAdjustDrawerOpen(false)} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                  <Package className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 bg-[#F9FAFB] dark:bg-[#0F0F0F] rounded-lg">
                <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] mb-1">Product</p>
                <p className="text-[15px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF]">{selectedProduct.name}</p>
                <p className="text-[12px] text-[#6B7280] dark:text-[#9CA3AF]">SKU: {selectedProduct.sku}</p>
              </div>

              <div>
                <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF] mb-2 block">
                  Current Stock
                </label>
                <input
                  type="number"
                  value={adjustment.currentStock}
                  disabled
                  className="w-full px-4 py-3 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[14px]"
                />
              </div>

              <div>
                <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF] mb-2 block">
                  Adjustment (+/-)
                </label>
                <input
                  type="number"
                  value={adjustment.adjustment}
                  onChange={(e) => setAdjustment({ ...adjustment, adjustment: parseInt(e.target.value) || 0 })}
                  placeholder="e.g., +10 or -5"
                  className="w-full px-4 py-3 bg-white dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[14px]"
                />
              </div>

              <div>
                <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF] mb-2 block">
                  Reason
                </label>
                <select
                  value={adjustment.reason}
                  onChange={(e) => setAdjustment({ ...adjustment, reason: e.target.value })}
                  className="w-full px-4 py-3 bg-white dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[14px]"
                >
                  <option value="">Select reason</option>
                  <option value="sale">Sale</option>
                  <option value="return">Return</option>
                  <option value="damage">Damage</option>
                  <option value="manual">Manual Correction</option>
                </select>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] mb-1">New Stock</p>
                <p className="text-[24px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF]">
                  {adjustment.currentStock + adjustment.adjustment}
                </p>
              </div>

              <button
                onClick={handleUpdateStock}
                className="w-full px-6 py-3 bg-[#1E7A6E] text-white rounded-lg font-semibold text-[15px] hover:bg-[#176559]"
              >
                Update Stock
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
