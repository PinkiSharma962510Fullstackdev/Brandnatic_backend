import { useState, useEffect } from "react";

function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setShow(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShow(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[99999] bg-black text-white p-4 rounded-xl shadow-xl flex gap-4 items-center">
      <p className="text-sm">
        We use cookies to improve your experience.
      </p>

      <button
        onClick={acceptCookies}
        className="bg-cyan-500 px-4 py-2 rounded text-black font-semibold"
      >
        Accept
      </button>

      <button
        onClick={rejectCookies}
        className="border px-4 py-2 rounded"
      >
        Reject
      </button>
    </div>
  );
}

export default CookieConsent;
