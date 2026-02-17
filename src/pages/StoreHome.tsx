import { useState, useEffect } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { storeTranslations } from '../translations/storeTranslations';
import { StoreNavbar } from '../components/Store/StoreNavbar';
import { StoreFooter } from '../components/Store/StoreFooter';
import { ProductCard } from '../components/Store/ProductCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Sparkles, Heart, Tag, ShoppingBag, IndianRupee, BookOpen, Sprout, CheckCircle, Users, Shield, ExternalLink, ArrowRight } from 'lucide-react';

export default function StoreHome() {
  const { language } = useThemeLanguage();
  const { isAuthenticated, user, isLoading } = useAuth();
  const t = (key: string) => storeTranslations[key]?.[language] || key;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Redirect logged-in users to their appropriate home
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      if (user?.isAdmin) {
        window.location.href = '/admin';
      } else {
        window.location.href = '/home-logged-in';
      }
    }
  }, [isAuthenticated, user, isLoading]);

  // Sample products
  const featuredProducts = [
    {
      id: '1',
      name: 'Natural Jute Tote Bag',
      price: 450,
      image: 'https://images.unsplash.com/photo-1758487424832-a53ae6cdefdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGp1dGUlMjBiYWclMjBuYXR1cmFsJTIwY3JhZnR8ZW58MXx8fHwxNzcwNTg2NDg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: t('store.badge.handmade')
    },
    {
      id: '2',
      name: 'Eco-Friendly Canvas Bag',
      price: 380,
      image: 'https://images.unsplash.com/photo-1576192350050-d9e08ee1f122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHRvdGUlMjBiYWclMjBlY28lMjBmcmllbmRseXxlbnwxfHx8fDE3NzA1ODY0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: t('store.badge.handmade')
    },
    {
      id: '3',
      name: 'Artisan Leather Pouch',
      price: 550,
      image: 'https://images.unsplash.com/photo-1722963296065-d5f164b46d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGxlYXRoZXIlMjBiYWclMjBhcnRpc2FuJTIwY3JhZnR8ZW58MXx8fHwxNzcwNTg2NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: t('store.badge.handmade')
    },
    {
      id: '4',
      name: 'Handwoven Fabric Accessories',
      price: 320,
      image: 'https://images.unsplash.com/photo-1765384314198-364dd688efd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGZhYnJpYyUyMGFjY2Vzc29yaWVzJTIwY3JhZnR8ZW58MXx8fHwxNzcwNTg2NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: t('store.badge.handmade')
    }
  ];

  const whyBuyCards = [
    { icon: Sparkles, title: t('store.why.title1'), desc: t('store.why.desc1') },
    { icon: Heart, title: t('store.why.title2'), desc: t('store.why.desc2') },
    { icon: Tag, title: t('store.why.title3'), desc: t('store.why.desc3') }
  ];

  const impactSteps = [
    { icon: ShoppingBag, title: t('store.impact.step1.title'), desc: t('store.impact.step1.desc') },
    { icon: IndianRupee, title: t('store.impact.step2.title'), desc: t('store.impact.step2.desc') },
    { icon: BookOpen, title: t('store.impact.step3.title'), desc: t('store.impact.step3.desc') },
    { icon: Sprout, title: t('store.impact.step4.title'), desc: t('store.impact.step4.desc') }
  ];

  const categories = [
    {
      name: t('store.category.bags'),
      image: 'https://images.unsplash.com/photo-1758487424832-a53ae6cdefdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGp1dGUlMjBiYWclMjBuYXR1cmFsJTIwY3JhZnR8ZW58MXx8fHwxNzcwNTg2NDg3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: t('store.category.accessories'),
      image: 'https://images.unsplash.com/photo-1765384314198-364dd688efd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGZhYnJpYyUyMGFjY2Vzc29yaWVzJTIwY3JhZnR8ZW58MXx8fHwxNzcwNTg2NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: t('store.category.eco'),
      image: 'https://images.unsplash.com/photo-1576192350050-d9e08ee1f122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHRvdGUlMjBiYWclMjBlY28lMjBmcmllbmRseXxlbnwxfHx8fDE3NzA1ODY0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const trustItems = [
    { text: t('store.trust.handmade') },
    { text: t('store.trust.empowerment') },
    { text: t('store.trust.ethical') },
    { text: t('store.trust.linked') }
  ];

  return (
    <>
      <StoreNavbar cartCount={0} />
      
      <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#0F0F0F]">
        {/* SECTION 1: HERO */}
        <section className="py-16 md:py-20 px-4">
          <div className="max-w-[1400px] mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {/* Left: Text */}
              <div className="space-y-6">
                <p className="text-[12px] uppercase tracking-widest text-[#7A4A2E] dark:text-[#4F7C6A] font-semibold font-['Inter',sans-serif]">
                  {t('store.hero.eyebrow')}
                </p>
                <h1 className="text-[40px] md:text-[52px] lg:text-[60px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] leading-tight font-['Playfair_Display',serif]">
                  {t('store.hero.heading')}
                </h1>
                <p className="text-[16px] text-[#6B6B6B] dark:text-[#9CA3AF] leading-relaxed max-w-[500px] font-['Inter',sans-serif]">
                  {t('store.hero.subtext')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="/shop" className="px-8 py-3.5 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[15px] hover:shadow-xl transition-all duration-300 hover:scale-[1.02] font-['Inter',sans-serif] text-center">
                    🛒 {t('store.hero.cta')}
                  </a>
                  <a href="#artisans" className="flex items-center justify-center gap-2 px-8 py-3.5 text-[#7A4A2E] dark:text-[#4F7C6A] font-semibold text-[15px] hover:gap-3 transition-all font-['Inter',sans-serif]">
                    {t('store.hero.secondary')} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right: Product Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758487424832-a53ae6cdefdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwaGFuZG1hZGUlMjBwcm9kdWN0cyUyMGNyYWZ0JTIwZGlzcGxheXxlbnwxfHx8fDE3NzA1ODY0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Handmade products"
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHY BUY FROM US */}
        <section className="py-12 px-4 bg-white dark:bg-[#1A1A1A]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whyBuyCards.map((card, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-[#FAF9F7] dark:bg-[#0F0F0F] rounded-xl border border-[#E5E5E5] dark:border-[#3A3A3A] hover:shadow-md transition-all">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-[#7A4A2E]/10 dark:bg-[#4F7C6A]/10">
                    <card.icon className="w-6 h-6 text-[#7A4A2E] dark:text-[#4F7C6A]" />
                  </div>
                  <h3 className="text-[16px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 font-['Playfair_Display',serif]">
                    {card.title}
                  </h3>
                  <p className="text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] leading-relaxed font-['Inter',sans-serif]">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: FEATURED PRODUCTS */}
        <section id="shop" className="py-16 px-4">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-8 text-center font-['Playfair_Display',serif]">
              {t('store.featured.heading')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
            <div className="text-center">
              <a href="/shop" className="inline-flex items-center gap-2 text-[#7A4A2E] dark:text-[#4F7C6A] font-semibold text-[15px] hover:gap-3 transition-all font-['Inter',sans-serif]">
                {t('store.featured.viewAll')} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 4: MEET THE ARTISANS */}
        <section id="artisans" className="py-16 px-4 bg-[#F0EDE9] dark:bg-[#1A1A1A]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759738096144-b43206226765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFydGlzYW4lMjB3ZWF2aW5nJTIwY3JhZnRzJTIwaW5kaWF8ZW58MXx8fHwxNzcwNTg2NDg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Women artisans at work"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              
              {/* Text */}
              <div className="space-y-6">
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] leading-tight font-['Playfair_Display',serif]">
                  {t('store.artisans.heading')}
                </h2>
                <p className="text-[15px] text-[#6B6B6B] dark:text-[#9CA3AF] leading-relaxed font-['Inter',sans-serif]">
                  {t('store.artisans.text')}
                </p>
                <a href="#artisans-page" className="inline-flex items-center gap-2 text-[#7A4A2E] dark:text-[#4F7C6A] font-semibold text-[15px] hover:gap-3 transition-all font-['Inter',sans-serif]">
                  {t('store.artisans.cta')} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: HOW YOUR PURCHASE HELPS */}
        <section id="impact" className="py-16 px-4">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-12 text-center font-['Playfair_Display',serif]">
              {t('store.impact.heading')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {impactSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center p-6">
                    <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-full bg-[#7A4A2E]/10 dark:bg-[#4F7C6A]/10">
                      <step.icon className="w-7 h-7 text-[#7A4A2E] dark:text-[#4F7C6A]" />
                    </div>
                    <h3 className="text-[16px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 font-['Playfair_Display',serif]">
                      {step.title}
                    </h3>
                    <p className="text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                      {step.desc}
                    </p>
                  </div>
                  {index < impactSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <ArrowRight className="w-5 h-5 text-[#7A4A2E]/30 dark:text-[#4F7C6A]/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: CATEGORIES */}
        <section id="categories" className="py-16 px-4 bg-white dark:bg-[#1A1A1A]">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-8 text-center font-['Playfair_Display',serif]">
              {t('store.categories.heading')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <a
                  key={index}
                  href="#category"
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <ImageWithFallback
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <h3 className="text-[22px] font-bold text-white font-['Playfair_Display',serif]">
                      {category.name}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: TRUST & ETHICS STRIP */}
        <section className="py-12 px-4 bg-[#F0EDE9] dark:bg-[#0F0F0F] border-y border-[#E5E5E5] dark:border-[#3A3A3A]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              {trustItems.map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-2 p-3">
                  <CheckCircle className="w-5 h-5 text-[#7A4A2E] dark:text-[#4F7C6A] flex-shrink-0" />
                  <span className="text-[13px] text-[#1F1F1F] dark:text-[#FAF9F7] font-medium font-['Inter',sans-serif] text-center">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[12px] text-center text-[#6B6B6B] dark:text-[#9CA3AF] italic font-['Inter',sans-serif]">
              {t('store.trust.note')}
            </p>
          </div>
        </section>

        {/* SECTION 8: SOFT CTA */}
        <section className="py-20 px-4">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-[32px] md:text-[44px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-6 font-['Playfair_Display',serif]">
              {t('store.cta.text')}
            </h2>
            <a href="/shop" className="inline-block px-10 py-4 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[16px] hover:shadow-xl transition-all duration-300 hover:scale-[1.02] font-['Inter',sans-serif]">
              🛒 {t('store.cta.button')}
            </a>
          </div>
        </section>
      </div>

      <StoreFooter />
    </>
  );
}
