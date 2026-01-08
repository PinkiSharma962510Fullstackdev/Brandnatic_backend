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
    const cookieConsent = localStorage.getItem("cookieConsent");

    //  cookies accept/reject nahi hua → contact popup mat dikhao
    if (!cookieConsent || sessionShown) return;

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

      {/* COOKIE FIRST */}
      <CookieConsent />

      {/* CONTACT AFTER COOKIE */}
      <PopupModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}


export default PublicLayout;
