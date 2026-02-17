import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Shield, Eye, EyeOff } from 'lucide-react';

export default function AdminLogin() {
  const { login, isAuthenticated, user } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    // Redirect if already authenticated as admin
    if (isAuthenticated && user?.isAdmin) {
      window.location.href = '/admin';
    }
  }, [isAuthenticated, user]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const success = login(formData.email, formData.password);
    
    if (success && formData.email === 'admin@lakhilraj.org') {
      window.location.href = '/admin';
    } else {
      setError('Invalid admin credentials. Try: admin@lakhilraj.org / admin123');
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0F0F0F] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-[380px]">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-[#1E7A6E] dark:bg-[#1E7A6E] rounded-full flex items-center justify-center">
            <Shield className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-[28px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF] mb-2">
            Admin Login
          </h1>
          <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF]">
            Authorized access only
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-8 border border-[#E5E7EB] dark:border-[#374151] shadow-sm">
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF] mb-2 block">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  setError('');
                }}
                required
                placeholder="admin@lakhilraj.org"
                className="w-full px-4 py-3 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[14px] focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#1E7A6E]"
              />
            </div>

            <div>
              <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF] mb-2 block">
                Password
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
                  className="w-full px-4 py-3 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[14px] focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#1E7A6E] pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="px-4 py-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-[13px] text-red-600 dark:text-red-400">
                  {error}
                </p>
              </div>
            )}

            <button
              type="submit"
              className="w-full px-6 py-3.5 bg-[#1E7A6E] text-white rounded-lg font-semibold text-[15px] hover:bg-[#176559] transition-all"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="#forgot" className="text-[12px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] hover:underline">
              Forgot password?
            </a>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-6 text-center">
          <a href="/" className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] hover:underline">
            ← Back to website
          </a>
        </div>
      </div>
    </div>
  );
}
