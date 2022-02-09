import React from 'react';
import './CadetList.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CadetList(props) {
	const [cadetList, setCadetList] = useState([]);

	const fetchCadet = () => {
		fetch('https://armypttest.herokuapp.com/api/cadet/')
			.then((res) => res.json())
			.then((res) => {
				setCadetList(res);
			});
	};

	useEffect(() => {
		fetchCadet();
	}, []);

	return (
		<div>
			<ul>
				{cadetList.map((cadets) => {
					return (
						<li>
							<Link to={`/cadetlist/${cadets.id}`}>
								<h1>{cadets.lastname}</h1>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default CadetList;
