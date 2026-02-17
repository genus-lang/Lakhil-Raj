import { useState, useEffect } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { supportTranslations } from '../translations/supportTranslations';
import { StoreNavbar } from '../components/Store/StoreNavbar';
import { StoreFooter } from '../components/Store/StoreFooter';
import { Eye, EyeOff, Shield, User } from 'lucide-react';

export default function Login() {
  const { language } = useThemeLanguage();
  const { login, isAuthenticated, isLoading } = useAuth();
  const t = (key: string) => supportTranslations[key]?.[language] || key;

  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    otp: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Don't auto-redirect - let the login handler do it
  // This prevents premature redirects during page load

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (isAdminMode) {
      // Admin login
      if (formData.email === 'admin@lakhilraj.org' && formData.password === 'admin123') {
        const success = login(formData.email, formData.password);
        if (success) {
          setTimeout(() => {
            window.location.href = '/admin';
          }, 100);
        }
      } else {
        setError('Invalid admin credentials. Try: admin@lakhilraj.org / admin123');
      }
    } else {
      // Customer login
      const success = login(formData.email, formData.password);
      
      if (success) {
        setTimeout(() => {
          window.location.href = '/home-logged-in';
        }, 100);
      } else {
        setError('Invalid credentials. Try: 8058060375 / 12345678');
      }
    }
  };

  const handleOtpLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('OTP Login:', formData);
    // Handle OTP login logic
    window.location.href = '/home-logged-in';
  };

  const toggleMode = () => {
    setIsAdminMode(!isAdminMode);
    setFormData({ email: '', password: '', otp: '' });
    setError('');
    setShowOtp(false);
  };

  return (
    <>
      <StoreNavbar cartCount={0} />
      
      <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#0F0F0F] py-12 px-4 flex items-center justify-center">
        <div className="w-full max-w-[420px]">
          {/* Mode Toggle */}
          <div className="mb-6 bg-white dark:bg-[#1A1A1A] rounded-lg p-1.5 border border-[#E5E5E5] dark:border-[#3A3A3A] flex">
            <button
              onClick={() => !isAdminMode || toggleMode()}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md transition-all ${
                !isAdminMode
                  ? 'bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white'
                  : 'text-[#6B6B6B] dark:text-[#9CA3AF] hover:text-[#1F1F1F] dark:hover:text-[#FAF9F7]'
              }`}
            >
              <User className="w-4 h-4" />
              <span className="text-[14px] font-semibold">Customer</span>
            </button>
            <button
              onClick={() => isAdminMode || toggleMode()}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md transition-all ${
                isAdminMode
                  ? 'bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white'
                  : 'text-[#6B6B6B] dark:text-[#9CA3AF] hover:text-[#1F1F1F] dark:hover:text-[#FAF9F7]'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span className="text-[14px] font-semibold">Admin</span>
            </button>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-[32px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 font-['Playfair_Display',serif]">
              {isAdminMode ? 'Admin Login' : t('login.title')}
            </h1>
            <p className="text-[14px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
              {isAdminMode ? 'Secure access for operations team' : t('login.subtitle')}
            </p>
          </div>

          {/* Login Form */}
          {!showOtp ? (
            <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-8 border border-[#E5E5E5] dark:border-[#3A3A3A]">
              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                    {isAdminMode ? 'Email' : t('login.email')}
                  </label>
                  <input
                    type="text"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      setError('');
                    }}
                    required
                    placeholder={isAdminMode ? 'admin@lakhilraj.org' : '8058060375'}
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
                      onChange={(e) => {
                        setFormData({ ...formData, password: e.target.value });
                        setError('');
                      }}
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
                </div>

                {!isAdminMode && (
                  <div className="text-right">
                    <a href="#forgot" className="text-[12px] text-[#7A4A2E] dark:text-[#4F7C6A] hover:underline font-['Inter',sans-serif]">
                      {t('login.forgotPassword')}
                    </a>
                  </div>
                )}

                {error && (
                  <div className="px-4 py-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-[13px] text-red-600 dark:text-red-400 font-['Inter',sans-serif]">
                      {error}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[15px] hover:shadow-lg transition-all font-['Inter',sans-serif]"
                >
                  {isAdminMode ? 'Admin Login' : t('login.button')}
                </button>
              </form>

              {!isAdminMode && (
                <>
                  {/* Divider */}
                  <div className="flex items-center gap-4 my-6">
                    <div className="flex-1 border-t border-[#E5E5E5] dark:border-[#3A3A3A]"></div>
                    <span className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                      {t('login.or')}
                    </span>
                    <div className="flex-1 border-t border-[#E5E5E5] dark:border-[#3A3A3A]"></div>
                  </div>

                  {/* OTP Login */}
                  <button
                    onClick={() => setShowOtp(true)}
                    className="w-full px-6 py-3 bg-white dark:bg-[#0F0F0F] text-[#7A4A2E] dark:text-[#4F7C6A] border-2 border-[#7A4A2E] dark:border-[#4F7C6A] rounded-lg font-semibold text-[14px] hover:bg-[#7A4A2E] hover:text-white dark:hover:bg-[#4F7C6A] dark:hover:text-white transition-all font-['Inter',sans-serif]"
                  >
                    {t('login.otpLogin')}
                  </button>

                  {/* Sign Up Link */}
                  <p className="text-[13px] text-center text-[#6B6B6B] dark:text-[#9CA3AF] mt-6 font-['Inter',sans-serif]">
                    {t('login.noAccount')}{' '}
                    <a href="/signup" className="text-[#7A4A2E] dark:text-[#4F7C6A] font-semibold hover:underline">
                      {t('login.signup')}
                    </a>
                  </p>
                </>
              )}

              {isAdminMode && (
                <div className="mt-6 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-[12px] text-blue-600 dark:text-blue-400 font-['Inter',sans-serif]">
                    🔒 Admin access is restricted to authorized personnel only.
                  </p>
                </div>
              )}
            </div>
          ) : (
            // OTP Form
            <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-8 border border-[#E5E5E5] dark:border-[#3A3A3A]">
              <button
                onClick={() => setShowOtp(false)}
                className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] hover:text-[#7A4A2E] dark:hover:text-[#4F7C6A] mb-4 font-['Inter',sans-serif]"
              >
                ← Back to login
              </button>
              <form onSubmit={handleOtpLogin} className="space-y-5">
                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                    {t('login.email')}
                  </label>
                  <input
                    type="text"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="email@example.com or phone"
                    className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                  />
                </div>

                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                    Enter OTP
                  </label>
                  <input
                    type="text"
                    value={formData.otp}
                    onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                    required
                    placeholder="123456"
                    maxLength={6}
                    className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                  />
                  <p className="text-[11px] text-[#6B6B6B] dark:text-[#9CA3AF] mt-2 font-['Inter',sans-serif]">
                    OTP sent to your email/phone
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[15px] hover:shadow-lg transition-all font-['Inter',sans-serif]"
                >
                  Verify & Login
                </button>

                <button
                  type="button"
                  className="text-[12px] text-[#7A4A2E] dark:text-[#4F7C6A] hover:underline font-['Inter',sans-serif] w-full"
                >
                  Resend OTP
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      <StoreFooter />
    </>
  );
}
