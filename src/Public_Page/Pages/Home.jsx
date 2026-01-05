
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


          

const Home = () => {
    return (
      <>
 
      

      {/*  HOME PAGE SEO */}
      <Helmet>
        {/* TITLE (Primary Ranking Factor) */}
        <title>
          Brandnatic | AI Digital Marketing Agency in Noida (Delhi NCR)
        </title>

        {/*  META DESCRIPTION (CTR Booster) */}
        <meta
          name="description"
          content="Brandnatic is an AI-powered digital marketing agency in Noida offering SEO, PPC, social media marketing, lead generation, automation, and web development to drive measurable ROI and business growth."
        />

        {/*  CANONICAL (Avoid Duplicate Issues) */}
        <link rel="canonical" href="https://brandnatic.com/" />

        {/*  OPEN GRAPH (Social Sharing) */}
        <meta property="og:title" content="Brandnatic | AI Digital Marketing Agency in Noida" />
        <meta
          property="og:description"
          content="ROI-driven AI-powered SEO, performance marketing, automation and web development solutions for startups and brands in Noida."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brandnatic.com/" />

        {/*  OPTIONAL BUT STRONG */}
        <meta name="robots" content="index, follow" />

        {/* Social Share Image */}
<meta property="og:image" content="https://brandnatic.com/og/og-image.jpeg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

{/* Brand Logo */}
<meta property="og:logo" content="https://brandnatic.com/og-image.jpeg" />


        {/* FAQ SCHEMA */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What makes Brandnatic different from other digital marketing agencies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Brandnatic stands out by combining AI-powered marketing, automation, and performance-driven strategies focused on measurable ROI rather than vanity metrics."
                }
              },
              {
                "@type": "Question",
                "name": "Do you work with startups or only established brands?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Brandnatic works with both startups and established brands, offering scalable digital marketing and development solutions tailored to different growth stages."
                }
              },
              {
                "@type": "Question",
                "name": "What is an AI-powered digital marketing agency?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "An AI-powered digital marketing agency uses artificial intelligence, data analytics, and automation to improve targeting, personalization, performance optimization, and decision-making."
                }
              },
              {
                "@type": "Question",
                "name": "How does Brandnatic use AI in digital marketing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Brandnatic uses AI for keyword research, audience targeting, campaign optimization, marketing automation, predictive analytics, and conversion optimization."
                }
              },
              {
                "@type": "Question",
                "name": "Can you handle both marketing and development?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Brandnatic offers both digital marketing and development services, including SEO, paid ads, automation, web development, and app development under one roof."
                }
              },
              {
                "@type": "Question",
                "name": "Is Brandnatic suitable for startups or only established businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Brandnatic is suitable for startups as well as established businesses, providing customized strategies that align with business goals, budgets, and growth plans."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer customized digital marketing strategies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Brandnatic creates fully customized digital marketing strategies based on business objectives, target audience, industry, and competitive analysis."
                }
              },
              {
                "@type": "Question",
                "name": "What industries do you serve from your Noida office?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Brandnatic serves multiple industries including e-commerce, real estate, startups, SaaS, healthcare, FMCG, local businesses, and enterprises from its Noida office."
                }
              },
              {
                "@type": "Question",
                "name": "What services does Brandnatic provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Brandnatic provides SEO, paid advertising, social media marketing, lead generation, marketing automation, CRM integration, web development, app development, and AI-powered growth solutions."
                }
              },
              {
                "@type": "Question",
                "name": "How is Brandnatic different from other digital marketing agencies in Noida?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Brandnatic focuses on AI-driven strategies, data-backed decisions, and ROI-centric growth, making it different from traditional digital marketing agencies in Noida."
                }
              },
              {
                "@type": "Question",
                "name": "Is AI marketing expensive for small businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI marketing is scalable and can be cost-effective for small businesses when implemented strategically to improve efficiency, targeting, and conversions."
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
           
           <SectionWrapper id="studies" padding="pt-32 pb-40">
           <CaseStudies id="case-studies"></CaseStudies>
           </SectionWrapper>

             <HomeBlogsSection></HomeBlogsSection>

            <SectionWrapper>
           <RecentAwards></RecentAwards>
           </SectionWrapper>

             <SectionWrapper>
           <FAQs></FAQs>
           </SectionWrapper>
          
          
        </div>
        </>
    )
}

export default Home
