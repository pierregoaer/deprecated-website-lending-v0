import React, {useState, useEffect} from 'react';
import Hero from '../components/Hero';
import HomeServices from '../components/HomeServices';
import HomeAboutUs from '../components/HomeAboutUs';

import '../styles/home.css';

export default function Home() {

    return (
        <>
            <Hero/>
            {/*<HomeAboutUs />*/}
            <HomeServices/>
        </>
    );
}
