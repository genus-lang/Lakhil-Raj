import { useState, useEffect } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { accountTranslations } from '../translations/accountTranslations';
import { StoreNavbar } from '../components/Store/StoreNavbar';
import { StoreFooter } from '../components/Store/StoreFooter';
import { Package, Tag, User, Bell } from 'lucide-react';

interface Notification {
  id: string;
  type: 'order' | 'offer' | 'account';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export default function Notifications() {
  const { language } = useThemeLanguage();
  const { isAuthenticated, isLoading, user } = useAuth();
  const t = (key: string) => accountTranslations[key]?.[language] || key;

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        window.location.href = '/login';
      } else if (user?.isAdmin) {
        window.location.href = '/admin';
      }
    }
  }, [isAuthenticated, isLoading, user]);

  const [filter, setFilter] = useState<'all' | 'order' | 'offer' | 'account'>('all');
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'order',
      title: 'Order Shipped',
      message: 'Your order #ORD123456 has been shipped and is on its way.',
      time: '2 hours ago',
      read: false
    },
    {
      id: '2',
      type: 'offer',
      title: 'New Collection Available',
      message: 'Check out our latest handmade bags collection with 20% off.',
      time: '1 day ago',
      read: false
    },
    {
      id: '3',
      type: 'order',
      title: 'Order Delivered',
      message: 'Your order #ORD789012 has been delivered successfully.',
      time: '3 days ago',
      read: true
    },
    {
      id: '4',
      type: 'account',
      title: 'Profile Updated',
      message: 'Your profile information has been updated successfully.',
      time: '1 week ago',
      read: true
    }
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredNotifications = filter === 'all'
    ? notifications
    : notifications.filter(n => n.type === filter);

  const markAsRead = (id: string) => {
    setNotifications(notifs =>
      notifs.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'order': return Package;
      case 'offer': return Tag;
      case 'account': return User;
      default: return Bell;
    }
  };

  if (filteredNotifications.length === 0) {
    return (
      <>
        <StoreNavbar cartCount={2} />
        <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#0F0F0F] flex items-center justify-center py-20 px-4">
          <div className="text-center">
            <Bell className="w-16 h-16 text-[#6B6B6B] dark:text-[#9CA3AF] mx-auto mb-4" />
            <h1 className="text-[24px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 font-['Playfair_Display',serif]">
              {t('notif.empty')}
            </h1>
          </div>
        </div>
        <StoreFooter />
      </>
    );
  }

  return (
    <>
      <StoreNavbar cartCount={2} />
      
      <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#0F0F0F] py-8 px-4">
        <div className="max-w-[900px] mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-[28px] md:text-[36px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-6 font-['Playfair_Display',serif]">
              {t('notif.title')}
            </h1>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg text-[13px] font-semibold transition-all font-['Inter',sans-serif] ${
                  filter === 'all'
                    ? 'bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white'
                    : 'bg-white dark:bg-[#1A1A1A] text-[#1F1F1F] dark:text-[#FAF9F7] border border-[#E5E5E5] dark:border-[#3A3A3A]'
                }`}
              >
                {t('notif.all')}
              </button>
              <button
                onClick={() => setFilter('order')}
                className={`px-4 py-2 rounded-lg text-[13px] font-semibold transition-all font-['Inter',sans-serif] ${
                  filter === 'order'
                    ? 'bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white'
                    : 'bg-white dark:bg-[#1A1A1A] text-[#1F1F1F] dark:text-[#FAF9F7] border border-[#E5E5E5] dark:border-[#3A3A3A]'
                }`}
              >
                {t('notif.orders')}
              </button>
              <button
                onClick={() => setFilter('offer')}
                className={`px-4 py-2 rounded-lg text-[13px] font-semibold transition-all font-['Inter',sans-serif] ${
                  filter === 'offer'
                    ? 'bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white'
                    : 'bg-white dark:bg-[#1A1A1A] text-[#1F1F1F] dark:text-[#FAF9F7] border border-[#E5E5E5] dark:border-[#3A3A3A]'
                }`}
              >
                {t('notif.offers')}
              </button>
              <button
                onClick={() => setFilter('account')}
                className={`px-4 py-2 rounded-lg text-[13px] font-semibold transition-all font-['Inter',sans-serif] ${
                  filter === 'account'
                    ? 'bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white'
                    : 'bg-white dark:bg-[#1A1A1A] text-[#1F1F1F] dark:text-[#FAF9F7] border border-[#E5E5E5] dark:border-[#3A3A3A]'
                }`}
              >
                {t('notif.account')}
              </button>
            </div>
          </div>

          {/* Notifications List */}
          <div className="space-y-3">
            {filteredNotifications.map((notification) => {
              const Icon = getIcon(notification.type);
              return (
                <button
                  key={notification.id}
                  onClick={() => markAsRead(notification.id)}
                  className={`w-full text-left bg-white dark:bg-[#1A1A1A] rounded-lg p-4 border transition-all ${
                    notification.read
                      ? 'border-[#E5E5E5] dark:border-[#3A3A3A]'
                      : 'border-[#7A4A2E] dark:border-[#4F7C6A] shadow-md'
                  }`}
                >
                  <div className="flex gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      notification.read
                        ? 'bg-[#F0EDE9] dark:bg-[#2A2A2A]'
                        : 'bg-[#7A4A2E] dark:bg-[#4F7C6A]'
                    }`}>
                      <Icon className={`w-5 h-5 ${
                        notification.read
                          ? 'text-[#6B6B6B] dark:text-[#9CA3AF]'
                          : 'text-white'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-[15px] mb-1 font-['Inter',sans-serif] ${
                        notification.read
                          ? 'text-[#1F1F1F] dark:text-[#FAF9F7] font-semibold'
                          : 'text-[#1F1F1F] dark:text-[#FAF9F7] font-bold'
                      }`}>
                        {notification.title}
                      </h3>
                      <p className={`text-[13px] mb-2 font-['Inter',sans-serif] ${
                        notification.read
                          ? 'text-[#6B6B6B] dark:text-[#9CA3AF]'
                          : 'text-[#1F1F1F] dark:text-[#FAF9F7]'
                      }`}>
                        {notification.message}
                      </p>
                      <p className="text-[11px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                        {notification.time}
                      </p>
                    </div>
                    {!notification.read && (
                      <div className="w-2 h-2 bg-[#7A4A2E] dark:bg-[#4F7C6A] rounded-full mt-2 flex-shrink-0" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <StoreFooter />
    </>
  );
}
