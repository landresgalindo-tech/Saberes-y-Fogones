import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../ui/ScrollToTop';

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // Si no estamos en la página de inicio, bloqueamos la indexación
    if (location.pathname !== '/') {
      const meta = document.createElement('meta');
      meta.name = "robots";
      meta.content = "noindex";
      document.head.appendChild(meta);
      
      return () => {
        document.head.removeChild(meta);
      };
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
