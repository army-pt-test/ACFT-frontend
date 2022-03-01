import React from 'react';
import './CadetDetails.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CadetDetails(props) {
	const [details, setDetails] = useState(null);

	const { id } = useParams();

	async function getCadets() {
		try {
			const res = await fetch(
				`https://armypttest.herokuapp.com/api/cadet/${id}`
			);
			const data = await res.json();
			setDetails(data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getCadets();
		return setDetails(null);
	}, []);

	if (!details) {
		return <div>Cadet is loading ...</div>;
	}

	return (
		<div>
			<h1>
				{details.lastname} {details.firstname} {details.middleinitial}
			</h1>
		</div>
	);
}

export default CadetDetails;
