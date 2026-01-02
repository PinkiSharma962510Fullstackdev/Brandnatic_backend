// import { NavLink } from "react-router-dom";
// import {
//   LayoutDashboard,
//   FileText,
//   MessageSquare,
//   Users,
// } from "lucide-react";
// import PermissionGate from "./PermissionGate";

// function Sidebar() {
//   const linkClass = ({ isActive }) =>
//     `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300
//      ${
//        isActive
//          ? "bg-blue-600 text-white shadow-lg"
//          : "text-gray-300 hover:bg-zinc-800 hover:text-white"
//      }`;

//   const subLinkClass = ({ isActive }) =>
//     `flex items-center gap-3 px-8 py-2 rounded-lg text-sm transition-all
//      ${
//        isActive
//          ? "text-blue-400"
//          : "text-gray-400 hover:text-white"
//      }`;

//   return (
//     <aside className="w-64 h-full bg-zinc-900 ">
//       <div className="bg-zinc-950 rounded-xl p-4 shadow-xl h-full">
//         <h2 className="text-lg font-semibold text-white mb-6">
//           Admin Panel
//         </h2>

//         <nav className="space-y-2">
//           {/* DASHBOARD */}
//           <NavLink to="/admin" end className={linkClass}>
//             <LayoutDashboard size={18} />
//             Dashboard
//           </NavLink>

//           {/* BLOGS */}
//           <PermissionGate permission="blogs.create">
//             <NavLink to="/admin/blogs" className={linkClass}>
//               <FileText size={18} />
//               Blogs
//             </NavLink>
//           </PermissionGate>

//           {/* COMMENTS */}
//           <PermissionGate permission="comments.approve">
//             <div className="space-y-1">
//               <NavLink
//                 to="/admin/comments/pending"
//                 className={linkClass}
//               >
//                 <MessageSquare size={18} />
//                 Comments
//               </NavLink>

//               {/* SUB LINKS */}
//               <NavLink
//                 to="/admin/comments/pending"
//                 className={subLinkClass}
//               >
//                 • Pending
//               </NavLink>

//               <NavLink
//                 to="/admin/comments/spam"
//                 className={subLinkClass}
//               >
//                 • Spam
//               </NavLink>
//             </div>
//           </PermissionGate>

//           {/* USERS */}
//           <PermissionGate permission="users.manage">
//             <NavLink to="/admin/users" className={linkClass}>
//               <Users size={18} />
//               Users
//             </NavLink>
//           </PermissionGate>
//         </nav>
//       </div>
//     </aside>
//   );
// }

// export default Sidebar;





import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Users,
} from "lucide-react";
import PermissionGate from "./PermissionGate";

function Sidebar({ isOpen, onClose }) {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300
     ${
       isActive
         ? "bg-blue-600 text-white shadow-lg"
         : "text-gray-300 hover:bg-zinc-800 hover:text-white"
     }`;

  const subLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-8 py-2 rounded-lg text-sm transition-all
     ${
       isActive
         ? "text-blue-400"
         : "text-gray-400 hover:text-white"
     }`;

  return (
    <>
      {/* ✅ MOBILE OVERLAY */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
        />
      )}

      <aside
        className={`
          fixed md:static top-0 left-0 z-50
          w-64 h-full bg-zinc-900
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="bg-zinc-950 rounded-xl p-4 shadow-xl h-full">

          {/* ✅ MOBILE CLOSE BUTTON */}
          <div className="flex justify-between items-center mb-6 md:hidden">
            <h2 className="text-lg font-semibold text-white">
              Admin Panel
            </h2>

            <button
              onClick={onClose}
              className="text-white text-2xl font-bold"
            >
              ✕
            </button>
          </div>

          {/* DESKTOP TITLE */}
          <h2 className="hidden md:block text-lg font-semibold text-white mb-6">
            Admin Panel
          </h2>

          <nav className="space-y-2">
            <NavLink to="/admin" end className={linkClass}>
              <LayoutDashboard size={18} />
              Dashboard
            </NavLink>

            <PermissionGate permission="blogs.create">
              <NavLink to="/admin/blogs" className={linkClass}>
                <FileText size={18} />
                Blogs
              </NavLink>
            </PermissionGate>

            <PermissionGate permission="comments.approve">
              <div className="space-y-1">
                <NavLink
                  to="/admin/comments/pending"
                  className={linkClass}
                >
                  <MessageSquare size={18} />
                  Comments
                </NavLink>

                <NavLink
                  to="/admin/comments/pending"
                  className={subLinkClass}
                >
                  • Pending
                </NavLink>

                <NavLink
                  to="/admin/comments/spam"
                  className={subLinkClass}
                >
                  • Spam
                </NavLink>
              </div>
            </PermissionGate>

            <PermissionGate permission="users.manage">
              <NavLink to="/admin/users" className={linkClass}>
                <Users size={18} />
                Users
              </NavLink>
            </PermissionGate>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
