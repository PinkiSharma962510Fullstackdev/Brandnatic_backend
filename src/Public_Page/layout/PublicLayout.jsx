import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";


import PopupModal from "../popups/popupModal";
import CookieConsent from "../popups/CookieConsent";

function PublicLayout() {
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const sessionShown = sessionStorage.getItem("contactPopupShown");

    if (sessionShown) return;

    const timer = setTimeout(() => {
      setContactOpen(true);
      sessionStorage.setItem("contactPopupShown", "true");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

      {/* AUTO CONTACT POPUP */}
      <PopupModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      {/* COOKIE CONSENT */}
      <CookieConsent />
    </>
  );
}

export default PublicLayout;
