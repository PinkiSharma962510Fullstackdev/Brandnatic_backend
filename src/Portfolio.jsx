import React from 'react'
import Hero from '../componants/Hero'
import IntroBrandnatic from '../componants/IntroBrandnatic'
import ServicesPreview from '../componants/ServicesPreview'
import FeaturedWork from '../componants/FeaturedWork'
import Process from '../componants/Process'
import WhyBrandnatic from '../componants/WhyBrandnatic'
import CTASection from '../componants/CTASection'

const Portfolio = () => {
    return (
        <div>
            <Hero></Hero>
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