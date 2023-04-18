import React, {useState, useEffect} from 'react';
import Hero from '../components/Hero';
import HomeServices from '../components/HomeServices';
import HomeAboutUs from '../components/HomeAboutUs';

import '../styles/home.css';

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Hero/>
            {/*<HomeAboutUs />*/}
            <HomeServices/>
        </>
    );
}
