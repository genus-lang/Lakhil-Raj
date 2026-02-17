import { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';

interface ContactMapProps {
  title: string;
  address: string;
}

export function ContactMap({ title, address }: ContactMapProps) {
  const [isVisible, setIsVisible] = useState(false);

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

    const section = document.getElementById('contact-map');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="contact-map" className="bg-[#F9FAFB] dark:bg-[#112F2B] py-6 md:py-8 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className={`text-center mb-4 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="inline-flex items-center gap-2 bg-[#1E7A6E] text-white px-4 py-1.5 rounded-full mb-2">
            <MapPin size={14} />
            <span className="text-[11px] font-semibold uppercase tracking-wide font-['Inter',sans-serif]">Visit Us</span>
          </div>
          <h2 className="text-[20px] md:text-[24px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-1 font-['Poppins',sans-serif]">
            {title}
          </h2>
          <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] max-w-[600px] mx-auto">
            {address}
          </p>
        </div>

        <div className={`transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="rounded-xl overflow-hidden shadow-lg border border-[#E5E7EB] dark:border-[#374151] h-[300px] md:h-[350px] bg-[#E5E7EB] dark:bg-[#1F2937] relative">
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9747900475647!2d77.20687931508064!3d28.635308982420857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd371d9e0c57%3A0x5b8e6c8c8a9c5e5e!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lakhil Raj Welfare Foundation Location"
              className="grayscale-[30%] dark:grayscale-[50%]"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
