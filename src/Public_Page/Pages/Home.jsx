
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
    )
}

export default Home
