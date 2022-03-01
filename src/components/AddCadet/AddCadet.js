import React from 'react';
import './AddCadet.css';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';

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
		axios
			.post('https://armypttest.herokuapp.com/api/cadet', newCadet)
			.then((res) => {
				navigate('/cadetlist');
			});
	};

	const handleChange = (event) => {
		setNewCadet({ ...newCadet, [event.target.id]: event.target.value });
		console.log('You have selected' + newCadet);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		createNewCadet();
	};

	return (
		<form className='form-wrapper' onSubmit={handleSubmit}>
			<label htmlFor='lastname'>Last Name:</label>
			<input
				type='text'
				name='lastname'
				id='lastname'
				onChange={handleChange}
				className='form-input'
				value={newCadet.lastname}
			/>

			<label htmlFor='firstname'>First Name:</label>
			<input
				type='text'
				name='firstname'
				id='firstname'
				onChange={handleChange}
				className='form-input'
				value={newCadet.firstname}
			/>

			<label htmlFor='middleinitial'>Middle Initial:</label>
			<input
				type='text'
				name='middleinitial'
				id='middleinitial'
				onChange={handleChange}
				className='form-input'
				value={newCadet.middleinitial}
			/>

			<label htmlFor='gender'>Gender:</label>
			<input
				type='type'
				name='gender'
				id='gender'
				onChange={handleChange}
				className='form-input'
				value={newCadet.gender}
			/>

			<label htmlFor='unit'>Unit:</label>
			<input
				type='text'
				name='unit'
				id='unit'
				onChange={handleChange}
				className='form-input'
				value={newCadet.unit}
			/>

			<label>
				Birthday:
				<DatePicker
					selected={startDate}
					onChange={(date) => setStartDate(date)}
					className='form-input'
					value={newCadet.birthday}
				/>
			</label>
			<label htmlFor='mos'>Mos:</label>
			<input
				type='text'
				name='mos'
				id='mos'
				onChange={handleChange}
				className='form-input'
				value={newCadet.mos}
			/>

			<label htmlFor='grade'>
				Grade:
				<input
					type='text'
					name='grade'
					id='grade'
					onChange={handleChange}
					className='form-input'
					value={newCadet.grade}
				/>
			</label>
			<label htmlFor='age'>Age:</label>
			<input
				type='text'
				name='age'
				id='age'
				onChange={handleChange}
				className='form-input'
				value={newCadet.age}
			/>

			<label htmlFor='height'>Height (Inches):</label>
			<input
				type='text'
				name='height'
				id='height'
				onChange={handleChange}
				className='form-input'
				value={newCadet.height}
			/>

			<label htmlFor='weight'>Weight (lbs):</label>
			<input
				type='text'
				name='weight'
				id='weight'
				onChange={handleChange}
				className='form-input'
				value={newCadet.weight}
			/>

			<label htmlFor='bodyfat'>Body Fat (Percentage)</label>
			<input
				type='text'
				name='bodyfat'
				id='bodyfat'
				onChange={handleChange}
				className='form-input'
				value={newCadet.bodyfat}
			/>
			<button type='submit'>
				Add Cadet
			</button>
		</form>
	);
}

export default AddCadet;
