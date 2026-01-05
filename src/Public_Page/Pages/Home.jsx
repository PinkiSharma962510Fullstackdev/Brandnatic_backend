
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
