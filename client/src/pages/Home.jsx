import React, {useState, useEffect} from 'react';
import Hero from '../components/Hero';
import HomeServices from '../components/HomeServices';
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
            <HomeServices/>
            {/*<HomeRealizations />*/}
        </>
    );
}
