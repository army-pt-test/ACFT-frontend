import React, { useState, useNavigate } from 'react';
import { TextField, Typography, Container } from '@mui/material';
import './ScoreCardForm.css';

function ScoreCardForm(props) {
	const defaultData = {
		date: '',
		height: '',
		weight: '',
		weightpass: Boolean,
		bodyfatpct: '',
		bodyfatpctpass: Boolean,
	};

	const [formData, setFormData] = useState(defaultData);
	// const navigate = useNavigate();

	// // Post request to add new cadet to API
	function handleSubmit(event) {
		// 	event.preventDefault();
		// 	console.log(formData);
		// 	axios
		// 		.post(``, formData)
		// 		.then((res) => {
		// 			console.log(res);
		// 			navigate('/cadetlist');
		// 		});
		// 	console.log(formData);
	}

	return (
		<main className='form-container'>
			<h2 className='form-h2'>ACFT</h2>
			<form className='form' onSubmit={handleSubmit}>
				<ul className='form-ul'>
					<li className='form-li'>
						<label className='form-label' htmlFor='date'>
							Date:{' '}
						</label>
						<TextField
							type='date'
							id='date'
							name='date'
							value={formData.date}
							onChange={(event) =>
								setFormData({ ...formData, date: event.target.value })
							}
						/>
					</li>
					<li className='form-li'>
						<label className='form-label' htmlFor='height'>
							Height:{' '}
						</label>
						<input
							className='form-input'
							id='height'
							type='text'
							value={formData.height}
							onChange={(event) =>
								setFormData({ ...formData, height: event.target.value })
							}></input>
						<span>inches</span>
					</li>
					<li className='form-li'>
						<label className='form-label' htmlFor='weight'>
							Weight:{' '}
						</label>
						<input
							className='form-input'
							id='weight'
							type='text'
							value={formData.weight}
							onChange={(event) =>
								setFormData({ ...formData, weight: event.target.value })
							}></input>
						<span>pounds</span>
					</li>
					<li className='form-li'>
						<label
							className='form-label form-radio-label'
							htmlFor='weightpassgo'>
							Go{' '}
						</label>
						<input
							className='form-input'
							id='weightpassgo'
							type='radio'
							name='weightpassgo'
							value='true'
							checked={formData.weightpass === 'true'}
							onChange={(event) =>
								setFormData({ ...formData, weightpass: event.target.value })
							}></input>
						<label className='form-label form-radio-label' htmlFor='nogo'>
							{' '}
							No Go{' '}
						</label>
						<input
							className='form-input'
							id='weightpassnogo'
							type='radio'
							name='weightpassnogo'
							value='false'
							checked={formData.weightpass === 'false'}
							onChange={(event) =>
								setFormData({ ...formData, weightpass: event.target.value })
							}></input>
					</li>
					<li className='form-li'>
						<label className='form-label' htmlFor='bodyfatpct'>
							Body Fat Percentage:{' '}
						</label>
						<input
							className='form-input'
							id='bodyfatpct'
							type='text'
							value={formData.bodyfatpct}
							onChange={(event) =>
								setFormData({ ...formData, bodyfatpct: event.target.value })
							}></input>
						<span>% (round to one decimal)</span>
					</li>
					<li className='form-li'>
						<label
							className='form-label form-radio-label'
							htmlFor='bodyfatpctgo'>
							Go{' '}
						</label>
						<input
							className='form-input'
							id='bodyfatpctgo'
							type='radio'
							name='bodyfatpctgo'
							value='true'
							checked={formData.bodyfatpctpass === 'true'}
							onChange={(event) =>
								setFormData({ ...formData, bodyfatpctpass: event.target.value })
							}></input>
						<label
							className='form-label form-radio-label'
							htmlFor='bodyfatpctnogo'>
							{' '}
							No Go{' '}
						</label>
						<input
							className='form-input'
							id='bodyfatpctnogo'
							type='radio'
							name='bodyfatpctnogo'
							value='false'
							checked={formData.bodyfatpctpass === 'false'}
							onChange={(event) =>
								setFormData({ ...formData, bodyfatpctpass: event.target.value })
							}></input>
					</li>
					{/* body composition above */}
					{/* BCT will be recorded at least 7 days before or after the ACFT */}

					<li className='form-li testsections'>
						<label className='form-label' htmlFor='deadlift'>
							3 Repetition Maximum Deadlift: weight lifted (lbs){' '}
						</label>
						<br />
						<span>1st Attempt:</span>
						<select
							className='form-input'
							placeholder='1st Attempt'
							id='firstdeadlift'
							type='text'
							value={formData.firstdeadlift}
							onChange={(event) =>
								setFormData({ ...formData, firstdeadlift: event.target.value })
							}>
							<option value='340'>340</option>
							<option value='330'>330</option>
							<option value='320'>320</option>
							<option value='310'>310</option>
							<option value='300'>300</option>
							<option value='290'>290</option>
							<option value='280'>280</option>
							<option value='270'>270</option>
							<option value='260'>260</option>
							<option value='250'>250</option>
							<option value='240'>240</option>
							<option value='230'>230</option>
							<option value='220'>220</option>
							<option value='210'>210</option>
							<option value='200'>200</option>
							<option value='190'>190</option>
							<option value='180'>180</option>
							<option value='170'>170</option>
							<option value='160'>160</option>
							<option value='150'>150</option>
							<option value='140' selected={true}>
								140
							</option>
							<option value='130'>130</option>
							<option value='120'>120</option>
							<option value='110'>110</option>
							<option value='100'>100</option>
							<option value='90'>90</option>
							<option value='80'>80</option>
						</select>
						<span>pounds</span>
						<br />
						<span>2nd Attempt:</span>
						<select
							className='form-input'
							placeholder='2nd Attempt'
							id='seconddeadlift'
							type='text'
							value={formData.seconddeadlift}
							onChange={(event) =>
								setFormData({ ...formData, seconddeadlift: event.target.value })
							}>
							<option value='340'>340</option>
							<option value='330'>330</option>
							<option value='320'>320</option>
							<option value='310'>310</option>
							<option value='300'>300</option>
							<option value='290'>290</option>
							<option value='280'>280</option>
							<option value='270'>270</option>
							<option value='260'>260</option>
							<option value='250'>250</option>
							<option value='240'>240</option>
							<option value='230'>230</option>
							<option value='220'>220</option>
							<option value='210'>210</option>
							<option value='200'>200</option>
							<option value='190'>190</option>
							<option value='180'>180</option>
							<option value='170'>170</option>
							<option value='160'>160</option>
							<option value='150'>150</option>
							<option value='140' selected={true}>
								140
							</option>
							<option value='130'>130</option>
							<option value='120'>120</option>
							<option value='110'>110</option>
							<option value='100'>100</option>
							<option value='90'>90</option>
							<option value='80'>80</option>
						</select>
						<span>pounds</span>
						<br />
						<input
							className='form-input'
							placeholder='Grader Initials'
							id='deadliftgrader'
							type='text'
							value={formData.deadliftgrader}
							onChange={(event) =>
								setFormData({ ...formData, deadliftgrader: event.target.value })
							}></input>
						<br />
						<span>Points: </span>
					</li>
					<li className='form-li testsections'>
						<label className='form-label' htmlFor='spt'>
							Standing Power Throw: Distance thrown (meters, centimeters){' '}
						</label>
						<br />
						<span>1st Attempt:</span>
						<select
							className='form-input'
							placeholder='1st Attempt'
							id='firstspt'
							type='text'
							value={formData.firstspt}
							onChange={(event) =>
								setFormData({ ...formData, firstspt: event.target.value })
							}>
							<option value='12.5'>12.5</option>
							<option value='12.4'>12.4</option>
							<option value='12.2'>12.2</option>
							<option value='12.1'>12.1</option>
							<option value='11.9'>11.9</option>
							<option value='11.8'>11.8</option>
							<option value='11.6'>11.6</option>
							<option value='11.5'>11.5</option>
							<option value='11.3'>11.3</option>
							<option value='11.2'>11.2</option>
							<option value='11.0'>11.0</option>
							<option value='10.9'>10.9</option>
							<option value='10.7'>10.7</option>
							<option value='10.6'>10.6</option>
							<option value='10.4'>10.4</option>
							<option value='10.3'>10.3</option>
							<option value='10.1'>10.1</option>
							<option value='10.0'>10.0</option>
							<option value='9.8'>9.8</option>
							<option value='9.7'>9.7</option>
							<option value='9.5'>9.5</option>
							<option value='9.4'>9.4</option>
							<option value='9.2'>9.2</option>
							<option value='9.1'>9.1</option>
							<option value='8.9'>8.9</option>
							<option value='8.8'>8.8</option>
							<option value='8.6'>8.6</option>
							<option value='8.5'>8.5</option>
							<option value='8.3'>8.3</option>
							<option value='8.2'>8.2</option>
							<option value='8.0'>8.0</option>
							<option value='7.8'>7.8</option>
							<option value='7.5'>7.5</option>
							<option value='7.1'>7.1</option>
							<option value='6.8'>6.8</option>
							<option value='6.5'>6.5</option>
							<option value='6.2'>6.2</option>
							<option value='5.8'>5.8</option>
							<option value='5.4'>5.4</option>
							<option value='4.9'>4.9</option>
							<option value='4.5' selected={true}>
								4.5
							</option>
							<option value='4.4'>4.4</option>
							<option value='4.3'>4.3</option>
							<option value='4.2'>4.2</option>
							<option value='4.1'>4.1</option>
							<option value='4.0'>4.0</option>
							<option value='3.9'>3.9</option>
							<option value='3.8'>3.8</option>
							<option value='3.7'>3.7</option>
							<option value='3.6'>3.6</option>
							<option value='3.5'>3.5</option>
							<option value='3.4'>3.4</option>
							<option value='3.3'>3.3</option>
						</select>
						<br />
						<span>2nd Attempt:</span>
						<select
							className='form-input'
							placeholder='2nd Attempt'
							id='secondspt'
							type='text'
							value={formData.secondspt}
							onChange={(event) =>
								setFormData({ ...formData, secondspt: event.target.value })
							}>
							<option value='12.5'>12.5</option>
							<option value='12.4'>12.4</option>
							<option value='12.2'>12.2</option>
							<option value='12.1'>12.1</option>
							<option value='11.9'>11.9</option>
							<option value='11.8'>11.8</option>
							<option value='11.6'>11.6</option>
							<option value='11.5'>11.5</option>
							<option value='11.3'>11.3</option>
							<option value='11.2'>11.2</option>
							<option value='11.0'>11.0</option>
							<option value='10.9'>10.9</option>
							<option value='10.7'>10.7</option>
							<option value='10.6'>10.6</option>
							<option value='10.4'>10.4</option>
							<option value='10.3'>10.3</option>
							<option value='10.1'>10.1</option>
							<option value='10.0'>10.0</option>
							<option value='9.8'>9.8</option>
							<option value='9.7'>9.7</option>
							<option value='9.5'>9.5</option>
							<option value='9.4'>9.4</option>
							<option value='9.2'>9.2</option>
							<option value='9.1'>9.1</option>
							<option value='8.9'>8.9</option>
							<option value='8.8'>8.8</option>
							<option value='8.6'>8.6</option>
							<option value='8.5'>8.5</option>
							<option value='8.3'>8.3</option>
							<option value='8.2'>8.2</option>
							<option value='8.0'>8.0</option>
							<option value='7.8'>7.8</option>
							<option value='7.5'>7.5</option>
							<option value='7.1'>7.1</option>
							<option value='6.8'>6.8</option>
							<option value='6.5'>6.5</option>
							<option value='6.2'>6.2</option>
							<option value='5.8'>5.8</option>
							<option value='5.4'>5.4</option>
							<option value='4.9'>4.9</option>
							<option value='4.5' selected={true}>
								4.5
							</option>
							<option value='4.4'>4.4</option>
							<option value='4.3'>4.3</option>
							<option value='4.2'>4.2</option>
							<option value='4.1'>4.1</option>
							<option value='4.0'>4.0</option>
							<option value='3.9'>3.9</option>
							<option value='3.8'>3.8</option>
							<option value='3.7'>3.7</option>
							<option value='3.6'>3.6</option>
							<option value='3.5'>3.5</option>
							<option value='3.4'>3.4</option>
							<option value='3.3'>3.3</option>
						</select>
						<br />
						<input
							className='form-input'
							placeholder='Grader Initials'
							id='sptgrader'
							type='text'
							value={formData.sptgrader}
							onChange={(event) =>
								setFormData({ ...formData, sptgrader: event.target.value })
							}></input>
						<br />
						<span>Points: </span>
					</li>
					<li className='form-li testsections'>
						<label className='form-label' htmlFor='hrp'>
							Hand Release Push-Up: number of correctly performed repetitions{' '}
						</label>
						<br />
						<span>Repetitions: </span>
						<select
							className='form-input'
							placeholder='1st Attempt'
							id='hrp'
							type='text'
							value={formData.hrp}
							onChange={(event) =>
								setFormData({ ...formData, hrp: event.target.value })
							}>
							<option value='60'>60</option>
							<option value='59'>59</option>
							<option value='58'>58</option>
							<option value='57'>57</option>
							<option value='56'>56</option>
							<option value='55'>55</option>
							<option value='54'>54</option>
							<option value='53'>53</option>
							<option value='52'>52</option>
							<option value='51'>51</option>
							<option value='50'>50</option>
							<option value='49'>49</option>
							<option value='48'>48</option>
							<option value='47'>47</option>
							<option value='46'>46</option>
							<option value='45'>45</option>
							<option value='44'>44</option>
							<option value='43'>43</option>
							<option value='42'>42</option>
							<option value='41'>41</option>
							<option value='40'>40</option>
							<option value='39'>39</option>
							<option value='38'>38</option>
							<option value='37'>37</option>
							<option value='36'>36</option>
							<option value='35'>35</option>
							<option value='34'>34</option>
							<option value='33'>33</option>
							<option value='32'>32</option>
							<option value='31'>31</option>
							<option value='30'>30</option>
							<option value='28'>28</option>
							<option value='26'>26</option>
							<option value='24'>24</option>
							<option value='22'>22</option>
							<option value='20'>20</option>
							<option value='18'>18</option>
							<option value='16'>16</option>
							<option value='14'>14</option>
							<option value='12'>12</option>
							<option value='10' selected={true}>
								10
							</option>
							<option value='9'>9</option>
							<option value='8'>8</option>
							<option value='7'>7</option>
							<option value='6'>6</option>
							<option value='5'>5</option>
							<option value='4'>4</option>
							<option value='3'>3</option>
							<option value='2'>2</option>
							<option value='1'>1</option>
							<option value='0'>0</option>
						</select>
						<br />
						<input
							className='form-input'
							placeholder='Grader Initials'
							id='hrpgrader'
							type='text'
							value={formData.hrpgrader}
							onChange={(event) =>
								setFormData({ ...formData, hrpgrader: event.target.value })
							}></input>
						<br />
						<span>Points: </span>
					</li>
				</ul>
			</form>
		</main>
	);
}

export default ScoreCardForm;

//firstdeadlift
//seconddeadlift
//deadliftgrader
//firstspt
//secondspt
//sptgrader
//hrp
//hrpgrader
