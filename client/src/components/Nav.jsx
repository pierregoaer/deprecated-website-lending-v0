import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/styles.css';
import '../styles/nav.css';

export default function Nav() {
	return (
		<header className="header--container">
			<div className="header--main">
				<Link to={'/'} className="header--logo-container">
					<img className="header--logo" src="/logo_main.png" alt="" />
				</Link>
				<ul className="header--main-navigation" data-visible="false">
					<li>
						<Link to={'/services'}>Services</Link>
					</li>
					<li>
						<Link to={'/a-propos'}>A propos</Link>
					</li>
					<li>
						<Link to={'/blog'}>Blog</Link>
					</li>
				</ul>
				<Link to={'/contact'} className="header--main-navigation-contact">
					Contact
				</Link>
			</div>
			<div className="header--mobile-nav-icon-container">
				<div className="mobile-nav-icon menu-top"></div>
				<div className="mobile-nav-icon menu-middle"></div>
				<div className="mobile-nav-icon menu-bottom"></div>
			</div>
		</header>
	);
}
