import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  mrp?: number;
  image: string;
  category: string;
  rating?: number;
  reviews?: number;
  description?: string;
  stock?: number;
  badge?: string;
}

export interface OrderItem {
  id: string;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentMethod: string;
  shippingAddress: {
    name: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  createdAt: string;
  trackingNumber?: string;
}

interface StoreDataContextType {
  products: Product[];
  orders: Order[];
  addProduct: (product: Product) => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  addOrder: (order: Order) => void;
  updateOrderStatus: (orderId: string, status: Order['status'], trackingNumber?: string) => void;
}

const StoreDataContext = createContext<StoreDataContextType | undefined>(undefined);

// Initial products
const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Natural Jute Tote Bag',
    price: 450,
    mrp: 650,
    image: 'https://images.unsplash.com/photo-1758487424832-a53ae6cdefdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwaGFuZG1hZGUlMjBwcm9kdWN0cyUyMGNyYWZ0JTIwZGlzcGxheXxlbnwxfHx8fDE3NzA1ODY0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'bags',
    rating: 4.5,
    reviews: 2348,
    stock: 45,
    badge: 'Handmade'
  },
  {
    id: '2',
    name: 'Eco-Friendly Canvas Bag',
    price: 380,
    mrp: 550,
    image: 'https://images.unsplash.com/photo-1576192350050-d9e08ee1f122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHRvdGUlMjBiYWclMjBlY28lMjBmcmllbmRseXxlbnwxfHx8fDE3NzA1ODY0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'bags',
    rating: 4.3,
    reviews: 1567,
    stock: 32,
    badge: 'Eco-Friendly'
  },
  {
    id: '3',
    name: 'Artisan Leather Pouch',
    price: 550,
    mrp: 750,
    image: 'https://images.unsplash.com/photo-1722963296065-d5f164b46d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGxlYXRoZXIlMjBiYWclMjBhcnRpc2FuJTIwY3JhZnR8ZW58MXx8fHwxNzcwNTg2NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'accessories',
    rating: 4.8,
    reviews: 1876,
    stock: 18,
    badge: 'Handmade'
  },
  {
    id: '4',
    name: 'Handwoven Cotton Scarf',
    price: 380,
    mrp: 500,
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kd292ZW4lMjBzY2FyZiUyMGFydGlzYW58ZW58MXx8fHwxNzM5MTcxMDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'fashion',
    rating: 4.2,
    reviews: 945,
    stock: 56,
    badge: 'Handwoven'
  },
  {
    id: '5',
    name: 'Bamboo Kitchen Set',
    price: 680,
    mrp: 900,
    image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBraXRjaGVuJTIwdXRlbnNpbHN8ZW58MXx8fHwxNzM5MTcxMDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'home',
    rating: 4.6,
    reviews: 1234,
    stock: 28,
    badge: 'Sustainable'
  },
  {
    id: '6',
    name: 'Handcrafted Clay Pots',
    price: 320,
    mrp: 450,
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGF5JTIwcG90JTIwaGFuZGNyYWZ0ZWR8ZW58MXx8fHwxNzM5MTcxMDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'home',
    rating: 4.4,
    reviews: 892,
    stock: 40,
    badge: 'Traditional'
  }
];

export function StoreDataProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const storedProducts = localStorage.getItem('storeProducts');
    const storedOrders = localStorage.getItem('storeOrders');
    
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      setProducts(INITIAL_PRODUCTS);
      localStorage.setItem('storeProducts', JSON.stringify(INITIAL_PRODUCTS));
    }
    
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  const addProduct = (product: Product) => {
    const newProducts = [...products, product];
    setProducts(newProducts);
    localStorage.setItem('storeProducts', JSON.stringify(newProducts));
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    const newProducts = products.map(p => 
      p.id === id ? { ...p, ...updates } : p
    );
    setProducts(newProducts);
    localStorage.setItem('storeProducts', JSON.stringify(newProducts));
  };

  const deleteProduct = (id: string) => {
    const newProducts = products.filter(p => p.id !== id);
    setProducts(newProducts);
    localStorage.setItem('storeProducts', JSON.stringify(newProducts));
  };

  const addOrder = (order: Order) => {
    const newOrders = [order, ...orders];
    setOrders(newOrders);
    localStorage.setItem('storeOrders', JSON.stringify(newOrders));
  };

  const updateOrderStatus = (orderId: string, status: Order['status'], trackingNumber?: string) => {
    const newOrders = orders.map(o => 
      o.id === orderId 
        ? { ...o, status, trackingNumber: trackingNumber || o.trackingNumber }
        : o
    );
    setOrders(newOrders);
    localStorage.setItem('storeOrders', JSON.stringify(newOrders));
  };

  return (
    <StoreDataContext.Provider 
      value={{ 
        products, 
        orders, 
        addProduct, 
        updateProduct, 
        deleteProduct, 
        addOrder,
        updateOrderStatus 
      }}
    >
      {children}
    </StoreDataContext.Provider>
  );
}

export function useStoreData() {
  const context = useContext(StoreDataContext);
  if (context === undefined) {
    throw new Error('useStoreData must be used within a StoreDataProvider');
  }
  return context;
}
