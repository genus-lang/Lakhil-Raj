import { useState, useEffect } from 'react';
import { useThemeLanguage } from '../../contexts/ThemeLanguageContext';
import { donateTranslations } from '../../translations/donateTranslations';
import { CreditCard, Smartphone, ShieldCheck } from 'lucide-react';

interface FormData {
  fullName: string;
  dob: string;
  email: string;
  mobile: string;
  address: string;
  pincode: string;
  city: string;
  state: string;
  country: string;
  pan: string;
}

interface FormErrors {
  [key: string]: string;
}

export function DonationCard() {
  const { language } = useThemeLanguage();
  const t = (key: any) => donateTranslations[key]?.[language] || key;

  const [donationType, setDonationType] = useState<'monthly' | 'onetime'>('monthly');
  const [selectedAmount, setSelectedAmount] = useState<number>(500);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    dob: '',
    email: '',
    mobile: '',
    address: '',
    pincode: '',
    city: '',
    state: '',
    country: 'India',
    pan: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());

  const presetAmounts = [100, 500, 1000, 2000, 5000];

  // Validation functions
  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateMobile = (mobile: string): boolean => {
    return /^\d{10}$/.test(mobile);
  };

  const validatePincode = (pincode: string): boolean => {
    return /^\d{6}$/.test(pincode);
  };

  const validatePAN = (pan: string): boolean => {
    return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan);
  };

  const validateField = (name: string, value: string): string => {
    // PAN is optional, so only validate if value is provided
    if (name === 'pan') {
      if (!value.trim()) return '';
      return validatePAN(value.toUpperCase()) ? '' : t('donate.validation.pan');
    }

    if (!value.trim()) {
      return t('donate.validation.required');
    }

    switch (name) {
      case 'email':
        return validateEmail(value) ? '' : t('donate.validation.email');
      case 'mobile':
        return validateMobile(value) ? '' : t('donate.validation.mobile');
      case 'pincode':
        return validatePincode(value) ? '' : t('donate.validation.pincode');
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate on change if field was touched
    if (touched.has(name)) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched(prev => new Set(prev).add(name));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setCustomAmount(value);
    setIsCustom(true);
    if (value && parseInt(value) >= 100) {
      setSelectedAmount(parseInt(value));
    }
  };

  const isFormValid = (): boolean => {
    const requiredFields: (keyof FormData)[] = [
      'fullName', 'dob', 'email', 'mobile', 'address', 
      'pincode', 'city', 'state', 'country'
    ];

    const allFieldsFilled = requiredFields.every(field => formData[field].trim() !== '');
    const noErrors = Object.values(errors).every(error => !error);
    const amountValid = (isCustom ? parseInt(customAmount) >= 100 : selectedAmount >= 100);
    
    return allFieldsFilled && noErrors && agreed && amountValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isFormValid()) {
      // Here you would integrate with payment gateway
      console.log('Processing donation:', {
        type: donationType,
        amount: isCustom ? parseInt(customAmount) : selectedAmount,
        formData
      });
      alert('Payment gateway integration would happen here. Form is valid!');
    }
  };

  return (
    <div className="w-full max-w-[440px] mx-auto bg-white dark:bg-[#0F2E2A] rounded-2xl shadow-lg p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Donation Type Toggle */}
        <div className="flex gap-2 p-1 bg-[#F3F4F6] dark:bg-[#1A3935] rounded-lg">
          <button
            type="button"
            onClick={() => setDonationType('monthly')}
            className={`flex-1 py-2.5 px-4 rounded-md text-[13px] font-medium transition-all ${
              donationType === 'monthly'
                ? 'bg-[#1E7A6E] dark:bg-[#4FD1C5] text-white dark:text-[#0F2E2A]'
                : 'text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5]'
            }`}
          >
            {t('donate.card.monthly')}
          </button>
          <button
            type="button"
            onClick={() => setDonationType('onetime')}
            className={`flex-1 py-2.5 px-4 rounded-md text-[13px] font-medium transition-all ${
              donationType === 'onetime'
                ? 'bg-[#1E7A6E] dark:bg-[#4FD1C5] text-white dark:text-[#0F2E2A]'
                : 'text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5]'
            }`}
          >
            {t('donate.card.onetime')}
          </button>
        </div>

        {/* Amount Selection */}
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            {presetAmounts.map(amount => (
              <button
                key={amount}
                type="button"
                onClick={() => handleAmountSelect(amount)}
                className={`py-2.5 px-4 rounded-lg text-[14px] font-medium border-2 transition-all ${
                  selectedAmount === amount && !isCustom
                    ? 'border-[#1E7A6E] dark:border-[#4FD1C5] bg-[#1E7A6E]/5 dark:bg-[#4FD1C5]/10 text-[#1E7A6E] dark:text-[#4FD1C5]'
                    : 'border-[#E5E7EB] dark:border-[#1F4D47] text-[#6B7280] dark:text-[#9CA3AF] hover:border-[#1E7A6E] dark:hover:border-[#4FD1C5]'
                }`}
              >
                ₹{amount}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder={`₹ ${t('donate.card.otherAmount')}`}
            value={customAmount}
            onChange={handleCustomAmountChange}
            onFocus={() => setIsCustom(true)}
            className={`w-full py-2.5 px-4 rounded-lg border-2 text-[14px] bg-white dark:bg-[#0F2E2A] transition-all ${
              isCustom && customAmount
                ? 'border-[#1E7A6E] dark:border-[#4FD1C5]'
                : 'border-[#E5E7EB] dark:border-[#1F4D47]'
            } text-[#1F2937] dark:text-[#F9FAFB] placeholder:text-[#9CA3AF] dark:placeholder:text-[#6B7280] focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5]`}
          />
          {isCustom && customAmount && parseInt(customAmount) < 100 && (
            <p className="text-[12px] text-red-600 dark:text-red-400">
              {t('donate.validation.amount')}
            </p>
          )}
        </div>

        {/* Donor Details Form */}
        <div className="space-y-3 pt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <input
                type="text"
                name="fullName"
                placeholder={`${t('donate.card.fullName')}*`}
                value={formData.fullName}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`w-full py-2 px-3 rounded-lg border text-[13px] bg-white dark:bg-[#0F2E2A] ${
                  errors.fullName && touched.has('fullName')
                    ? 'border-red-500'
                    : 'border-[#E5E7EB] dark:border-[#1F4D47]'
                } text-[#1F2937] dark:text-[#F9FAFB] placeholder:text-[#9CA3AF] dark:placeholder:text-[#6B7280] focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5]`}
              />
              {errors.fullName && touched.has('fullName') && (
                <p className="text-[11px] text-red-600 dark:text-red-400 mt-1">{errors.fullName}</p>
              )}
            </div>

            <div>
              <input
                type="date"
                name="dob"
                placeholder={`${t('donate.card.dob')}*`}
                value={formData.dob}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`w-full py-2 px-3 rounded-lg border text-[13px] bg-white dark:bg-[#0F2E2A] ${
                  errors.dob && touched.has('dob')
                    ? 'border-red-500'
                    : 'border-[#E5E7EB] dark:border-[#1F4D47]'
                } text-[#1F2937] dark:text-[#F9FAFB] focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5]`}
              />
              {errors.dob && touched.has('dob') && (
                <p className="text-[11px] text-red-600 dark:text-red-400 mt-1">{errors.dob}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <input
                type="email"
                name="email"
                placeholder={`${t('donate.card.email')}*`}
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`w-full py-2 px-3 rounded-lg border text-[13px] bg-white dark:bg-[#0F2E2A] ${
                  errors.email && touched.has('email')
                    ? 'border-red-500'
                    : 'border-[#E5E7EB] dark:border-[#1F4D47]'
                } text-[#1F2937] dark:text-[#F9FAFB] placeholder:text-[#9CA3AF] dark:placeholder:text-[#6B7280] focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5]`}
              />
              {errors.email && touched.has('email') && (
                <p className="text-[11px] text-red-600 dark:text-red-400 mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="tel"
                name="mobile"
                placeholder={`${t('donate.card.mobile')}*`}
                value={formData.mobile}
                onChange={handleInputChange}
                onBlur={handleBlur}
                maxLength={10}
                className={`w-full py-2 px-3 rounded-lg border text-[13px] bg-white dark:bg-[#0F2E2A] ${
                  errors.mobile && touched.has('mobile')
                    ? 'border-red-500'
                    : 'border-[#E5E7EB] dark:border-[#1F4D47]'
                } text-[#1F2937] dark:text-[#F9FAFB] placeholder:text-[#9CA3AF] dark:placeholder:text-[#6B7280] focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5]`}
              />
              {errors.mobile && touched.has('mobile') && (
                <p className="text-[11px] text-red-600 dark:text-red-400 mt-1">{errors.mobile}</p>
              )}
            </div>
          </div>

          <div>
            <input
              type="text"
              name="address"
              placeholder={`${t('donate.card.address')}*`}
              value={formData.address}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full py-2 px-3 rounded-lg border text-[13px] bg-white dark:bg-[#0F2E2A] ${
                errors.address && touched.has('address')
                  ? 'border-red-500'
                  : 'border-[#E5E7EB] dark:border-[#1F4D47]'
              } text-[#1F2937] dark:text-[#F9FAFB] placeholder:text-[#9CA3AF] dark:placeholder:text-[#6B7280] focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5]`}
            />
            {errors.address && touched.has('address') && (
              <p className="text-[11px] text-red-600 dark:text-red-400 mt-1">{errors.address}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <input
                type="text"
                name="pincode"
                placeholder={`${t('donate.card.pincode')}*`}
                value={formData.pincode}
                onChange={handleInputChange}
                onBlur={handleBlur}
                maxLength={6}
                className={`w-full py-2 px-3 rounded-lg border text-[13px] bg-white dark:bg-[#0F2E2A] ${
                  errors.pincode && touched.has('pincode')
                    ? 'border-red-500'
                    : 'border-[#E5E7EB] dark:border-[#1F4D47]'
                } text-[#1F2937] dark:text-[#F9FAFB] placeholder:text-[#9CA3AF] dark:placeholder:text-[#6B7280] focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5]`}
              />
              {errors.pincode && touched.has('pincode') && (
                <p className="text-[11px] text-red-600 dark:text-red-400 mt-1">{errors.pincode}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="city"
                placeholder={`${t('donate.card.city')}*`}
                value={formData.city}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`w-full py-2 px-3 rounded-lg border text-[13px] bg-white dark:bg-[#0F2E2A] ${
                  errors.city && touched.has('city')
                    ? 'border-red-500'
                    : 'border-[#E5E7EB] dark:border-[#1F4D47]'
                } text-[#1F2937] dark:text-[#F9FAFB] placeholder:text-[#9CA3AF] dark:placeholder:text-[#6B7280] focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5]`}
              />
              {errors.city && touched.has('city') && (
                <p className="text-[11px] text-red-600 dark:text-red-400 mt-1">{errors.city}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <input
                type="text"
                name="state"
                placeholder={`${t('donate.card.state')}*`}
                value={formData.state}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`w-full py-2 px-3 rounded-lg border text-[13px] bg-white dark:bg-[#0F2E2A] ${
                  errors.state && touched.has('state')
                    ? 'border-red-500'
                    : 'border-[#E5E7EB] dark:border-[#1F4D47]'
                } text-[#1F2937] dark:text-[#F9FAFB] placeholder:text-[#9CA3AF] dark:placeholder:text-[#6B7280] focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5]`}
              />
              {errors.state && touched.has('state') && (
                <p className="text-[11px] text-red-600 dark:text-red-400 mt-1">{errors.state}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="country"
                placeholder={`${t('donate.card.country')}*`}
                value={formData.country}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`w-full py-2 px-3 rounded-lg border text-[13px] bg-white dark:bg-[#0F2E2A] ${
                  errors.country && touched.has('country')
                    ? 'border-red-500'
                    : 'border-[#E5E7EB] dark:border-[#1F4D47]'
                } text-[#1F2937] dark:text-[#F9FAFB] placeholder:text-[#9CA3AF] dark:placeholder:text-[#6B7280] focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5]`}
              />
              {errors.country && touched.has('country') && (
                <p className="text-[11px] text-red-600 dark:text-red-400 mt-1">{errors.country}</p>
              )}
            </div>
          </div>

          <div>
            <input
              type="text"
              name="pan"
              placeholder={`${t('donate.card.pan')} (Optional)`}
              value={formData.pan}
              onChange={handleInputChange}
              onBlur={handleBlur}
              maxLength={10}
              className={`w-full py-2 px-3 rounded-lg border text-[13px] bg-white dark:bg-[#0F2E2A] uppercase ${
                errors.pan && touched.has('pan')
                  ? 'border-red-500'
                  : 'border-[#E5E7EB] dark:border-[#1F4D47]'
              } text-[#1F2937] dark:text-[#F9FAFB] placeholder:text-[#9CA3AF] dark:placeholder:text-[#6B7280] focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5]`}
            />
            {errors.pan && touched.has('pan') && (
              <p className="text-[11px] text-red-600 dark:text-red-400 mt-1">{errors.pan}</p>
            )}
          </div>
        </div>

        {/* Compliance Text */}
        <div className="bg-[#F9FAFB] dark:bg-[#1A3935] p-3 rounded-lg">
          <p className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
            {t('donate.card.complianceText')}
          </p>
        </div>

        {/* Declaration Checkbox */}
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 w-4 h-4 text-[#1E7A6E] border-[#D1D5DB] dark:border-[#1F4D47] rounded focus:ring-[#1E7A6E] dark:focus:ring-[#4FD1C5]"
          />
          <span className="text-[12px] text-[#374151] dark:text-[#D1D5DB] leading-relaxed">
            {t('donate.card.declaration')}
          </span>
        </label>

        {/* Payment Methods */}
        <div className="border-t border-[#E5E7EB] dark:border-[#1F4D47] pt-3 space-y-2">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Smartphone className="w-5 h-5 text-[#6B7280] dark:text-[#9CA3AF]" />
            <CreditCard className="w-5 h-5 text-[#6B7280] dark:text-[#9CA3AF]" />
            <ShieldCheck className="w-5 h-5 text-[#6B7280] dark:text-[#9CA3AF]" />
          </div>
          <p className="text-[11px] text-center text-[#6B7280] dark:text-[#9CA3AF]">
            {t('donate.card.securePayments')}
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid()}
          className={`w-full py-3 rounded-lg text-[14px] font-semibold transition-all ${
            isFormValid()
              ? 'bg-[#1E7A6E] dark:bg-[#4FD1C5] text-white dark:text-[#0F2E2A] hover:bg-[#176758] dark:hover:bg-[#3DB9AD] shadow-md'
              : 'bg-[#E5E7EB] dark:bg-[#1F4D47] text-[#9CA3AF] dark:text-[#6B7280] cursor-not-allowed'
          }`}
        >
          {t('donate.card.continue')}
        </button>
      </form>
    </div>
  );
}
