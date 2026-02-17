import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  ArrowLeft, 
  Upload, 
  X, 
  GripVertical, 
  ChevronDown,
  ChevronUp,
  Save,
  Eye,
  AlertCircle,
  IndianRupee,
  Package,
  Truck,
  Image as ImageIcon
} from 'lucide-react';

interface ProductImage {
  id: string;
  url: string;
  file?: File;
  isPrimary: boolean;
}

interface Variant {
  id: string;
  sku: string;
  price: number;
  stock: number;
  attributes: { [key: string]: string };
}

export default function AdminAddProduct() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const [productStatus, setProductStatus] = useState<'Draft' | 'Published' | 'Disabled'>('Draft');
  const [seoExpanded, setSeoExpanded] = useState(false);
  const [draggedImage, setDraggedImage] = useState<string | null>(null);
  
  // Form data
  const [formData, setFormData] = useState({
    name: '',
    shortDescription: '',
    brand: '',
    productType: 'simple',
    category: '',
    subcategory: '',
    mrp: '',
    sellingPrice: '',
    taxClass: '18',
    sku: '',
    stockQuantity: '',
    lowStockThreshold: '10',
    weight: '',
    length: '',
    width: '',
    height: '',
    shippingClass: 'standard',
    metaTitle: '',
    metaDescription: '',
    slug: ''
  });

  const [images, setImages] = useState<ProductImage[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [selectedAttributes, setSelectedAttributes] = useState<{ [key: string]: string[] }>({});
  const [variants, setVariants] = useState<Variant[]>([]);

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || !user?.isAdmin)) {
      window.location.href = '/login';
    }
  }, [isAuthenticated, user, isLoading]);

  // Auto-generate SKU
  useEffect(() => {
    if (formData.name && !formData.sku) {
      const sku = formData.name
        .substring(0, 20)
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '') + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
      setFormData(prev => ({ ...prev, sku }));
    }
  }, [formData.name]);

  // Auto-generate slug
  useEffect(() => {
    if (formData.name && !formData.slug) {
      const slug = formData.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      setFormData(prev => ({ ...prev, slug }));
    }
  }, [formData.name]);

  // Calculate discount
  const calculateDiscount = () => {
    const mrp = parseFloat(formData.mrp) || 0;
    const selling = parseFloat(formData.sellingPrice) || 0;
    if (mrp > 0 && selling > 0) {
      return Math.round(((mrp - selling) / mrp) * 100);
    }
    return 0;
  };

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newImages: ProductImage[] = files.map((file, index) => ({
      id: Date.now() + index + '',
      url: URL.createObjectURL(file),
      file,
      isPrimary: images.length === 0 && index === 0
    }));
    
    if (images.length + newImages.length <= 8) {
      setImages([...images, ...newImages]);
      setErrors(prev => ({ ...prev, images: '' }));
    } else {
      setErrors(prev => ({ ...prev, images: 'Maximum 8 images allowed' }));
    }
  };

  // Handle drag and drop for images
  const handleDragStart = (imageId: string) => {
    setDraggedImage(imageId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (targetId: string) => {
    if (!draggedImage) return;
    
    const draggedIndex = images.findIndex(img => img.id === draggedImage);
    const targetIndex = images.findIndex(img => img.id === targetId);
    
    if (draggedIndex !== -1 && targetIndex !== -1) {
      const newImages = [...images];
      const [removed] = newImages.splice(draggedIndex, 1);
      newImages.splice(targetIndex, 0, removed);
      setImages(newImages);
    }
    setDraggedImage(null);
  };

  const setPrimaryImage = (imageId: string) => {
    setImages(images.map(img => ({
      ...img,
      isPrimary: img.id === imageId
    })));
  };

  const removeImage = (imageId: string) => {
    const removedImage = images.find(img => img.id === imageId);
    const newImages = images.filter(img => img.id !== imageId);
    
    // If removed image was primary and there are other images, make first one primary
    if (removedImage?.isPrimary && newImages.length > 0) {
      newImages[0].isPrimary = true;
    }
    
    setImages(newImages);
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Product name is required';
    if (!formData.shortDescription.trim()) newErrors.shortDescription = 'Short description is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.mrp || parseFloat(formData.mrp) <= 0) newErrors.mrp = 'Valid MRP is required';
    if (!formData.sellingPrice || parseFloat(formData.sellingPrice) <= 0) newErrors.sellingPrice = 'Valid selling price is required';
    if (parseFloat(formData.sellingPrice) > parseFloat(formData.mrp)) {
      newErrors.sellingPrice = 'Selling price cannot be greater than MRP';
    }
    if (!formData.sku.trim()) newErrors.sku = 'SKU is required';
    if (!formData.stockQuantity || parseInt(formData.stockQuantity) < 0) {
      newErrors.stockQuantity = 'Valid stock quantity is required';
    }
    if (images.length === 0) newErrors.images = 'At least one product image is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Save as draft
  const handleSaveAsDraft = () => {
    // Save without validation
    console.log('Saving as draft...', formData, images);
    alert('Product saved as draft!');
  };

  // Publish product
  const handlePublish = () => {
    if (validateForm()) {
      console.log('Publishing product...', formData, images);
      setProductStatus('Published');
      alert('Product published successfully!');
      // Redirect to products page
      setTimeout(() => {
        window.location.href = '/admin/products';
      }, 1000);
    } else {
      // Scroll to first error
      const firstErrorField = Object.keys(errors)[0];
      const element = document.getElementById(firstErrorField);
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Categories and attributes
  const categories = {
    'bags': { label: 'Bags', subcategories: ['Tote', 'Sling', 'Backpack'] },
    'fashion': { label: 'Fashion', subcategories: ['Scarves', 'Accessories', 'Clothing'] },
    'home': { label: 'Home Decor', subcategories: ['Wall Art', 'Pottery', 'Textiles'] },
    'accessories': { label: 'Accessories', subcategories: ['Jewelry', 'Pouches', 'Keychains'] }
  };

  const categoryAttributes: { [key: string]: { [key: string]: string[] } } = {
    'bags': {
      'Color': ['Black', 'Brown', 'Natural', 'Navy', 'Beige'],
      'Size': ['Small', 'Medium', 'Large']
    },
    'fashion': {
      'Color': ['Red', 'Blue', 'Green', 'Yellow', 'White'],
      'Size': ['S', 'M', 'L', 'XL']
    },
    'home': {
      'Color': ['Natural', 'White', 'Terracotta', 'Blue'],
      'Material': ['Jute', 'Cotton', 'Clay', 'Wood']
    },
    'accessories': {
      'Color': ['Gold', 'Silver', 'Rose Gold', 'Black'],
      'Material': ['Leather', 'Metal', 'Fabric']
    }
  };

  const availableAttributes = formData.category ? categoryAttributes[formData.category] : {};

  return (
    <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#0F0F0F]">
      {/* Sticky Top Bar */}
      <div className="sticky top-0 z-50 bg-white dark:bg-[#1A1A1A] border-b border-[#E5E5E5] dark:border-[#3A3A3A]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => window.location.href = '/admin/products'}
            className="flex items-center gap-2 text-[#6B6B6B] dark:text-[#9CA3AF] hover:text-[#1F1F1F] dark:hover:text-[#FAF9F7] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back to Products</span>
          </button>

          <h1 className="text-[18px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
            Add New Product
          </h1>

          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-[13px] font-semibold ${
              productStatus === 'Draft' 
                ? 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
                : productStatus === 'Published'
                ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200'
                : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200'
            }`}>
              {productStatus}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Form */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* 1. Basic Information */}
            <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A]">
              <h2 className="text-[16px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-4">
                Basic Information
              </h2>

              <div className="space-y-4">
                <div id="name">
                  <label className="block text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2">
                    Product Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Natural Jute Tote Bag"
                    className={`w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border ${
                      errors.name ? 'border-red-500' : 'border-[#E5E5E5] dark:border-[#3A3A3A]'
                    } rounded-lg text-[14px] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-[12px] text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                <div id="shortDescription">
                  <label className="block text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2">
                    Short Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.shortDescription}
                    onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                    placeholder="Brief description (max 160 characters)"
                    maxLength={160}
                    rows={3}
                    className={`w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border ${
                      errors.shortDescription ? 'border-red-500' : 'border-[#E5E5E5] dark:border-[#3A3A3A]'
                    } rounded-lg text-[14px] resize-none focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]`}
                  />
                  <div className="mt-1 flex justify-between items-center">
                    {errors.shortDescription && (
                      <p className="text-[12px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.shortDescription}
                      </p>
                    )}
                    <p className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] ml-auto">
                      {formData.shortDescription.length}/160
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2">
                      Brand
                    </label>
                    <input
                      type="text"
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      placeholder="e.g., Lakhil Raj"
                      className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2">
                      Product Type
                    </label>
                    <select
                      value={formData.productType}
                      onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                    >
                      <option value="simple">Simple Product</option>
                      <option value="variant">Variant Product</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Category & Attributes */}
            <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A]">
              <h2 className="text-[16px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-4">
                Category & Attributes
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="category">
                  <div>
                    <label className="block text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => {
                        setFormData({ ...formData, category: e.target.value, subcategory: '' });
                        setSelectedAttributes({});
                      }}
                      className={`w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border ${
                        errors.category ? 'border-red-500' : 'border-[#E5E5E5] dark:border-[#3A3A3A]'
                      } rounded-lg text-[14px] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]`}
                    >
                      <option value="">Select Category</option>
                      {Object.entries(categories).map(([key, value]) => (
                        <option key={key} value={key}>{value.label}</option>
                      ))}
                    </select>
                    {errors.category && (
                      <p className="mt-1 text-[12px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.category}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2">
                      Subcategory
                    </label>
                    <select
                      value={formData.subcategory}
                      onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                      disabled={!formData.category}
                      className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A] disabled:opacity-50"
                    >
                      <option value="">Select Subcategory</option>
                      {formData.category && categories[formData.category as keyof typeof categories]?.subcategories.map(sub => (
                        <option key={sub} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Attributes */}
                {formData.category && formData.productType === 'variant' && (
                  <div className="space-y-3">
                    {Object.entries(availableAttributes).map(([attrName, attrValues]) => (
                      <div key={attrName}>
                        <label className="block text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2">
                          {attrName}
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {attrValues.map(value => (
                            <button
                              key={value}
                              type="button"
                              onClick={() => {
                                const current = selectedAttributes[attrName] || [];
                                const newValues = current.includes(value)
                                  ? current.filter(v => v !== value)
                                  : [...current, value];
                                setSelectedAttributes({
                                  ...selectedAttributes,
                                  [attrName]: newValues
                                });
                              }}
                              className={`px-3 py-1.5 rounded-lg text-[13px] border transition-colors ${
                                (selectedAttributes[attrName] || []).includes(value)
                                  ? 'bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white border-[#7A4A2E] dark:border-[#4F7C6A]'
                                  : 'bg-white dark:bg-[#0F0F0F] text-[#6B6B6B] dark:text-[#9CA3AF] border-[#E5E5E5] dark:border-[#3A3A3A] hover:border-[#7A4A2E] dark:hover:border-[#4F7C6A]'
                              }`}
                            >
                              {value}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 3. Pricing */}
            <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A]">
              <h2 className="text-[16px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-4">
                Pricing
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div id="mrp">
                  <label className="block text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2">
                    MRP <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6B6B]" />
                    <input
                      type="number"
                      value={formData.mrp}
                      onChange={(e) => setFormData({ ...formData, mrp: e.target.value })}
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                      className={`w-full pl-10 pr-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border ${
                        errors.mrp ? 'border-red-500' : 'border-[#E5E5E5] dark:border-[#3A3A3A]'
                      } rounded-lg text-[14px] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]`}
                    />
                  </div>
                  {errors.mrp && (
                    <p className="mt-1 text-[12px] text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.mrp}
                    </p>
                  )}
                </div>

                <div id="sellingPrice">
                  <label className="block text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2">
                    Selling Price <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6B6B]" />
                    <input
                      type="number"
                      value={formData.sellingPrice}
                      onChange={(e) => setFormData({ ...formData, sellingPrice: e.target.value })}
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                      className={`w-full pl-10 pr-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border ${
                        errors.sellingPrice ? 'border-red-500' : 'border-[#E5E5E5] dark:border-[#3A3A3A]'
                      } rounded-lg text-[14px] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]`}
                    />
                  </div>
                  {errors.sellingPrice && (
                    <p className="mt-1 text-[12px] text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.sellingPrice}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2">
                    Discount
                  </label>
                  <div className="px-4 py-3 bg-[#F5F5F5] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] text-[#6B6B6B] dark:text-[#9CA3AF]">
                    {calculateDiscount()}%
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2">
                    Tax (GST)
                  </label>
                  <select
                    value={formData.taxClass}
                    onChange={(e) => setFormData({ ...formData, taxClass: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                  >
                    <option value="0">No Tax</option>
                    <option value="5">GST 5%</option>
                    <option value="12">GST 12%</option>
                    <option value="18">GST 18%</option>
                    <option value="28">GST 28%</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 4. Inventory */}
            <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A]">
              <h2 className="text-[16px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-4 flex items-center gap-2">
                <Package className="w-5 h-5" />
                Inventory
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div id="sku">
                  <label className="block text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2">
                    SKU <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.sku}
                    onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                    placeholder="Auto-generated"
                    className={`w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border ${
                      errors.sku ? 'border-red-500' : 'border-[#E5E5E5] dark:border-[#3A3A3A]'
                    } rounded-lg text-[14px] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]`}
                  />
                  {errors.sku && (
                    <p className="mt-1 text-[12px] text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.sku}
                    </p>
                  )}
                </div>

                <div id="stockQuantity">
                  <label className="block text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2">
                    Stock Quantity <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    value={formData.stockQuantity}
                    onChange={(e) => setFormData({ ...formData, stockQuantity: e.target.value })}
                    placeholder="0"
                    min="0"
                    className={`w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border ${
                      errors.stockQuantity ? 'border-red-500' : 'border-[#E5E5E5] dark:border-[#3A3A3A]'
                    } rounded-lg text-[14px] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]`}
                  />
                  {errors.stockQuantity && (
                    <p className="mt-1 text-[12px] text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.stockQuantity}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2">
                    Low Stock Alert
                  </label>
                  <input
                    type="number"
                    value={formData.lowStockThreshold}
                    onChange={(e) => setFormData({ ...formData, lowStockThreshold: e.target.value })}
                    placeholder="10"
                    min="0"
                    className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                  />
                </div>
              </div>

              <div className="mt-4 p-3 bg-[#F0F9FF] dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-[13px] text-blue-700 dark:text-blue-300">
                  <strong>Stock Status:</strong> {
                    parseInt(formData.stockQuantity) > parseInt(formData.lowStockThreshold)
                      ? 'In Stock'
                      : parseInt(formData.stockQuantity) > 0
                      ? 'Low Stock'
                      : 'Out of Stock'
                  }
                </p>
              </div>
            </div>

            {/* 5. Media / Images */}
            <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A]" id="images">
              <h2 className="text-[16px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-4 flex items-center gap-2">
                <ImageIcon className="w-5 h-5" />
                Product Images
              </h2>

              {/* Upload Area */}
              <div className="mb-4">
                <label className="block w-full cursor-pointer">
                  <div className="border-2 border-dashed border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg p-8 text-center hover:border-[#7A4A2E] dark:hover:border-[#4F7C6A] transition-colors">
                    <Upload className="w-12 h-12 mx-auto mb-3 text-[#6B6B6B] dark:text-[#9CA3AF]" />
                    <p className="text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-1">
                      Drag & Drop Images or Click to Browse
                    </p>
                    <p className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF]">
                      JPG or PNG • Max 8 images • At least 1 required
                    </p>
                  </div>
                  <input
                    type="file"
                    accept="image/jpeg,image/png"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
                {errors.images && (
                  <p className="mt-2 text-[12px] text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.images}
                  </p>
                )}
              </div>

              {/* Image Preview Grid */}
              {images.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {images.map((image) => (
                    <div
                      key={image.id}
                      draggable
                      onDragStart={() => handleDragStart(image.id)}
                      onDragOver={handleDragOver}
                      onDrop={() => handleDrop(image.id)}
                      className="relative group cursor-move border-2 border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg overflow-hidden"
                    >
                      <img
                        src={image.url}
                        alt="Product"
                        className="w-full h-32 object-cover"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <button
                          onClick={() => setPrimaryImage(image.id)}
                          className={`p-2 rounded-lg ${
                            image.isPrimary 
                              ? 'bg-green-500 text-white' 
                              : 'bg-white text-[#1F1F1F] hover:bg-gray-100'
                          }`}
                          title="Set as primary"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => removeImage(image.id)}
                          className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                          title="Remove"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Drag Handle */}
                      <div className="absolute top-2 left-2 p-1 bg-white/80 rounded">
                        <GripVertical className="w-4 h-4" />
                      </div>

                      {/* Primary Badge */}
                      {image.isPrimary && (
                        <div className="absolute top-2 right-2 px-2 py-1 bg-green-500 text-white text-[10px] font-bold rounded">
                          PRIMARY
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 6. Shipping */}
            <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A]">
              <h2 className="text-[16px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-4 flex items-center gap-2">
                <Truck className="w-5 h-5" />
                Shipping
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    placeholder="0.5"
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2">
                    Length (cm)
                  </label>
                  <input
                    type="number"
                    value={formData.length}
                    onChange={(e) => setFormData({ ...formData, length: e.target.value })}
                    placeholder="30"
                    min="0"
                    className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2">
                    Width (cm)
                  </label>
                  <input
                    type="number"
                    value={formData.width}
                    onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                    placeholder="20"
                    min="0"
                    className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    value={formData.height}
                    onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                    placeholder="10"
                    min="0"
                    className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2">
                  Shipping Class
                </label>
                <select
                  value={formData.shippingClass}
                  onChange={(e) => setFormData({ ...formData, shippingClass: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                >
                  <option value="standard">Standard</option>
                  <option value="heavy">Heavy</option>
                  <option value="fragile">Fragile</option>
                </select>
              </div>
            </div>

            {/* 7. SEO (Collapsed) */}
            <div className="bg-white dark:bg-[#1A1A1A] rounded-lg border border-[#E5E5E5] dark:border-[#3A3A3A] overflow-hidden">
              <button
                onClick={() => setSeoExpanded(!seoExpanded)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#FAF9F7] dark:hover:bg-[#0F0F0F] transition-colors"
              >
                <h2 className="text-[16px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] flex items-center gap-2">
                  SEO (Optional)
                </h2>
                {seoExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>

              {seoExpanded && (
                <div className="px-6 pb-6 space-y-4">
                  <div>
                    <label className="block text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2">
                      Meta Title
                    </label>
                    <input
                      type="text"
                      value={formData.metaTitle}
                      onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                      placeholder="SEO title for search engines"
                      maxLength={60}
                      className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                    />
                    <p className="mt-1 text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF]">
                      {formData.metaTitle.length}/60
                    </p>
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2">
                      Meta Description
                    </label>
                    <textarea
                      value={formData.metaDescription}
                      onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                      placeholder="SEO description for search engines"
                      maxLength={160}
                      rows={3}
                      className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] resize-none focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                    />
                    <p className="mt-1 text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF]">
                      {formData.metaDescription.length}/160
                    </p>
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2">
                      URL Slug
                    </label>
                    <input
                      type="text"
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      placeholder="product-url-slug"
                      className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Preview */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A]">
                <h3 className="text-[14px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-4 flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Customer Price Preview
                </h3>

                {/* Preview Image */}
                <div className="mb-4">
                  {images.length > 0 ? (
                    <img
                      src={images.find(img => img.isPrimary)?.url || images[0].url}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ) : (
                    <div className="w-full h-48 bg-[#F5F5F5] dark:bg-[#0F0F0F] rounded-lg flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-[#C0C0C0]" />
                    </div>
                  )}
                </div>

                {/* Product Name */}
                <h4 className="text-[16px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2">
                  {formData.name || 'Product Name'}
                </h4>

                {/* Description */}
                <p className="text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] mb-4 line-clamp-2">
                  {formData.shortDescription || 'Short description will appear here'}
                </p>

                {/* Pricing */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[24px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7]">
                      ₹{formData.sellingPrice || '0'}
                    </span>
                    {formData.mrp && parseFloat(formData.mrp) > parseFloat(formData.sellingPrice) && (
                      <>
                        <span className="text-[16px] text-[#6B6B6B] dark:text-[#9CA3AF] line-through">
                          ₹{formData.mrp}
                        </span>
                        <span className="text-[14px] font-semibold text-green-600">
                          {calculateDiscount()}% off
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF]">
                    Inclusive of all taxes
                  </p>
                </div>

                {/* Stock Status */}
                <div className="p-3 bg-[#F0F9FF] dark:bg-blue-900/20 rounded-lg mb-4">
                  <p className="text-[13px] font-semibold">
                    {parseInt(formData.stockQuantity) > 0 ? (
                      <span className="text-green-600">In Stock ({formData.stockQuantity} units)</span>
                    ) : (
                      <span className="text-red-600">Out of Stock</span>
                    )}
                  </p>
                </div>

                {/* Product Details */}
                <div className="space-y-2 text-[13px]">
                  {formData.brand && (
                    <div className="flex justify-between">
                      <span className="text-[#6B6B6B] dark:text-[#9CA3AF]">Brand:</span>
                      <span className="font-semibold text-[#1F1F1F] dark:text-[#FAF9F7]">{formData.brand}</span>
                    </div>
                  )}
                  {formData.sku && (
                    <div className="flex justify-between">
                      <span className="text-[#6B6B6B] dark:text-[#9CA3AF]">SKU:</span>
                      <span className="font-mono text-[12px] text-[#1F1F1F] dark:text-[#FAF9F7]">{formData.sku}</span>
                    </div>
                  )}
                  {formData.category && (
                    <div className="flex justify-between">
                      <span className="text-[#6B6B6B] dark:text-[#9CA3AF]">Category:</span>
                      <span className="text-[#1F1F1F] dark:text-[#FAF9F7]">
                        {categories[formData.category as keyof typeof categories]?.label}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#1A1A1A] border-t border-[#E5E5E5] dark:border-[#3A3A3A] shadow-lg">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 h-20 flex items-center justify-between gap-4">
          <div className="hidden sm:block text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF]">
            {Object.keys(errors).length > 0 ? (
              <span className="text-red-500 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {Object.keys(errors).length} error(s) found
              </span>
            ) : (
              'All changes are auto-saved'
            )}
          </div>

          <div className="flex gap-3 ml-auto">
            <button
              onClick={handleSaveAsDraft}
              className="px-6 py-3 bg-white dark:bg-[#0F0F0F] text-[#1F1F1F] dark:text-[#FAF9F7] border-2 border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg font-semibold text-[14px] hover:bg-[#FAF9F7] dark:hover:bg-[#1A1A1A] transition-colors flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span className="hidden sm:inline">Save as Draft</span>
              <span className="sm:hidden">Draft</span>
            </button>

            <button
              onClick={handlePublish}
              className="px-6 py-3 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[14px] hover:bg-[#6B3D26] dark:hover:bg-[#3E6355] transition-colors flex items-center gap-2 shadow-lg"
            >
              <Eye className="w-4 h-4" />
              <span className="hidden sm:inline">Save & Publish</span>
              <span className="sm:hidden">Publish</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
