import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Store, CreditCard, Truck, FileText, RefreshCw, Bell, Shield, Save } from 'lucide-react';

export default function AdminSettings() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const [activeSection, setActiveSection] = useState('store');

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || !user?.isAdmin)) {
      window.location.href = '/login';
    }
  }, [isAuthenticated, user, isLoading]);

  const sections = [
    { id: 'store', label: 'Store Settings', icon: Store },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'shipping', label: 'Shipping', icon: Truck },
    { id: 'tax', label: 'Tax & GST', icon: FileText },
    { id: 'returns', label: 'Returns', icon: RefreshCw },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield }
  ];

  const [storeSettings, setStoreSettings] = useState({
    storeName: 'Lakhil Raj Handmade Store',
    supportEmail: 'support@lakhilraj.org',
    supportPhone: '+91 98XXXXXXXX',
    currency: 'INR',
    timezone: 'Asia/Kolkata'
  });

  const [paymentSettings, setPaymentSettings] = useState({
    enableUPI: true,
    enableCards: true,
    enableCOD: false,
    publicKey: '••••••••••••••••',
    secretKey: '••••••••••••••••'
  });

  const [shippingSettings, setShippingSettings] = useState({
    freeShippingThreshold: 500,
    defaultShippingCharge: 40
  });

  const [taxSettings, setTaxSettings] = useState({
    gstin: '22AAAAA0000A1Z5',
    defaultTaxRate: 18,
    invoicePrefix: 'INV'
  });

  const [returnsSettings, setReturnsSettings] = useState({
    enableReturns: true,
    returnWindow: 7,
    refundMethod: 'original'
  });

  const [notificationSettings, setNotificationSettings] = useState({
    lowStockAlerts: true,
    newOrderAlerts: true,
    refundAlerts: true,
    deliveryMethod: 'email'
  });

  const [securitySettings, setSecuritySettings] = useState({
    force2FA: true,
    sessionTimeout: 30,
    ipAllowlist: ''
  });

  const handleSave = (section: string) => {
    alert(`${section} settings saved successfully!`);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0F0F0F]">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-white dark:bg-[#1A1A1A] border-b border-[#E5E7EB] dark:border-[#374151]">
        <div className="flex items-center justify-between px-4 md:px-6 py-4">
          <div className="flex items-center gap-4">
            <a href="/admin" className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#1E7A6E]">
              ← Dashboard
            </a>
            <h1 className="text-[20px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF]">
              Settings
            </h1>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-[#1A1A1A] border-r border-[#E5E7EB] dark:border-[#374151] min-h-screen sticky top-[57px]">
          <nav className="p-4 space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${
                  activeSection === section.id
                    ? 'bg-[#1E7A6E] text-white'
                    : 'text-[#1F1F1F] dark:text-[#FFFFFF] hover:bg-[#F9FAFB] dark:hover:bg-[#2A2A2A]'
                }`}
              >
                <section.icon className="w-4 h-4" />
                {section.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Store Settings */}
          {activeSection === 'store' && (
            <div className="max-w-[800px]">
              <h2 className="text-[24px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF] mb-6">
                Store Settings
              </h2>
              <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E7EB] dark:border-[#374151] space-y-5">
                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF] mb-2 block">
                    Store Name
                  </label>
                  <input
                    type="text"
                    value={storeSettings.storeName}
                    onChange={(e) => setStoreSettings({ ...storeSettings, storeName: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[14px]"
                  />
                </div>

                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF] mb-2 block">
                    Support Email
                  </label>
                  <input
                    type="email"
                    value={storeSettings.supportEmail}
                    onChange={(e) => setStoreSettings({ ...storeSettings, supportEmail: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[14px]"
                  />
                </div>

                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF] mb-2 block">
                    Support Phone
                  </label>
                  <input
                    type="tel"
                    value={storeSettings.supportPhone}
                    onChange={(e) => setStoreSettings({ ...storeSettings, supportPhone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[14px]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF] mb-2 block">
                      Currency
                    </label>
                    <select
                      value={storeSettings.currency}
                      onChange={(e) => setStoreSettings({ ...storeSettings, currency: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[14px]"
                    >
                      <option value="INR">INR (₹)</option>
                      <option value="USD">USD ($)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF] mb-2 block">
                      Timezone
                    </label>
                    <select
                      value={storeSettings.timezone}
                      onChange={(e) => setStoreSettings({ ...storeSettings, timezone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[14px]"
                    >
                      <option value="Asia/Kolkata">Asia/Kolkata</option>
                      <option value="America/New_York">America/New_York</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={() => handleSave('Store')}
                  className="flex items-center gap-2 px-6 py-3 bg-[#1E7A6E] text-white rounded-lg font-semibold text-[15px] hover:bg-[#176559]"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Payment Settings */}
          {activeSection === 'payments' && (
            <div className="max-w-[800px]">
              <h2 className="text-[24px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF] mb-6">
                Payment Settings
              </h2>
              <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E7EB] dark:border-[#374151] space-y-5">
                <div className="space-y-3">
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={paymentSettings.enableUPI}
                      onChange={(e) => setPaymentSettings({ ...paymentSettings, enableUPI: e.target.checked })}
                      className="rounded"
                    />
                    <span className="text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF]">Enable UPI</span>
                  </label>

                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={paymentSettings.enableCards}
                      onChange={(e) => setPaymentSettings({ ...paymentSettings, enableCards: e.target.checked })}
                      className="rounded"
                    />
                    <span className="text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF]">Enable Cards</span>
                  </label>

                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={paymentSettings.enableCOD}
                      onChange={(e) => setPaymentSettings({ ...paymentSettings, enableCOD: e.target.checked })}
                      className="rounded"
                    />
                    <span className="text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF]">Enable COD</span>
                  </label>
                </div>

                <div className="pt-4 border-t border-[#E5E7EB] dark:border-[#374151]">
                  <p className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF] mb-4">Gateway Keys (Masked)</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] mb-2 block">Public Key</label>
                      <input
                        type="password"
                        value={paymentSettings.publicKey}
                        disabled
                        className="w-full px-4 py-3 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[14px]"
                      />
                    </div>

                    <div>
                      <label className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] mb-2 block">Secret Key</label>
                      <input
                        type="password"
                        value={paymentSettings.secretKey}
                        disabled
                        className="w-full px-4 py-3 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[14px]"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleSave('Payment')}
                  className="flex items-center gap-2 px-6 py-3 bg-[#1E7A6E] text-white rounded-lg font-semibold text-[15px] hover:bg-[#176559]"
                >
                  <Save className="w-4 h-4" />
                  Update Payment Settings
                </button>
              </div>
            </div>
          )}

          {/* Shipping Settings */}
          {activeSection === 'shipping' && (
            <div className="max-w-[800px]">
              <h2 className="text-[24px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF] mb-6">
                Shipping Settings
              </h2>
              <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E7EB] dark:border-[#374151] space-y-5">
                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF] mb-2 block">
                    Free Shipping Threshold (₹)
                  </label>
                  <input
                    type="number"
                    value={shippingSettings.freeShippingThreshold}
                    onChange={(e) => setShippingSettings({ ...shippingSettings, freeShippingThreshold: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[14px]"
                  />
                </div>

                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF] mb-2 block">
                    Default Shipping Charge (₹)
                  </label>
                  <input
                    type="number"
                    value={shippingSettings.defaultShippingCharge}
                    onChange={(e) => setShippingSettings({ ...shippingSettings, defaultShippingCharge: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[14px]"
                  />
                </div>

                <button
                  onClick={() => handleSave('Shipping')}
                  className="flex items-center gap-2 px-6 py-3 bg-[#1E7A6E] text-white rounded-lg font-semibold text-[15px] hover:bg-[#176559]"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Tax & GST */}
          {activeSection === 'tax' && (
            <div className="max-w-[800px]">
              <h2 className="text-[24px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF] mb-6">
                Tax & GST Settings
              </h2>
              <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E7EB] dark:border-[#374151] space-y-5">
                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF] mb-2 block">
                    GSTIN
                  </label>
                  <input
                    type="text"
                    value={taxSettings.gstin}
                    onChange={(e) => setTaxSettings({ ...taxSettings, gstin: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[14px]"
                  />
                </div>

                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF] mb-2 block">
                    Default Tax Rate (%)
                  </label>
                  <input
                    type="number"
                    value={taxSettings.defaultTaxRate}
                    onChange={(e) => setTaxSettings({ ...taxSettings, defaultTaxRate: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[14px]"
                  />
                </div>

                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF] mb-2 block">
                    Invoice Prefix
                  </label>
                  <input
                    type="text"
                    value={taxSettings.invoicePrefix}
                    onChange={(e) => setTaxSettings({ ...taxSettings, invoicePrefix: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[14px]"
                  />
                </div>

                <button
                  onClick={() => handleSave('Tax')}
                  className="flex items-center gap-2 px-6 py-3 bg-[#1E7A6E] text-white rounded-lg font-semibold text-[15px] hover:bg-[#176559]"
                >
                  <Save className="w-4 h-4" />
                  Save Tax Settings
                </button>
              </div>
            </div>
          )}

          {/* Returns */}
          {activeSection === 'returns' && (
            <div className="max-w-[800px]">
              <h2 className="text-[24px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF] mb-6">
                Returns Policy
              </h2>
              <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E7EB] dark:border-[#374151] space-y-5">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={returnsSettings.enableReturns}
                    onChange={(e) => setReturnsSettings({ ...returnsSettings, enableReturns: e.target.checked })}
                    className="rounded"
                  />
                  <span className="text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF]">Enable Returns</span>
                </label>

                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF] mb-2 block">
                    Return Window (Days)
                  </label>
                  <input
                    type="number"
                    value={returnsSettings.returnWindow}
                    onChange={(e) => setReturnsSettings({ ...returnsSettings, returnWindow: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[14px]"
                  />
                </div>

                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF] mb-2 block">
                    Refund Method
                  </label>
                  <select
                    value={returnsSettings.refundMethod}
                    onChange={(e) => setReturnsSettings({ ...returnsSettings, refundMethod: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[14px]"
                  >
                    <option value="original">Original Payment Method</option>
                    <option value="store_credit">Store Credit</option>
                  </select>
                </div>

                <button
                  onClick={() => handleSave('Returns')}
                  className="flex items-center gap-2 px-6 py-3 bg-[#1E7A6E] text-white rounded-lg font-semibold text-[15px] hover:bg-[#176559]"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Notifications */}
          {activeSection === 'notifications' && (
            <div className="max-w-[800px]">
              <h2 className="text-[24px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF] mb-6">
                Notification Settings
              </h2>
              <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E7EB] dark:border-[#374151] space-y-5">
                <div className="space-y-3">
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={notificationSettings.lowStockAlerts}
                      onChange={(e) => setNotificationSettings({ ...notificationSettings, lowStockAlerts: e.target.checked })}
                      className="rounded"
                    />
                    <span className="text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF]">Low Stock Alerts</span>
                  </label>

                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={notificationSettings.newOrderAlerts}
                      onChange={(e) => setNotificationSettings({ ...notificationSettings, newOrderAlerts: e.target.checked })}
                      className="rounded"
                    />
                    <span className="text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF]">New Order Alerts</span>
                  </label>

                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={notificationSettings.refundAlerts}
                      onChange={(e) => setNotificationSettings({ ...notificationSettings, refundAlerts: e.target.checked })}
                      className="rounded"
                    />
                    <span className="text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF]">Refund Alerts</span>
                  </label>
                </div>

                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF] mb-2 block">
                    Delivery Method
                  </label>
                  <select
                    value={notificationSettings.deliveryMethod}
                    onChange={(e) => setNotificationSettings({ ...notificationSettings, deliveryMethod: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[14px]"
                  >
                    <option value="email">Email</option>
                    <option value="dashboard">Dashboard Only</option>
                    <option value="slack">Slack (Optional)</option>
                  </select>
                </div>

                <button
                  onClick={() => handleSave('Notifications')}
                  className="flex items-center gap-2 px-6 py-3 bg-[#1E7A6E] text-white rounded-lg font-semibold text-[15px] hover:bg-[#176559]"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Security */}
          {activeSection === 'security' && (
            <div className="max-w-[800px]">
              <h2 className="text-[24px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF] mb-6">
                Security Settings
              </h2>
              <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E7EB] dark:border-[#374151] space-y-5">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={securitySettings.force2FA}
                    onChange={(e) => setSecuritySettings({ ...securitySettings, force2FA: e.target.checked })}
                    className="rounded"
                  />
                  <span className="text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF]">Force 2FA for Admin Users</span>
                </label>

                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF] mb-2 block">
                    Session Timeout (Minutes)
                  </label>
                  <input
                    type="number"
                    value={securitySettings.sessionTimeout}
                    onChange={(e) => setSecuritySettings({ ...securitySettings, sessionTimeout: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[14px]"
                  />
                </div>

                <div>
                  <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF] mb-2 block">
                    IP Allowlist (Optional)
                  </label>
                  <textarea
                    value={securitySettings.ipAllowlist}
                    onChange={(e) => setSecuritySettings({ ...securitySettings, ipAllowlist: e.target.value })}
                    placeholder="Enter IPs, one per line"
                    rows={4}
                    className="w-full px-4 py-3 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg text-[14px]"
                  />
                </div>

                <button
                  onClick={() => handleSave('Security')}
                  className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold text-[15px] hover:bg-red-700"
                >
                  <Shield className="w-4 h-4" />
                  Update Security
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
