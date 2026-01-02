// import { logout } from "../utils/auth";
// import { useNavigate } from "react-router-dom";

// function Header() {
//   const navigate = useNavigate();
//   return (
//     <header className="flex justify-end p-4 border-b border-zinc-800">
//       <button
//         onClick={() => {
//           logout();
//           navigate("/admin/login");
//         }}
//         className="bg-red-600 px-4 py-2"
//       >
//         Logout
//       </button>
//     </header>
//   );
// }

// export default  Header;

import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";

function Header({ onMenuClick, isSidebarOpen, onCloseMenu }) {
  const navigate = useNavigate();

  return (
    <header
      className="
        flex items-center justify-between
        p-4 border-b border-zinc-800
        bg-black
        sticky top-0
        z-50
      "
    >
      {/* MOBILE MENU TOGGLE */}
      <button
  onClick={isSidebarOpen ? onCloseMenu : onMenuClick}
  className="md:hidden p-2"
  aria-label="Toggle Menu"
>
  {isSidebarOpen ? (
    /* ❌ CLOSE ICON */
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#FFFFFF"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ) : (
    /* ☰ MENU ICON */
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-7 h-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#FFFFFF"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  )}
</button>


      {/* spacer */}
      <div className="hidden md:block" />

      {/* LOGOUT */}
      <button
        onClick={() => {
          logout();
          navigate("/admin/login");
        }}
        className="bg-[#155DFC] px-4 py-2 rounded hover:bg-[#0c3792] transition"
      >
        Logout
      </button>
    </header>
  );
}

export default Header;

