import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { useEffect, useState } from "react";



/* ===== CONTEXT ===== */
import { GlobalSearchProvider } from "./Public_Page/context/GlobalSearchContext";

/* ===== PUBLIC ===== */
import PublicLayout from "./Public_Page/layout/PublicLayout";
import Home from "./Public_Page/Pages/Home.jsx";
import Blogs from "./Public_Page/blogs/Blogs.jsx";
import BlogDetails from "./Public_Page/blogs/BlogDetails.jsx";

/* =====Services====*/
import AiChatbotService from "./Public_Page/Services_page/AiChatbotService.jsx";
import SoftwareDevelopmentService from "./Public_Page/Services_page/SoftwareDevelopmentService";
import Automation from "./Public_Page/Services_page/Automation";
import EcommerceSolution from "./Public_Page/Services_page/EcommerceSolution";
import SeoSmo from "./Public_Page/Services_page/SeoSmo";
import PaidAds from "./Public_Page/Services_page/PaidAds";
import SocialMediaMarketing from "./Public_Page/Services_page/SocialMediaMarketing";
import LeadGeneration from "./Public_Page/Services_page/LeadGeneration";
import WebsiteDesignDevelopment from "./Public_Page/Services_page/WebsiteDesignDevelopment";
import MobileAppDevelopment from "./Public_Page/Services_page/MobileAppDevelopment";

/* ================= COMPANY ================= */
import Testimonials from "./Public_Page/company/Testimonials.jsx";
import WhoWeAre from "./Public_Page/company/WhoWeAre";

/* ===== ADMIN ===== */
import AdminLayout from "./admin/layout/AdminLayout";
import ProtectedRoute from "./admin/components/ProtectedRoute";
import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";

/* ===== ADMIN MODULES ===== */
import BlogList from "./admin/Blogs/BlogList.jsx";
import CreateBlog from "./admin/Blogs/CreateBlog";
import EditBlog from "./admin/Blogs/EditBlog";
import UserList from "./admin/Users/UserList";
import EditUser from "./admin/Users/EditUser";
import CreateUser from "./admin/Users/CreateUser";
import Pending from "./admin/Comments/Pending";
import Approved from "./admin/Comments/Approved";
import Spam from "./admin/Comments/Spam";

/* ===== UI ===== */
import CustomCursor from "./Public_Page/components/CustomCursor.jsx";
import VerifyEmail from "./Public_Page/Pages/VerifyEmail.jsx";
import Portfolio from "./Public_Page/Pages/Portfolio.jsx";
import ScrollToTop from "./Public_Page/ScrollToTop.jsx";
import RedirectOldBlog from "./RedirectOldBlog.jsx";



function App() {


  return (
    <>
    
    <BrowserRouter>
   
    <ScrollToTop />

      {/*  GLOBAL UI COMPONENT */}
      <CustomCursor />

      <Routes>
        
        {/* ================= PUBLIC WEBSITE ================= */}
        <Route
          element={
            <GlobalSearchProvider>
              <PublicLayout />
            </GlobalSearchProvider>
          }
        >

          
         
          <Route path="/blogs/:slug" element={<BlogDetails />} />
          
          {/* UNIVERSAL OLD WP BLOG REDIRECT */}
          <Route path="/:slug" element={<RedirectOldBlog />} />

          <Route path="/blogs" element={<Blogs />} />
          <Route path="/verify-email/:token" element={<VerifyEmail />} />
          <Route path="/" element={<Home />} />
          


           {/* SERVICES */}
        <Route path="/ai-chatbot-development" element={<AiChatbotService />} />
        <Route path="/software-development" element={<SoftwareDevelopmentService />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/ecommerce-solutions" element={<EcommerceSolution />} />
        <Route path="/seo-smo" element={<SeoSmo />} />
        <Route path="/paid-ads" element={<PaidAds />} />
        <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
        <Route path="/lead-generation" element={<LeadGeneration />} />
        <Route path="/website-design-development" element={<WebsiteDesignDevelopment />} />
        <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
         {/* OLD WORDPRESS SERVICE REDIRECT */}
        <Route path="/service/:slug" element={<RedirectOldService />} />

         
       
        

        {/* COMPANY */}
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/testimonials" element={<Testimonials />} />
        </Route>

        <Route path="/portfolio" element={<Portfolio />} />


        {/* ================= ADMIN LOGIN ================= */}
        <Route path="/admin/login" element={<Login />} />

        {/* ================= ADMIN PROTECTED ================= */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />

          {/* Blogs */}
          <Route path="blogs" element={<BlogList />} />
          <Route path="blogs/create" element={<CreateBlog />} />
          <Route path="blogs/edit/:id" element={<EditBlog />} />

          {/* Users */}
          <Route path="users" element={<UserList />} />
          <Route path="users/create" element={<CreateUser />} />
          <Route path="users/edit/:id" element={<EditUser />} />

          {/* Comments */}
          <Route path="comments/pending" element={<Pending />} />
          <Route path="comments/approved" element={<Approved />} />
          <Route path="comments/spam" element={<Spam />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

