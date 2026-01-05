import React from 'react'
// import Hero from '../componants/Hero'
// import IntroBrandnatic from '../componants/IntroBrandnatic'
// import ServicesPreview from '../componants/ServicesPreview'
// import FeaturedWork from '../componants/FeaturedWork'
// import Process from '../componants/Process'
// import WhyBrandnatic from '../componants/WhyBrandnatic'
// import CTASection from '../componants/CTASection'

import IntroBrandnatic from '../portfolio/IntroBrandnatic'
import ServicesPreview from '../portfolio/ServicesPreview'
import FeaturedWork from '../portfolio/FeaturedWork'
import Process from '../portfolio/Process'
import WhyBrandnatic from '../portfolio/WhyBrandnatic'
import CTASection from '../portfolio/CTASection'
import Hero_p from '../portfolio/Hero_p'

const Portfolio = () => {
    return (
        <div>
            <Hero_p></Hero_p>
            <IntroBrandnatic></IntroBrandnatic>
            <ServicesPreview></ServicesPreview>
            <FeaturedWork></FeaturedWork>
            <Process></Process>
            <WhyBrandnatic></WhyBrandnatic>
            <CTASection></CTASection>
        </div>
    )
}

export default Portfolio;
