
import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Handle URL parameters for policy tabs
  useEffect(() => {
    if (location.pathname === '/politicas') {
      const searchParams = new URLSearchParams(location.search);
      const tab = searchParams.get('tab');
      
      // If no tab is specified in the URL, set a default
      if (!tab) {
        searchParams.set('tab', 'delivery');
        navigate({ pathname: '/politicas', search: searchParams.toString() }, { replace: true });
      }
    }
  }, [location, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
