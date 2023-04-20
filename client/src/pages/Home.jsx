import React, {useState, useEffect} from 'react';
import Hero from '../components/Hero';
import HomeAboutUs from '../components/HomeAboutUs';
import HomeServices from '../components/HomeServices';
import Testimonials from '../components/Testimonials';
import HomeRealizations from '../components/HomeRealizations.jsx';
import HomeFAQ from '../components/HomeFAQ';

import '../styles/home.css';

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Hero/>
            <HomeAboutUs/>
            <HomeServices/>
            <Testimonials/>
            <HomeFAQ/>
        </>
    );
}
