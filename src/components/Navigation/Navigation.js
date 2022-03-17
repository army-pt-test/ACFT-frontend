import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
	return (
		<div className='header-nav'>
			<nav className='nav-bar'>
				<Link to='/'>
					<h1 className='nav-title'>Army Combat Fitness Test</h1>
				</Link>

				<div className='main-nav'>
					<ul className='nav-ul'>
						<li className='nav-li'>
							<Link to='/'>Home</Link>
						</li>
						<li className='nav-li'>
							<Link to='/cadetlist'>Cadet List</Link>
						</li>
						<li className='nav-li'>
							<Link to='/addcadet'>Add Cadet</Link>
						</li>
						<li className='nav-li'>
							<Link to='/newscorecard'>New Scorecard</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navigation;
