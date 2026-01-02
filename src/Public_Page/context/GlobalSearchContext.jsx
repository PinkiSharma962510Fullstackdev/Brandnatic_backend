import { createContext, useContext, useEffect, useState } from "react";
import api from "../utils/api";

const GlobalSearchContext = createContext();

export function GlobalSearchProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSearchData() {
      try {
        /* ================= BLOGS ================= */
        const blogRes = await api.get("/blogs/public");

        const blogItems = blogRes.data.map((b) => ({
          id: b._id,
          title: b.title ?? "",
          content: b.contentHTML
            ? b.contentHTML.replace(/<[^>]*>/g, "").slice(0, 250)
            : "",
          slug: `/blogs/${b.slug}`,
          type: "Blog",
          priority: 3, // 🔥 relevance
        }));

        /* ================= SERVICES ================= */
        const serviceItems = [
          {
            id: "ai-chatbot",
            title: "AI Chatbot Development",
            content:
              "AI chatbot development services for automation and customer support",
            slug: "/ai-chatbot-development",
            type: "Service",
            priority: 2,
          },
          {
            id: "software-dev",
            title: "Software Development",
            content:
              "Custom software development solutions for businesses",
            slug: "/software-development",
            type: "Service",
            priority: 2,
          },
          {
            id: "seo",
            title: "SEO & SMO Services",
            content:
              "Search engine optimization and social media marketing services",
            slug: "/seo-smo",
            type: "Service",
            priority: 2,
          },
          {
            id: "paid-ads",
            title: "Paid Ads",
            content:
              "Google Ads and Meta Ads performance marketing services",
            slug: "/paid-ads",
            type: "Service",
            priority: 2,
          },
          {
            id: "web-dev",
            title: "Website Design & Development",
            content:
              "Modern website design and development services",
            slug: "/website-design-development",
            type: "Service",
            priority: 2,
          },
        ];

        /* ================= STATIC PAGES ================= */
        const pageItems = [
          {
            id: "home",
            title: "Home",
            content:
              "Digital marketing agency, SEO, websites, branding",
            slug: "/",
            type: "Page",
            priority: 1,
          },
          {
            id: "who-we-are",
            title: "Who We Are",
            content:
              "About Brandnatic, our mission, vision and team",
            slug: "/who-we-are",
            type: "Page",
            priority: 1,
          },
          {
            id: "testimonials",
            title: "Testimonials",
            content:
              "Client reviews and success stories",
            slug: "/testimonials",
            type: "Page",
            priority: 1,
          },
        ];

        /* ================= MERGE + SORT ================= */
        const merged = [
          ...blogItems,
          ...serviceItems,
          ...pageItems,
        ].sort((a, b) => b.priority - a.priority);

        setData(merged);
      } catch (err) {
        console.error("Global search load failed", err);
      } finally {
        setLoading(false);
      }
    }

    loadSearchData();
  }, []);

  return (
    <GlobalSearchContext.Provider value={{ data, loading }}>
      {children}
    </GlobalSearchContext.Provider>
  );
}

export const useGlobalSearch = () => useContext(GlobalSearchContext);
