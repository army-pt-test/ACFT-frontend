import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
	return (
		<div className='navbar-wrapper'>
			<div className='navbar-title'>
				<Link to='/'>
					<h1>Army Combat Fitness Test</h1>
				</Link>
			</div>
			<nav className='main-nav'>
				<ul className='nav-ul'>
					<li className='li-link'>
						<Link to='/'>Home</Link>
					</li>
					<li className='li-link'>
						<Link to='/cadetlist'>Cadet List</Link>
					</li>
					<li className='li-link'>
						<Link to='/addcadet'>Add Cadet</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navigation;
