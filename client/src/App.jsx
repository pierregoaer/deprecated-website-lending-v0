import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import CTAMain from './components/CTAMain';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs.jsx';

import './styles/styles.css';

function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route exact path={'/'} element={<Home />} />
				<Route path={'/services'} element={<Services />} />
				<Route path={'/contact'} element={<Contact />} />
				<Route path={'/blog'} element={<Blogs />} />
			</Routes>
			<CTAMain />
			<Footer />
		</>
	);
}

export default App;
