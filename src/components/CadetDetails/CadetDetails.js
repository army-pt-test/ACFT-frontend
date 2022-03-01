import React from 'react';
import './CadetDetails.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, ListGroup, Table, Button } from 'react-bootstrap';

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
		<div className='container'>
			<h1 className='row justify-content-center'>
				{details.lastname}, {details.firstname} {details.middleinitial}.
			</h1>

			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Age</th>
						<th>Gender</th>
						<th>Unit</th>
						<th>MOS</th>
						<th>Grade</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{details.age}</td>
						<td>{details.gender}</td>
						<td>{details.unit}</td>
						<td>{details.mos}</td>
						<td>{details.grade}</td>
					</tr>
				</tbody>
			</Table>
			<Button>Edit</Button>
			<br />
			<br />
			<h5>Body Composition Test</h5>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Date</th>
						<th>Height(in)</th>
						<th>Weight(lbs)</th>
						<th>Body Fat %</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{details.date}</td>
						<td>{details.heightininches}</td>
						<td>{details.weightinpounds}</td>
						<td>{details.bodyfatpercentage}</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
}

export default CadetDetails;
