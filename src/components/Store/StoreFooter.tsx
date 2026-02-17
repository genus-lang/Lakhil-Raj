import { useThemeLanguage } from '../../contexts/ThemeLanguageContext';
import { storeTranslations } from '../../translations/storeTranslations';

export function StoreFooter() {
  const { language } = useThemeLanguage();
  const t = (key: any) => storeTranslations[key]?.[language] || key;

  const footerSections = [
    {
      title: t('store.footer.shop'),
      links: [
        { label: t('store.footer.allProducts'), href: '#products' },
        { label: t('store.nav.categories'), href: '#categories' },
        { label: t('store.nav.cart'), href: '#cart' }
      ]
    },
    {
      title: t('store.footer.about'),
      links: [
        { label: t('store.footer.ourStory'), href: '#story' },
        { label: t('store.footer.meetArtisans'), href: '#artisans' },
        { label: t('store.footer.ourImpact'), href: '#impact' }
      ]
    },
    {
      title: t('store.footer.support'),
      links: [
        { label: t('store.footer.faqs'), href: '/faq' },
        { label: t('store.footer.shipping'), href: '/shipping-returns' },
        { label: t('store.footer.contact'), href: '/contact-support' }
      ]
    },
    {
      title: t('store.footer.trust'),
      links: [
        { label: t('store.footer.linkedNGO'), href: '/' },
        { label: t('store.footer.policies'), href: '#policies' }
      ]
    }
  ];

  return (
    <footer className="bg-[#F0EDE9] dark:bg-[#1A1A1A] border-t border-[#E5E5E5] dark:border-[#3A3A3A] py-12 px-4">
      <div className="max-w-[1400px] mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-[14px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-3 font-['Playfair_Display',serif]">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] hover:text-[#7A4A2E] dark:hover:text-[#4F7C6A] transition-colors font-['Inter',sans-serif]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#E5E5E5] dark:border-[#3A3A3A]">
          <p className="text-[12px] text-center text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
            {t('store.footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
