import { useEffect, useState } from 'react';
import { FileText, Download, CheckCircle, Building, Calendar, MapPin } from 'lucide-react';

interface RegistrationData {
  ngoName: string;
  registrationNo: string;
  year: string;
  address: string;
  certificateUrl: string;
  labels: {
    ngoName: string;
    registrationNo: string;
    year: string;
    address: string;
    download: string;
  };
}

interface RegistrationTableProps {
  data: RegistrationData;
  sectionTitle: string;
  subtitle: string;
}

export function RegistrationTable({ data, sectionTitle, subtitle }: RegistrationTableProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [downloading, setDownloading] = useState(false);

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

    const section = document.getElementById('registration-table');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleDownload = () => {
    setDownloading(true);
    // Simulate download
    setTimeout(() => {
      setDownloading(false);
      // In a real implementation, this would trigger actual PDF download
      window.open(data.certificateUrl, '_blank');
    }, 500);
  };

  return (
    <section id="registration-table" className="bg-white dark:bg-[#0B1F1D] py-6 md:py-8 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="inline-flex items-center gap-2 bg-[#1E7A6E] text-white px-4 py-1.5 rounded-full mb-2">
            <FileText size={14} />
            <span className="text-[11px] font-semibold uppercase tracking-wide font-['Inter',sans-serif]">Official Information</span>
          </div>
          <h2 className="text-[22px] md:text-[26px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-2 font-['Poppins',sans-serif]">
            {sectionTitle}
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-snug max-w-[700px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Registration Details Cards - Mobile Friendly */}
        <div className={`transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* NGO Name Card */}
            <div className="bg-[#F9FAFB] dark:bg-[#112F2B] rounded-lg p-4 border border-[#E5E7EB] dark:border-[#374151] hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-[#1E7A6E]/10 dark:bg-[#1E7A6E]/20 rounded-lg flex-shrink-0">
                  <Building size={18} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] mb-1 uppercase tracking-wide">
                    {data.labels.ngoName}
                  </p>
                  <p className="text-[15px] md:text-[16px] font-bold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif] break-words">
                    {data.ngoName}
                  </p>
                </div>
              </div>
            </div>

            {/* Registration Number Card */}
            <div className="bg-[#F9FAFB] dark:bg-[#112F2B] rounded-lg p-4 border border-[#E5E7EB] dark:border-[#374151] hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-[#F4B400]/10 dark:bg-[#F4B400]/20 rounded-lg flex-shrink-0">
                  <FileText size={18} className="text-[#F4B400]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] mb-1 uppercase tracking-wide">
                    {data.labels.registrationNo}
                  </p>
                  <p className="text-[15px] md:text-[16px] font-bold text-[#111827] dark:text-[#E5E7EB] font-['Mono',monospace] break-all">
                    {data.registrationNo}
                  </p>
                </div>
              </div>
            </div>

            {/* Year Card */}
            <div className="bg-[#F9FAFB] dark:bg-[#112F2B] rounded-lg p-4 border border-[#E5E7EB] dark:border-[#374151] hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-[#1E7A6E]/10 dark:bg-[#1E7A6E]/20 rounded-lg flex-shrink-0">
                  <Calendar size={18} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] mb-1 uppercase tracking-wide">
                    {data.labels.year}
                  </p>
                  <p className="text-[15px] md:text-[16px] font-bold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif]">
                    {data.year}
                  </p>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-[#F9FAFB] dark:bg-[#112F2B] rounded-lg p-4 border border-[#E5E7EB] dark:border-[#374151] hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-[#F4B400]/10 dark:bg-[#F4B400]/20 rounded-lg flex-shrink-0">
                  <MapPin size={18} className="text-[#F4B400]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] mb-1 uppercase tracking-wide">
                    {data.labels.address}
                  </p>
                  <p className="text-[13px] md:text-[14px] text-[#111827] dark:text-[#E5E7EB] font-['Inter',sans-serif] leading-snug">
                    {data.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block bg-[#F9FAFB] dark:bg-[#112F2B] rounded-xl border border-[#E5E7EB] dark:border-[#374151] overflow-hidden shadow-lg mb-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[#1E7A6E] to-[#176b60] dark:from-[#164D46] dark:to-[#0B3A33]">
                    <th className="px-5 py-3 text-left text-[12px] font-bold text-white uppercase tracking-wide font-['Inter',sans-serif]">
                      {data.labels.ngoName}
                    </th>
                    <th className="px-5 py-3 text-left text-[12px] font-bold text-white uppercase tracking-wide font-['Inter',sans-serif]">
                      {data.labels.registrationNo}
                    </th>
                    <th className="px-5 py-3 text-left text-[12px] font-bold text-white uppercase tracking-wide font-['Inter',sans-serif]">
                      {data.labels.year}
                    </th>
                    <th className="px-5 py-3 text-left text-[12px] font-bold text-white uppercase tracking-wide font-['Inter',sans-serif]">
                      {data.labels.address}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-[#0B1F1D] hover:bg-[#F9FAFB] dark:hover:bg-[#112F2B] transition-colors duration-200">
                    <td className="px-5 py-4 border-b border-[#E5E7EB] dark:border-[#374151]">
                      <div className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0" />
                        <span className="text-[14px] font-semibold text-[#111827] dark:text-[#E5E7EB] font-['Poppins',sans-serif]">
                          {data.ngoName}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4 border-b border-[#E5E7EB] dark:border-[#374151]">
                      <span className="text-[13px] font-mono text-[#6B7280] dark:text-[#9CA3AF] font-semibold">
                        {data.registrationNo}
                      </span>
                    </td>
                    <td className="px-5 py-4 border-b border-[#E5E7EB] dark:border-[#374151]">
                      <span className="text-[14px] font-semibold text-[#111827] dark:text-[#E5E7EB] font-['Inter',sans-serif]">
                        {data.year}
                      </span>
                    </td>
                    <td className="px-5 py-4 border-b border-[#E5E7EB] dark:border-[#374151]">
                      <span className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] font-['Inter',sans-serif] leading-snug">
                        {data.address}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Download Certificate Section */}
          <div className="bg-gradient-to-br from-[#1E7A6E] to-[#0F5C52] dark:from-[#164D46] dark:to-[#0B3A33] rounded-xl p-6 md:p-8 text-center shadow-lg">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full mb-3">
              <FileText size={22} className="text-white" />
            </div>
            <h3 className="text-[18px] md:text-[20px] font-bold text-white mb-2 font-['Poppins',sans-serif]">
              {data.labels.download}
            </h3>
            <p className="text-[13px] md:text-[14px] text-white/90 mb-4 font-['Inter',sans-serif]">
              Download our official registration certificate for verification
            </p>
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="group inline-flex items-center gap-2 bg-white text-[#1E7A6E] px-6 py-3 rounded-lg font-semibold text-[14px] font-['Inter',sans-serif] hover:bg-[#F4B400] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {downloading ? (
                <>
                  <div className="w-4 h-4 border-2 border-[#1E7A6E]/30 border-t-[#1E7A6E] rounded-full animate-spin"></div>
                  <span>Downloading...</span>
                </>
              ) : (
                <>
                  <Download size={18} className="group-hover:animate-bounce" />
                  <span>Download Certificate (PDF)</span>
                </>
              )}
            </button>
            <p className="text-[11px] text-white/70 mt-3 font-['Inter',sans-serif]">
              File size: ~2.5 MB | Format: PDF
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
