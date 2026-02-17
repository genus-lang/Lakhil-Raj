import { ThemeLanguageProvider } from './contexts/ThemeLanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import { StoreDataProvider } from './contexts/StoreDataContext';
import { Router } from './components/Router';
import Home from './pages/Home';
import WhatWeDo from './pages/WhatWeDo';
import About from './pages/About';
import VisionMission from './pages/VisionMission';
import OurStory from './pages/OurStory';
import Team from './pages/Team';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Registration from './pages/registration';
import Donate from './pages/Donate';
import StoreHome from './pages/StoreHome';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import ShippingReturns from './pages/ShippingReturns';
import ContactSupport from './pages/ContactSupport';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyAccount from './pages/MyAccount';
import Wishlist from './pages/Wishlist';
import TrackOrder from './pages/TrackOrder';
import Notifications from './pages/Notifications';
import BulkOrders from './pages/BulkOrders';
import AdminDashboard from './pages/AdminDashboard';
import AdminProducts from './pages/AdminProducts';
import AdminAddProduct from './pages/AdminAddProduct';
import AdminOrders from './pages/AdminOrders';
import AdminInventory from './pages/AdminInventory';
import AdminReports from './pages/AdminReports';
import AdminSettings from './pages/AdminSettings';
import HomeLoggedIn from './pages/HomeLoggedIn';

export default function App() {
  return (
    <ThemeLanguageProvider>
      <AuthProvider>
        <StoreDataProvider>
          <Router>
            {{
              '/': <Home />,
              '/what-we-do': <WhatWeDo />,
              '/about': <About />,
              '/mission-vision': <VisionMission />,
              '/our-story': <OurStory />,
              '/team': <Team />,
              '/partners': <Partners />,
              '/contact': <Contact />,
              '/faq': <FAQ />,
              '/registration': <Registration />,
              '/donate': <Donate />,
              '/store': <StoreHome />,
              '/shop': <Shop />,
              '/product': <ProductDetail />,
              '/cart': <Cart />,
              '/checkout': <Checkout />,
              '/order-confirmation': <OrderConfirmation />,
              '/shipping-returns': <ShippingReturns />,
              '/contact-support': <ContactSupport />,
              '/login': <Login />,
              '/signup': <Signup />,
              '/my-account': <MyAccount />,
              '/wishlist': <Wishlist />,
              '/track-order': <TrackOrder />,
              '/notifications': <Notifications />,
              '/bulk-orders': <BulkOrders />,
              '/home-logged-in': <HomeLoggedIn />,
              '/admin': <AdminDashboard />,
              '/admin/products': <AdminProducts />,
              '/admin/products/add': <AdminAddProduct />,
              '/admin/orders': <AdminOrders />,
              '/admin/inventory': <AdminInventory />,
              '/admin/reports': <AdminReports />,
              '/admin/settings': <AdminSettings />,
            }}
          </Router>
        </StoreDataProvider>
      </AuthProvider>
    </ThemeLanguageProvider>
  );
}
