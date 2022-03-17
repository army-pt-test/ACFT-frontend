import React from 'react';
import './Home.css';

function Home(props) {
	return (
		<div>
			<h3>Quick Links</h3>
			<ul>
				<li>Create a New Scorecard</li>
				<li>Add a New Cadet</li>
				<li>Update a Test Score</li>
				<li>Send Scorecard as PDF</li>
			</ul>
		</div>
	);
}

export default Home;
