import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

interface ContactInfo {
  title: string;
  email: string;
  phone: string;
  address: string;
  hours: string;
}

interface FormLabels {
  name: string;
  email: string;
  phone: string;
  message: string;
  submit: string;
  sending: string;
  success: string;
}

interface SocialMedia {
  title: string;
}

interface ContactSectionProps {
  contactInfo: ContactInfo;
  form: FormLabels;
  socialMedia: SocialMedia;
}

export function ContactSection({ contactInfo, form, socialMedia }: ContactSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contact-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', phone: '', message: '' });

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', url: '#', color: 'hover:text-[#1877F2]' },
    { icon: Twitter, label: 'Twitter', url: '#', color: 'hover:text-[#1DA1F2]' },
    { icon: Instagram, label: 'Instagram', url: '#', color: 'hover:text-[#E4405F]' },
    { icon: Linkedin, label: 'LinkedIn', url: '#', color: 'hover:text-[#0A66C2]' },
    { icon: Youtube, label: 'YouTube', url: '#', color: 'hover:text-[#FF0000]' },
  ];

  return (
    <section id="contact-section" className="bg-white dark:bg-[#0B1F1D] py-6 md:py-8 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left: Contact Details */}
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h2 className="text-[20px] md:text-[24px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-4 font-['Poppins',sans-serif]">
              {contactInfo.title}
            </h2>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start gap-3 group">
                <div className="flex items-center justify-center w-10 h-10 bg-[#1E7A6E]/10 dark:bg-[#1E7A6E]/20 rounded-lg group-hover:bg-[#1E7A6E] dark:group-hover:bg-[#1E7A6E] transition-all duration-300 flex-shrink-0">
                  <Mail size={18} className="text-[#1E7A6E] dark:text-[#4FD1C5] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] mb-0.5 uppercase tracking-wide">Email</p>
                  <a href="mailto:info@sambhavngo.org" className="text-[14px] font-semibold text-[#111827] dark:text-[#E5E7EB] hover:text-[#1E7A6E] dark:hover:text-[#4FD1C5] transition-colors font-['Inter',sans-serif]">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 group">
                <div className="flex items-center justify-center w-10 h-10 bg-[#F4B400]/10 dark:bg-[#F4B400]/20 rounded-lg group-hover:bg-[#F4B400] transition-all duration-300 flex-shrink-0">
                  <Phone size={18} className="text-[#F4B400] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] mb-0.5 uppercase tracking-wide">Phone</p>
                  <a href="tel:+911234567890" className="text-[14px] font-semibold text-[#111827] dark:text-[#E5E7EB] hover:text-[#F4B400] transition-colors font-['Inter',sans-serif]">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 group">
                <div className="flex items-center justify-center w-10 h-10 bg-[#1E7A6E]/10 dark:bg-[#1E7A6E]/20 rounded-lg group-hover:bg-[#1E7A6E] dark:group-hover:bg-[#1E7A6E] transition-all duration-300 flex-shrink-0">
                  <MapPin size={18} className="text-[#1E7A6E] dark:text-[#4FD1C5] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] mb-0.5 uppercase tracking-wide">Address</p>
                  <p className="text-[14px] font-semibold text-[#111827] dark:text-[#E5E7EB] font-['Inter',sans-serif] leading-snug">
                    {contactInfo.address}
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-[#F9FAFB] dark:bg-[#112F2B] rounded-lg p-3 border border-[#E5E7EB] dark:border-[#374151]">
                <p className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] mb-1 uppercase tracking-wide">Office Hours</p>
                <p className="text-[13px] text-[#111827] dark:text-[#E5E7EB] font-['Inter',sans-serif] leading-snug">
                  {contactInfo.hours}
                </p>
              </div>

              {/* Social Media */}
              <div className="pt-2">
                <p className="text-[13px] text-[#111827] dark:text-[#E5E7EB] font-semibold mb-2 font-['Poppins',sans-serif]">
                  {socialMedia.title}
                </p>
                <div className="flex gap-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      aria-label={social.label}
                      className={`flex items-center justify-center w-9 h-9 bg-[#F9FAFB] dark:bg-[#112F2B] rounded-lg text-[#6B7280] dark:text-[#9CA3AF] ${social.color} transition-all duration-300 hover:scale-110 border border-[#E5E7EB] dark:border-[#374151]`}
                    >
                      <social.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="bg-[#F9FAFB] dark:bg-[#112F2B] rounded-xl p-5 md:p-6 border border-[#E5E7EB] dark:border-[#374151] shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-[13px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-1.5 font-['Inter',sans-serif]">
                    {form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-white dark:bg-[#0B1F1D] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[#111827] dark:text-[#E5E7EB] text-[14px] font-['Inter',sans-serif] focus:outline-none focus:ring-2 focus:ring-[#1E7A6E] dark:focus:ring-[#4FD1C5] transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-[13px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-1.5 font-['Inter',sans-serif]">
                    {form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-white dark:bg-[#0B1F1D] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[#111827] dark:text-[#E5E7EB] text-[14px] font-['Inter',sans-serif] focus:outline-none focus:ring-2 focus:ring-[#1E7A6E] dark:focus:ring-[#4FD1C5] transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-[13px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-1.5 font-['Inter',sans-serif]">
                    {form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white dark:bg-[#0B1F1D] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[#111827] dark:text-[#E5E7EB] text-[14px] font-['Inter',sans-serif] focus:outline-none focus:ring-2 focus:ring-[#1E7A6E] dark:focus:ring-[#4FD1C5] transition-all duration-200"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[13px] font-semibold text-[#111827] dark:text-[#E5E7EB] mb-1.5 font-['Inter',sans-serif]">
                    {form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 bg-white dark:bg-[#0B1F1D] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[#111827] dark:text-[#E5E7EB] text-[14px] font-['Inter',sans-serif] focus:outline-none focus:ring-2 focus:ring-[#1E7A6E] dark:focus:ring-[#4FD1C5] transition-all duration-200 resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1E7A6E] to-[#0F5C52] dark:from-[#164D46] dark:to-[#0B3A33] text-white px-5 py-2.5 rounded-lg font-semibold text-[14px] font-['Inter',sans-serif] hover:shadow-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>{form.sending}</span>
                    </>
                  ) : (
                    <>
                      <span>{form.submit}</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

                {/* Success Message */}
                {submitSuccess && (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3 text-center">
                    <p className="text-green-700 dark:text-green-400 font-semibold text-[13px] font-['Inter',sans-serif]">
                      {form.success}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
