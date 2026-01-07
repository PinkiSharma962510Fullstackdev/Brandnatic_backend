import React from "react";
import { Helmet } from "react-helmet-async";

import IntroBrandnatic from "../portfolio/IntroBrandnatic";
import ServicesPreview from "../portfolio/ServicesPreview";
import FeaturedWork from "../portfolio/FeaturedWork";
import Process from "../portfolio/Process";
import WhyBrandnatic from "../portfolio/WhyBrandnatic";
import CTASection from "../portfolio/CTASection";
import Hero_p from "../portfolio/Hero_p";

const Portfolio = () => {
  return (
    <>
      {/* ================== SEO START ================== */}
      <Helmet>
        <title>
          Brandnatic Portfolio | AI-Powered Digital Marketing & Brand Growth
        </title>

        <meta
          name="description"
          content="Explore Brandnatic’s portfolio showcasing AI-powered digital marketing, SEO, performance marketing, branding and high-conversion web experiences built for scalable brand growth."
        />

        <meta
          name="keywords"
          content="Brandnatic portfolio, digital marketing portfolio, AI marketing agency work, SEO projects, performance marketing agency, creative digital agency"
        />

        <link
          rel="canonical"
          href="https://brandnatic.com/portfolio"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Brandnatic Portfolio | AI-Powered Digital Marketing & Brand Growth"
        />
        <meta
          property="og:description"
          content="Discover AI-driven marketing, SEO, branding and performance campaigns that scale modern brands."
        />
        <meta
          property="og:url"
          content="https://brandnatic.com/portfolio"
        />
        <meta
          property="og:image"
          content="https://brandnatic.com/images/portfolio-og.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Brandnatic Portfolio | Digital Marketing & Growth Projects"
        />
        <meta
          name="twitter:description"
          content="AI-powered marketing, branding and performance growth projects by Brandnatic."
        />
        <meta
          name="twitter:image"
          content="https://brandnatic.com/images/portfolio-og.jpg"
        />

        {/* Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "Brandnatic Portfolio",
            "description": "AI-powered digital marketing, SEO, branding and performance marketing projects by Brandnatic.",
            "creator": {
              "@type": "Organization",
              "name": "Brandnatic",
              "url": "https://brandnatic.com"
            }
          }
          `}
        </script>
      </Helmet>
      {/* ================== SEO END ================== */}

      {/* SEO H1 (hidden but critical) */}
      <h1 className="sr-only">
        Brandnatic Portfolio – AI-Powered Digital Marketing & Brand Growth
      </h1>

      {/* PAGE CONTENT */}
      <Hero_p />
      <IntroBrandnatic />
      <ServicesPreview />
      <FeaturedWork />
      <Process />
      <WhyBrandnatic />
      <CTASection />
    </>
  );
};

export default Portfolio;
