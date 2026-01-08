import { useState, useEffect } from "react";

function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setShow(true);
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("analyticsCookies", "true");
    localStorage.setItem("marketingCookies", "true");
    setShow(false);
  };

  const rejectAll = () => {
    localStorage.setItem("cookieConsent", "rejected");
    localStorage.setItem("analyticsCookies", "false");
    localStorage.setItem("marketingCookies", "false");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100000]
      max-w-2xl w-[95%]
      bg-[#0b1220] border border-white/10
      text-white p-6 rounded-2xl shadow-2xl">

      <h4 className="text-lg font-semibold mb-2">
        Your privacy matters to us 🍪
      </h4>

      <p className="text-sm text-gray-400 leading-relaxed mb-4">
        Brandnatic uses cookies to improve website performance, understand user
        behavior, personalize content, and optimize marketing campaigns.
        You can accept or reject non-essential cookies at any time.
      </p>

      <ul className="text-xs text-gray-400 space-y-1 mb-5">
        <li>✔ Essential cookies (required for site functionality)</li>
        <li>✔ Analytics cookies (traffic & SEO insights)</li>
        <li>✔ Marketing cookies (ads & retargeting)</li>
      </ul>

      <div className="flex flex-wrap gap-3 justify-end">
        <button
          onClick={rejectAll}
          className="px-4 py-2 text-sm border border-white/20
          rounded-lg hover:bg-white/5 transition"
        >
          Reject
        </button>

        <button
          onClick={acceptAll}
          className="px-5 py-2 text-sm rounded-lg
          bg-cyan-500 text-black font-semibold
          hover:bg-cyan-400 transition"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}

export default CookieConsent;
