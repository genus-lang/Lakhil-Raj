import { useState, useEffect } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { supportTranslations } from '../translations/supportTranslations';
import { StoreNavbar } from '../components/Store/StoreNavbar';
import { StoreFooter } from '../components/Store/StoreFooter';
import { Eye, EyeOff, Check } from 'lucide-react';

export default function Signup() {
  const { language } = useThemeLanguage();
  const t = (key: any) => supportTranslations[key]?.[language] || key;

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [passwordValid, setPasswordValid] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setPasswordValid(formData.password.length >= 8);
  }, [formData.password]);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordValid) {
      alert('Password must be at least 8 characters');
      return;
    }
    console.log('Signup:', formData);
    // Handle signup logic
    window.location.href = '/login';
  };

  return (
    <>
      <StoreNavbar cartCount={0} />
      
      <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#0F0F0F] py-12 px-4 flex items-center justify-center">
        <div className="w-full max-w-[420px]">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-[32px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 font-['Playfair_Display',serif]">
              {t('signup.title')}
            </h1>
            <p className="text-[14px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
              Join us in supporting women artisans
            </p>
          </div>

          {/* Signup Form */}
          <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-8 border border-[#E5E5E5] dark:border-[#3A3A3A]">
            <form onSubmit={handleSignup} className="space-y-5">
              <div>
                <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                  {t('signup.fullName')}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                />
              </div>

              <div>
                <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                  {t('login.email')}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                />
              </div>

              <div>
                <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                  {t('login.password')}
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A] pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6B6B] dark:text-[#9CA3AF] hover:text-[#7A4A2E] dark:hover:text-[#4F7C6A] transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  {passwordValid ? (
                    <Check className="w-3 h-3 text-[#4F7C6A]" />
                  ) : (
                    <div className="w-3 h-3" />
                  )}
                  <p className={`text-[11px] font-['Inter',sans-serif] ${
                    passwordValid ? 'text-[#4F7C6A]' : 'text-[#6B6B6B] dark:text-[#9CA3AF]'
                  }`}>
                    {t('signup.passwordHelper')}
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3.5 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[15px] hover:shadow-lg transition-all font-['Inter',sans-serif]"
              >
                {t('signup.button')}
              </button>

              <p className="text-[11px] text-center text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                {t('signup.terms')}
              </p>
            </form>

            {/* Login Link */}
            <p className="text-[13px] text-center text-[#6B6B6B] dark:text-[#9CA3AF] mt-6 font-['Inter',sans-serif]">
              {t('signup.hasAccount')}{' '}
              <a href="/login" className="text-[#7A4A2E] dark:text-[#4F7C6A] font-semibold hover:underline">
                {t('signup.login')}
              </a>
            </p>
          </div>
        </div>
      </div>

      <StoreFooter />
    </>
  );
}
