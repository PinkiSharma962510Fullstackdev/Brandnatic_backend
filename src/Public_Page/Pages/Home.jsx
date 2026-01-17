
import { Helmet } from "react-helmet-async";
import HomeBlogsSection from '../components/HomeBlogsSection'

import Hero from '../components/Hero.jsx'
import AboutStats from '../components/AboutStats'
import Service_Section from '../components/Services'
import ExploreOurPurpose from '../components/Purpose'
import CaseStudies from '../components/CaseStudies'
import RecentAwards from '../components/RecentAwards'
// import SectionWrapper from "../../components/SectionWrapper"
import FAQs from '../components/FAQs'
import SectionWrapper from '../components/SectionWrapper'
import FAQEnquiryForm from "../components/FAQEnquiryForm.jsx";



          

const Home = () => {
    return (
      <>
 
      

      <Helmet>
  {/* ✅ HOME PAGE TITLE */}
  <title>
    AI Digital Marketing Agency in Noida (Delhi NCR) | Brandnatic
  </title>

  {/* ✅ META DESCRIPTION */}
  <meta
    name="description"
    content="Brandnatic is an AI-powered digital marketing agency in Noida delivering SEO, PPC, social media marketing, automation, and web development focused on measurable ROI and long-term business growth."
  />

  {/* ✅ CANONICAL */}
  <link rel="canonical" href="https://brandnatic.com/" />

  {/* ✅ ROBOTS */}
  <meta name="robots" content="index, follow" />



  {/* ✅ FAQ SCHEMA (PERFECT HERE) */}
  <script type="application/ld+json">
    {JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does an AI-based lead and sales system mean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An AI-based lead and sales system goes beyond running ads. It evaluates buyer intent, budget range, location, and purchase timeline to ensure that only serious, sales-ready prospects remain in the funnel."
      }
    },
    {
      "@type": "Question",
      "name": "How is this different from a traditional digital marketing agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Traditional digital marketing agencies focus primarily on lead generation. This AI-driven system focuses on real site visits, bookings, and revenue by filtering out low-intent leads and prioritizing genuine buyers."
      }
    },
    {
      "@type": "Question",
      "name": "Does this system generate only leads or actual bookings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The goal is not limited to lead generation. The system is designed to move prospects from the first click to qualified site visits and real bookings."
      }
    },
    {
      "@type": "Question",
      "name": "Are these real buyers or just form submissions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Leads are intent-qualified. AI analyzes user behavior, engagement, and buying signals so sales teams interact only with genuine property buyers, not casual inquiries."
      }
    },
    {
      "@type": "Question",
      "name": "Who is this AI lead generation system best suited for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This system is ideal for real estate developers, builders, channel partners, and brokers who are launching new projects or selling ready-to-move inventory."
      }
    },
    {
      "@type": "Question",
      "name": "What role does AI play in real estate marketing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI improves real estate marketing by targeting the right buyers, filtering unqualified leads, automating follow-ups, and optimizing ads based on real conversions, resulting in better ROI and predictable growth."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle only ads or the entire sales pipeline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ads are only the starting point. The complete system includes landing pages, WhatsApp automation, CRM integration, lead nurturing, and conversion-focused performance tracking."
      }
    },
    {
      "@type": "Question",
      "name": "Can this reduce ad spend wastage and sales workload?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. By eliminating low-quality leads and automating follow-ups, sales teams focus only on high-intent buyers, saving time and improving cost efficiency per booking."
      }
    },
    {
      "@type": "Question",
      "name": "How soon can results be expected?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most real estate businesses begin noticing improvements in lead quality and buyer intent within two to four weeks of system launch."
      }
    },
    {
      "@type": "Question",
      "name": "Is the same strategy used for every real estate project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Each project has unique pricing, location advantages, and buyer psychology. Every strategy is fully customized rather than pre-built."
      }
    }
  ]
})}

  </script>
</Helmet>

        <div>           
           <Hero id="hero"></Hero> 
       

            <SectionWrapper id="aboutStats">
           <AboutStats ></AboutStats>
           </SectionWrapper>

            <SectionWrapper id="services">
           <Service_Section ></Service_Section>
            </SectionWrapper>

           <SectionWrapper id="purpose">
            <ExploreOurPurpose ></ExploreOurPurpose>
           </SectionWrapper>
           
           <SectionWrapper id="studies" padding="pt-10 pb-10">
           <CaseStudies id="case-studies"></CaseStudies>
           </SectionWrapper>

             <HomeBlogsSection></HomeBlogsSection>

            <SectionWrapper>
           <RecentAwards></RecentAwards>
           </SectionWrapper>

             <SectionWrapper>
           <FAQs></FAQs>
           </SectionWrapper>
           <FAQEnquiryForm></FAQEnquiryForm>
          
          
        </div>
        </>
    )
}

export default Home
