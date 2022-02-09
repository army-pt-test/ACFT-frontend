import React from 'react';
import './AddCadet.css';
import { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

function AddCadet(props) {
	const [startDate, setStartDate] = useState(new Date());
	const navigate = useNavigate();
	const [newCadet, setNewCadet] = useState({
		lastname: '',
		firstname: '',
		middleinitial: '',
		gender: '',
		unit: '',
		birthday: Date(),
		mos: '',
		grade: '',
		age: '',
		height: '',
		weight: '',
		bodyfat: '',
	});

	const createNewCadet = () => {
		fetch('https://armypttest.herokuapp.com/api/cadet/', {
			method: 'POST',
			body: JSON.stringify(newCadet),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.then((res) => {
			return res.json();
		})
		.then((res) => {
			navigate('/cadetlist')
		})
	};

	const handleChange = (event) => {
		setNewCadet({ ...newCadet, [event.target.id]: event.target.value });
        console.log('You have selected' + newCadet)
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		createNewCadet();
	};

	return (
		<form className='form-wrapper' onSubmit={handleSubmit}>
			<label htmlFor='lastname'>
				Last Name:
				<input
					type='text'
					name='lastname'
					id='last-name'
					onChange={handleChange}
					className='form-input'
				/>
			</label>
			<label htmlFor='firstname'>
				First Name:
				<input
					type='text'
					name='firstname'
					id='first-name'
					onChange={handleChange}
					className='form-input'
				/>
			</label>
			<label htmlFor='middleinitial'>
				Middle Initial:
				<input
					type='text'
					name='middleinitial'
					id='middleinitial'
					onChange={handleChange}
					className='form-input'
				/>
			</label>
			<label htmlFor='gender'>
				Gender:
				<input
					type='type'
					name='gender'
					id='gender'
					onChange={handleChange}
					className='form-input'

				/>
			</label>
			<label htmlFor='unit'>
				Unit:
				<input
					type='text'
					name='unit'
					id='unit'
					onChange={handleChange}
					className='form-input'
				/>
			</label>
			<label>
				Birthday:
				<DatePicker
					selected={startDate}
					onChange={(date) => setStartDate(date)}
					className='form-input'
				/>
			</label>
			<label htmlFor='mos'>
				Mos:
				<input
					type='text'
					name='mos'
					id='mos'
					onChange={handleChange}
					className='form-input'
				/>
			</label>
			<label htmlFor='grade'>
				Grade:
				<input
					type='text'
					name='grade'
					id='grade'
					onChange={handleChange}
					className='form-input'
				/>
			</label>
			<label htmlFor='age'>
				Age:
				<input
					type='text'
					name='age'
					id='age'
					onChange={handleChange}
					className='form-input'
				/>
			</label>
			<label htmlFor='height'>
				Height (Inches):
				<input
					type='text'
					name='height'
					id='age'
					onChange={handleChange}
					className='form-input'
				/>
			</label>
			<label htmlFor='weight'>
				Weight (lbs):
				<input
					type='text'
					name='weight'
					id='weight'
					onChange={handleChange}
					className='form-input'
				/>
			</label>
			<label htmlFor='bodyfat'>
				Body Fat (Percentage)
				<input
					type='text'
					name='bodyfat'
					id='bodyfat'
					onChange={handleChange}
					className='form-input'
				/>
			</label>
			<input type='submit' value='Add Cadet' />
		</form>
	);
}

export default AddCadet;
