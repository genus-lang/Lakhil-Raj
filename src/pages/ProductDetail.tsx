import { useState, useEffect } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { productTranslations } from '../translations/productTranslations';
import { StoreNavbar } from '../components/Store/StoreNavbar';
import { StoreFooter } from '../components/Store/StoreFooter';
import { ProductCard } from '../components/Store/ProductCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Star, Heart, Check, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

export default function ProductDetail() {
  const { language } = useThemeLanguage();
  const { isAuthenticated } = useAuth();
  const t = (key: string) => productTranslations[key]?.[language] || key;

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedColor, setSelectedColor] = useState('natural');
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock product data
  const product = {
    id: '1',
    name: 'Natural Jute Tote Bag',
    brand: 'Lakhil Raj Artisans',
    rating: 4.6,
    reviewCount: 248,
    price: 450,
    mrp: 650,
    discount: 31,
    images: [
      'https://images.unsplash.com/photo-1758487424832-a53ae6cdefdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwaGFuZG1hZGUlMjBwcm9kdWN0cyUyMGNyYWZ0JTIwZGlzcGxheXxlbnwxfHx8fDE3NzA1ODY0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1662555200162-22fc64c1bd25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGp1dGUlMjBiYWclMjBkZXRhaWwlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3MDU4NzUxMnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1653182791582-e6bd5ed9917b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYmFnJTIwdGV4dHVyZSUyMG5hdHVyYWwlMjBsaWdodHxlbnwxfHx8fDE3NzA1ODc1MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1605050714263-e8b7d424d945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBiYWclMjBsaWZlc3R5bGUlMjBwcm9kdWN0JTIwc2hvdHxlbnwxfHx8fDE3NzA1ODc1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    highlights: [
      '100% Natural Jute Fiber',
      'Handwoven by Women Artisans',
      'Eco-Friendly & Biodegradable',
      'Strong & Durable Construction',
      'Spacious Interior (15L capacity)'
    ],
    description: 'This beautiful handmade jute tote bag is crafted with care by skilled women artisans. Made from 100% natural jute fiber, it combines traditional weaving techniques with modern design. Perfect for daily use, shopping, or beach trips. Each bag is unique and supports sustainable livelihoods.',
    specifications: {
      'Material': '100% Natural Jute',
      'Dimensions': '38cm x 32cm x 12cm',
      'Capacity': '15 Liters',
      'Handle Length': '60cm',
      'Weight': '280g',
      'Care': 'Spot clean only'
    }
  };

  const sizes = ['small', 'medium', 'large'];
  const colors = [
    { id: 'natural', name: 'Natural', hex: '#D4C4A8' },
    { id: 'brown', name: 'Brown', hex: '#7A4A2E' },
    { id: 'green', name: 'Green', hex: '#4F7C6A' }
  ];

  const reviews = [
    {
      id: '1',
      name: 'Priya Sharma',
      rating: 5,
      text: 'Absolutely love this bag! The quality is excellent and I feel good knowing it supports women artisans.',
      verified: true,
      date: '2 days ago'
    },
    {
      id: '2',
      name: 'Rahul Verma',
      rating: 4,
      text: 'Great bag, very sturdy. Perfect size for groceries. Slightly wish the handles were a bit longer.',
      verified: true,
      date: '5 days ago'
    },
    {
      id: '3',
      name: 'Anjali Mehta',
      rating: 5,
      text: 'Beautiful craftsmanship! The natural look is gorgeous and it holds a lot. Highly recommend!',
      verified: true,
      date: '1 week ago'
    }
  ];

  const similarProducts = [
    {
      id: '2',
      name: 'Eco-Friendly Canvas Bag',
      price: 380,
      image: 'https://images.unsplash.com/photo-1576192350050-d9e08ee1f122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHRvdGUlMjBiYWclMjBlY28lMjBmcmllbmRseXxlbnwxfHx8fDE3NzA1ODY0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'Handmade'
    },
    {
      id: '3',
      name: 'Artisan Leather Pouch',
      price: 550,
      image: 'https://images.unsplash.com/photo-1722963296065-d5f164b46d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGxlYXRoZXIlMjBiYWclMjBhcnRpc2FuJTIwY3JhZnR8ZW58MXx8fHwxNzcwNTg2NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'Women-Made'
    },
    {
      id: '4',
      name: 'Handwoven Fabric Accessories',
      price: 320,
      image: 'https://images.unsplash.com/photo-1765384314198-364dd688efd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGZhYnJpYyUyMGFjY2Vzc29yaWVzJTIwY3JhZnR8ZW58MXx8fHwxNzcwNTg2NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'Handmade'
    },
    {
      id: '5',
      name: 'Organic Cotton Tote',
      price: 420,
      image: 'https://images.unsplash.com/photo-1709303014108-5d988f63864f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMGNvdHRvbiUyMGJhZyUyMG5hdHVyYWx8ZW58MXx8fHwxNzcwNTg3MDIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'Women-Made'
    }
  ];

  const handleSubmitReview = () => {
    if (userRating > 0 && reviewText.trim()) {
      // Handle review submission
      setUserRating(0);
      setReviewText('');
    }
  };

  const renderStars = (rating: number, interactive = false, onRate?: (rating: number) => void) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? 'fill-[#F4B400] text-[#F4B400]'
                : 'fill-none text-[#E5E5E5] dark:text-[#3A3A3A]'
            } ${interactive ? 'cursor-pointer' : ''}`}
            onClick={() => interactive && onRate && onRate(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <StoreNavbar cartCount={0} />
      
      <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#0F0F0F]">
        {/* SECTION 1: PRODUCT OVERVIEW */}
        <section className="py-8 px-4">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left: Image Gallery */}
              <div className="space-y-4">
                {/* Main Image */}
                <div className="relative aspect-square rounded-lg overflow-hidden bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#3A3A3A]">
                  <ImageWithFallback
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-3">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index
                          ? 'border-[#7A4A2E] dark:border-[#4F7C6A]'
                          : 'border-[#E5E5E5] dark:border-[#3A3A3A] hover:border-[#7A4A2E]/50'
                      }`}
                    >
                      <ImageWithFallback
                        src={img}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: Product Info */}
              <div className="space-y-6">
                {/* Brand */}
                <p className="text-[12px] text-[#7A4A2E] dark:text-[#4F7C6A] font-semibold uppercase tracking-wide font-['Inter',sans-serif]">
                  {t('product.brand')}: {product.brand}
                </p>

                {/* Title */}
                <h1 className="text-[28px] md:text-[36px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] leading-tight font-['Playfair_Display',serif]">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-3">
                  {renderStars(product.rating)}
                  <span className="text-[14px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                    {product.rating} ({product.reviewCount} {t('product.ratings')})
                  </span>
                </div>

                {/* Price */}
                <div className="space-y-1">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[32px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                      ₹{product.price}
                    </span>
                    <span className="text-[18px] text-[#6B6B6B] dark:text-[#9CA3AF] line-through font-['Inter',sans-serif]">
                      {t('product.mrp')} ₹{product.mrp}
                    </span>
                    <span className="text-[14px] text-[#4F7C6A] dark:text-[#4FD1C5] font-semibold font-['Inter',sans-serif]">
                      ({product.discount}% {t('product.off')})
                    </span>
                  </div>
                  <p className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                    {t('product.inclusive')}
                  </p>
                </div>

                {/* Impact Message */}
                <div className="p-4 bg-[#F0EDE9] dark:bg-[#1A1A1A] rounded-lg border border-[#E5E5E5] dark:border-[#3A3A3A]">
                  <p className="text-[13px] text-[#1F1F1F] dark:text-[#FAF9F7] flex items-center gap-2 font-['Inter',sans-serif]">
                    <Check className="w-4 h-4 text-[#4F7C6A]" />
                    {t('product.impact')}
                  </p>
                </div>

                {/* Size Selection */}
                <div className="space-y-3">
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                    {t('product.size')}
                  </label>
                  <div className="flex gap-3">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-2.5 rounded-lg text-[13px] font-semibold transition-all font-['Inter',sans-serif] ${
                          selectedSize === size
                            ? 'bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white border-2 border-[#7A4A2E] dark:border-[#4F7C6A]'
                            : 'bg-white dark:bg-[#1A1A1A] text-[#1F1F1F] dark:text-[#FAF9F7] border-2 border-[#E5E5E5] dark:border-[#3A3A3A] hover:border-[#7A4A2E] dark:hover:border-[#4F7C6A]'
                        }`}
                      >
                        {t(`product.size.${size}`)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selection */}
                <div className="space-y-3">
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                    {t('product.color')}
                  </label>
                  <div className="flex gap-3">
                    {colors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColor(color.id)}
                        className={`w-10 h-10 rounded-full border-2 transition-all ${
                          selectedColor === color.id
                            ? 'border-[#7A4A2E] dark:border-[#4F7C6A] scale-110'
                            : 'border-[#E5E5E5] dark:border-[#3A3A3A]'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex gap-3 pt-4">
                  <a href="/cart" className="flex-1 px-6 py-3.5 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[15px] hover:shadow-lg transition-all font-['Inter',sans-serif] text-center">
                    {t('product.addToCart')}
                  </a>
                  <a href={isAuthenticated ? '/checkout' : '/login'} className="flex-1 px-6 py-3.5 bg-white dark:bg-[#1A1A1A] text-[#7A4A2E] dark:text-[#4F7C6A] border-2 border-[#7A4A2E] dark:border-[#4F7C6A] rounded-lg font-semibold text-[15px] hover:bg-[#7A4A2E] hover:text-white dark:hover:bg-[#4F7C6A] dark:hover:text-white transition-all font-['Inter',sans-serif] text-center">
                    {t('product.buyNow')}
                  </a>
                  {isAuthenticated && (
                    <button
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className="px-4 py-3.5 bg-white dark:bg-[#1A1A1A] border-2 border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg hover:border-[#7A4A2E] dark:hover:border-[#4F7C6A] transition-all"
                    >
                      <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-[#6B6B6B] dark:text-[#9CA3AF]'}`} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: KEY HIGHLIGHTS */}
        <section className="py-8 px-4 bg-white dark:bg-[#1A1A1A]">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-[20px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-4 font-['Playfair_Display',serif]">
              {t('product.highlights')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {product.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] rounded-lg">
                  <Check className="w-4 h-4 text-[#4F7C6A] flex-shrink-0" />
                  <span className="text-[13px] text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: OFFERS & DELIVERY */}
        <section className="py-8 px-4">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Offers */}
              <div className="p-6 bg-white dark:bg-[#1A1A1A] rounded-lg border border-[#E5E5E5] dark:border-[#3A3A3A]">
                <h3 className="text-[16px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-3 font-['Playfair_Display',serif]">
                  {t('product.offers')}
                </h3>
                <div className="space-y-2">
                  <p className="text-[13px] text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                    🏷️ Bank Offer: 10% off with HDFC Credit Card
                  </p>
                  <p className="text-[13px] text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                    🏷️ No Cost EMI starting ₹150/month
                  </p>
                </div>
              </div>

              {/* Delivery */}
              <div className="p-6 bg-white dark:bg-[#1A1A1A] rounded-lg border border-[#E5E5E5] dark:border-[#3A3A3A]">
                <h3 className="text-[16px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-3 font-['Playfair_Display',serif]">
                  {t('product.delivery')}
                </h3>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    placeholder={t('product.enterPincode')}
                    className="flex-1 px-3 py-2 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[13px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                  />
                  <button className="px-4 py-2 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg text-[13px] font-semibold font-['Inter',sans-serif]">
                    {t('product.check')}
                  </button>
                </div>
                <div className="space-y-2">
                  <p className="text-[13px] text-[#1F1F1F] dark:text-[#FAF9F7] flex items-center gap-2 font-['Inter',sans-serif]">
                    <Check className="w-4 h-4 text-[#4F7C6A]" />
                    {t('product.deliveryBy')} 12 Feb
                  </p>
                  <p className="text-[13px] text-[#1F1F1F] dark:text-[#FAF9F7] flex items-center gap-2 font-['Inter',sans-serif]">
                    <Check className="w-4 h-4 text-[#4F7C6A]" />
                    {t('product.freeShipping')}
                  </p>
                  <p className="text-[13px] text-[#1F1F1F] dark:text-[#FAF9F7] flex items-center gap-2 font-['Inter',sans-serif]">
                    <Check className="w-4 h-4 text-[#4F7C6A]" />
                    {t('product.replacement')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: PRODUCT DESCRIPTION */}
        <section className="py-8 px-4 bg-white dark:bg-[#1A1A1A]">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-[20px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-4 font-['Playfair_Display',serif]">
              {t('product.description')}
            </h2>
            <div className="space-y-3">
              <p className={`text-[14px] text-[#1F1F1F] dark:text-[#FAF9F7] leading-relaxed font-['Inter',sans-serif] ${!isDescriptionExpanded ? 'line-clamp-3' : ''}`}>
                {product.description}
              </p>
              <button
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                className="flex items-center gap-1 text-[13px] text-[#7A4A2E] dark:text-[#4F7C6A] font-semibold hover:gap-2 transition-all font-['Inter',sans-serif]"
              >
                {isDescriptionExpanded ? t('product.readLess') : t('product.readMore')}
                {isDescriptionExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 5: SPECIFICATIONS */}
        <section className="py-8 px-4">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-[20px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-4 font-['Playfair_Display',serif]">
              {t('product.specifications')}
            </h2>
            <div className="bg-white dark:bg-[#1A1A1A] rounded-lg border border-[#E5E5E5] dark:border-[#3A3A3A] overflow-hidden">
              <table className="w-full">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <tr key={key} className={index % 2 === 0 ? 'bg-[#FAF9F7] dark:bg-[#0F0F0F]' : ''}>
                      <td className="px-4 py-3 text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] w-1/3 font-['Inter',sans-serif]">
                        {key}
                      </td>
                      <td className="px-4 py-3 text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 6: REVIEWS & RATINGS */}
        <section className="py-8 px-4 bg-white dark:bg-[#1A1A1A]">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-[20px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-6 font-['Playfair_Display',serif]">
              {t('product.reviews')}
            </h2>

            {/* Review Summary */}
            <div className="mb-8 p-6 bg-[#F0EDE9] dark:bg-[#0F0F0F] rounded-lg">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-[48px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                    {product.rating}
                  </div>
                  {renderStars(product.rating)}
                  <p className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] mt-2 font-['Inter',sans-serif]">
                    {t('product.basedOn')} {product.reviewCount} {t('product.ratings')}
                  </p>
                </div>
              </div>
            </div>

            {/* User Reviews */}
            <div className="space-y-4 mb-8">
              {reviews.map((review) => (
                <div key={review.id} className="p-4 bg-[#FAF9F7] dark:bg-[#0F0F0F] rounded-lg border border-[#E5E5E5] dark:border-[#3A3A3A]">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                        {review.name}
                      </p>
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-[11px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                      {review.date}
                    </span>
                  </div>
                  <p className="text-[13px] text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 font-['Inter',sans-serif]">
                    {review.text}
                  </p>
                  {review.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] text-[#4F7C6A] font-semibold font-['Inter',sans-serif]">
                      <Check className="w-3 h-3" />
                      {t('product.verifiedPurchase')}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Write Review */}
            <div className="p-6 bg-[#F0EDE9] dark:bg-[#0F0F0F] rounded-lg">
              <h3 className="text-[16px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-4 font-['Playfair_Display',serif]">
                {t('product.writeReview')}
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                    {t('product.yourRating')}
                  </label>
                  {renderStars(userRating, true, setUserRating)}
                </div>
                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                    {t('product.yourReview')}
                  </label>
                  <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[13px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                    placeholder="Share your experience with this product..."
                  />
                </div>
                <button
                  onClick={handleSubmitReview}
                  disabled={userRating === 0 || !reviewText.trim()}
                  className="px-6 py-2.5 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[14px] hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed font-['Inter',sans-serif]"
                >
                  {t('product.submitReview')}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: Q&A */}
        <section className="py-8 px-4">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-[20px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-4 font-['Playfair_Display',serif]">
              {t('product.qa')}
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-[#1A1A1A] rounded-lg border border-[#E5E5E5] dark:border-[#3A3A3A]">
                <p className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 font-['Inter',sans-serif]">
                  Q: Is this bag machine washable?
                </p>
                <p className="text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                  A: No, we recommend spot cleaning only to maintain the natural jute fibers.
                </p>
              </div>
              <button className="text-[13px] text-[#7A4A2E] dark:text-[#4F7C6A] font-semibold hover:underline font-['Inter',sans-serif]">
                {t('product.askQuestion')}
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 8: SIMILAR PRODUCTS */}
        <section className="py-8 px-4 bg-white dark:bg-[#1A1A1A]">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-[20px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-6 font-['Playfair_Display',serif]">
              {t('product.similar')}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {similarProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Mobile Sticky CTA */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-[#1A1A1A] border-t border-[#E5E5E5] dark:border-[#3A3A3A] z-40">
          <div className="flex items-center gap-3">
            <div>
              <p className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                Price
              </p>
              <p className="text-[20px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                ₹{product.price}
              </p>
            </div>
            <a href="/cart" className="flex-1 px-6 py-3 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[14px] font-['Inter',sans-serif] text-center">
              {t('product.addToCart')}
            </a>
          </div>
        </div>
      </div>

      <StoreFooter />
    </>
  );
}
