import React, { useContext, useEffect } from 'react';
import { CadetContext } from '../../App';
import './CadetList.css';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

function CadetList(props) {
	const { cadetList, setCadetList } = useContext(CadetContext);

	const getCadets = async () => {
		try {
			const res = await fetch('https://armypttest.herokuapp.com/api/cadet/');
			const data = await res.json();
			if (res.status === 200) {
				setCadetList(data);
				console.log(data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getCadets();
	}, []);
	return (
		<div>
			{cadetList &&
				cadetList.map((cadet) => (
					<li>
						<Link to={`/cadetlist/${cadet.id}`}>
							<div className='mb-3 mt-5 '>
								<Container className='d-flex align-items-center justify-content-center'>
									{cadet.firstname} {cadet.lastname}
								</Container>
							</div>
						</Link>
					</li>
				))}
		</div>
	);
}

export default CadetList;
