import { useState } from 'react';
import { useThemeLanguage } from '../../contexts/ThemeLanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { storeTranslations } from '../../translations/storeTranslations';
import { ShoppingCart, Menu, X, User } from 'lucide-react';

interface StoreNavbarProps {
  cartCount?: number;
}

export function StoreNavbar({ cartCount = 0 }: StoreNavbarProps) {
  const { language } = useThemeLanguage();
  const { isAuthenticated, user } = useAuth();
  const t = (key: any) => storeTranslations[key]?.[language] || key;
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Don't show customer nav if admin
  const showCustomerNav = isAuthenticated && !user?.isAdmin;

  // Different navigation for logged-in vs public users
  const navLinks = showCustomerNav 
    ? [
        { label: 'Shop', href: '/shop' },
        { label: 'Orders', href: '/my-account' },
        { label: 'Wishlist', href: '/wishlist' },
        { label: 'Track Order', href: '/track-order' },
        { label: 'Bulk Orders', href: '/bulk-orders' }
      ]
    : [
        { label: 'Shop', href: '/shop' },
        { label: 'Bulk Orders', href: '/bulk-orders' },
        { label: 'Shipping & Returns', href: '/shipping-returns' },
        { label: 'Contact Us', href: '/contact-support' }
      ];

  return (
    <nav className="sticky top-0 z-50 bg-[#FAF9F7]/95 dark:bg-[#1F1F1F]/95 backdrop-blur-sm border-b border-[#E5E5E5] dark:border-[#3A3A3A]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href={user?.isAdmin ? '/admin' : (isAuthenticated ? '/home-logged-in' : '/store')} className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#7A4A2E] dark:bg-[#4F7C6A] rounded-md flex items-center justify-center">
              <span className="text-white text-[14px] font-bold font-['Playfair_Display',serif]">LR</span>
            </div>
            <span className="text-[16px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Playfair_Display',serif] hidden sm:block">
              Handmade Store
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] text-[#1F1F1F] dark:text-[#FAF9F7] hover:text-[#7A4A2E] dark:hover:text-[#4F7C6A] transition-colors font-['Inter',sans-serif]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Cart + Login + Mobile Menu */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Login/Account Button - Desktop */}
            {isAuthenticated ? (
              <a 
                href="/my-account" 
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg text-[13px] font-semibold hover:shadow-lg transition-all font-['Inter',sans-serif]"
              >
                <User className="w-4 h-4" />
                Account
              </a>
            ) : (
              <a 
                href="/login" 
                className="hidden md:block px-4 py-2 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg text-[13px] font-semibold hover:shadow-lg transition-all font-['Inter',sans-serif]"
              >
                Login
              </a>
            )}

            {/* Cart */}
            <a href="/cart" className="relative p-2 hover:bg-[#F0EDE9] dark:hover:bg-[#2A2A2A] rounded-lg transition-colors">
              <ShoppingCart className="w-5 h-5 text-[#1F1F1F] dark:text-[#FAF9F7]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-[#F0EDE9] dark:hover:bg-[#2A2A2A] rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#1F1F1F] dark:text-[#FAF9F7]" />
              ) : (
                <Menu className="w-5 h-5 text-[#1F1F1F] dark:text-[#FAF9F7]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#E5E5E5] dark:border-[#3A3A3A]">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[14px] text-[#1F1F1F] dark:text-[#FAF9F7] hover:text-[#7A4A2E] dark:hover:text-[#4F7C6A] transition-colors py-2 font-['Inter',sans-serif]"
                >
                  {link.label}
                </a>
              ))}
              {isAuthenticated ? (
                <a
                  href="/my-account"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 px-4 py-2.5 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg text-[14px] font-semibold text-center font-['Inter',sans-serif]"
                >
                  My Account
                </a>
              ) : (
                <a
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 px-4 py-2.5 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg text-[14px] font-semibold text-center font-['Inter',sans-serif]"
                >
                  Login / Sign Up
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
