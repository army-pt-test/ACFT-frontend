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
		firstdeadlift: '',
		seconddeadlift: '',
		deadliftgrader: '',
		firstspt: '',
		secondspt: '',
		sptgrader: '',
		hrp: '',
		hrpgrader: '',
		sdc: '',
		sdcgrader: '',
		ltk: '',
		ltkgrader: '',
		plank: '',
		plankgrader: '',
		twomr: '',
		twomrgrader: '',
		fivekrow: Boolean,
		onekswim: Boolean,
		twelvekbike: Boolean,
		choicegrader: '',
		choicescore: '',
		choicego: '',
		choicenogo: '',
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
							3 Repetition Maximum Deadlift: Weight lifted (lbs){' '}
						</label>
						<br />
						<span>1st Attempt:</span>
						<select
							className='form-input'
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
							Hand Release Push-Up: Number of correctly performed repetitions{' '}
						</label>
						<br />
						<span>Repetitions: </span>
						<select
							className='form-input'
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
					<li className='form-li testsections'>
						<label className='form-label' htmlFor='sdc'>
							Sprint-Drag-Carry: Overall event time{' '}
						</label>
						<br />
						<span>Time (minutes:seconds) </span>
						<select
							className='form-input'
							id='sdc'
							type='text'
							value={formData.sdc}
							onChange={(event) =>
								setFormData({ ...formData, sdc: event.target.value })
							}>
							<option value='1:33'>1:33</option>
							<option value='1:36'>1:36</option>
							<option value='1:39'>1:39</option>
							<option value='1:41'>1:41</option>
							<option value='1:43'>1:43</option>
							<option value='1:45'>1:45</option>
							<option value='1:46'>1:46</option>
							<option value='1:47'>1:47</option>
							<option value='1:48'>1:48</option>
							<option value='1:49'>1:49</option>
							<option value='1:50'>1:50</option>
							<option value='1:51'>1:51</option>
							<option value='1:52'>1:52</option>
							<option value='1:53'>1:53</option>
							<option value='1:54'>1:54</option>
							<option value='1:55'>1:55</option>
							<option value='1:56'>1:56</option>
							<option value='1:57'>1:57</option>
							<option value='1:58'>1:58</option>
							<option value='1:59'>1:59</option>
							<option value='2:00'>2:00</option>
							<option value='2:01'>2:01</option>
							<option value='2:02'>2:02</option>
							<option value='2:03'>2:03</option>
							<option value='2:04'>2:04</option>
							<option value='2:05'>2:05</option>
							<option value='2:06'>2:06</option>
							<option value='2:07'>2:07</option>
							<option value='2:08'>2:08</option>
							<option value='2:09'>2:09</option>
							<option value='2:10'>2:10</option>
							<option value='2:14'>2:14</option>
							<option value='2:18'>2:18</option>
							<option value='2:22'>2:22</option>
							<option value='2:26'>2:26</option>
							<option value='2:30'>2:30</option>
							<option value='2:35'>2:35</option>
							<option value='2:40'>2:40</option>
							<option value='2:45'>2:45</option>
							<option value='2:50'>2:50</option>
							<option value='3:00' selected={true}>
								3:00
							</option>
							<option value='3:01'>3:01</option>
							<option value='3:02'>3:02</option>
							<option value='3:03'>3:03</option>
							<option value='3:04'>3:04</option>
							<option value='3:05'>3:05</option>
							<option value='3:06'>3:06</option>
							<option value='3:07'>3:07</option>
							<option value='3:08'>3:08</option>
							<option value='3:09'>3:09</option>
							<option value='3:10'>3:10</option>
							<option value='3:11'>3:11</option>
							<option value='3:12'>3:12</option>
							<option value='3:13'>3:13</option>
							<option value='3:14'>3:14</option>
							<option value='3:15'>3:15</option>
							<option value='3:16'>3:16</option>
							<option value='3:17'>3:17</option>
							<option value='3:18'>3:18</option>
							<option value='3:19'>3:19</option>
							<option value='3:20'>3:20</option>
							<option value='3:21'>3:21</option>
							<option value='3:22'>3:22</option>
							<option value='3:23'>3:23</option>
							<option value='3:24'>3:24</option>
							<option value='3:25'>3:25</option>
							<option value='3:26'>3:26</option>
							<option value='3:27'>3:27</option>
							<option value='3:28'>3:28</option>
							<option value='3:29'>3:29</option>
							<option value='3:30'>3:30</option>
							<option value='3:31'>3:31</option>
							<option value='3:32'>3:32</option>
							<option value='3:33'>3:33</option>
							<option value='3:34'>3:34</option>
							<option value='3:35'>3:35</option>
						</select>
						<br />
						<input
							className='form-input'
							placeholder='Grader Initials'
							id='sdcgrader'
							type='text'
							value={formData.sdcgrader}
							onChange={(event) =>
								setFormData({ ...formData, sdcgrader: event.target.value })
							}></input>
						<br />
						<span>Points: </span>
					</li>
					<li className='form-li testsections'>
						<label className='form-label' htmlFor='ltk'>
							Leg Tuck: Number of correctly performed repetitions{' '}
						</label>
						<br />
						<span>Repetitions: </span>
						<select
							className='form-input'
							id='ltk'
							type='text'
							value={formData.ltk}
							onChange={(event) =>
								setFormData({ ...formData, ltk: event.target.value })
							}>
							<option value='20'>20</option>
							<option value='19'>19</option>
							<option value='18'>18</option>
							<option value='17'>17</option>
							<option value='16'>16</option>
							<option value='15'>15</option>
							<option value='14'>14</option>
							<option value='13'>13</option>
							<option value='12'>12</option>
							<option value='11'>11</option>
							<option value='10'>10</option>
							<option value='9'>9</option>
							<option value='8'>8</option>
							<option value='7'>7</option>
							<option value='6'>6</option>
							<option value='5'>5</option>
							<option value='4'>4</option>
							<option value='3'>3</option>
							<option value='2'>2</option>
							<option value='1' selected={true}>
								1
							</option>
						</select>
						<br />
						<input
							className='form-input'
							placeholder='Grader Initials'
							id='ltkgrader'
							type='text'
							value={formData.ltkgrader}
							onChange={(event) =>
								setFormData({ ...formData, ltkgrader: event.target.value })
							}></input>
						<br />
						<span>Points: </span>
					</li>
					<li className='form-li testsections'>
						<label className='form-label' htmlFor='plank'>
							Alternate Plank: Maintain proper straight-line position{' '}
						</label>
						<br />
						<span>Time (minutes:seconds) </span>
						<select
							className='form-input'
							id='plank'
							type='text'
							value={formData.plank}
							onChange={(event) =>
								setFormData({ ...formData, plank: event.target.value })
							}>
							<option value='4:20'>4:20</option>
							<option value='4:17'>4:17</option>
							<option value='4:14'>4:14</option>
							<option value='4:11'>4:11</option>
							<option value='4:07'>4:07</option>
							<option value='4:04'>4:04</option>
							<option value='4:01'>4:01</option>
							<option value='3:58'>3:58</option>
							<option value='3:54'>3:54</option>
							<option value='3:51'>3:51</option>
							<option value='3:48'>3:48</option>
							<option value='3:44'>3:44</option>
							<option value='3:41'>3:41</option>
							<option value='3:38'>3:38</option>
							<option value='3:35'>3:35</option>
							<option value='3:31'>3:31</option>
							<option value='3:28'>3:28</option>
							<option value='3:25'>3:25</option>
							<option value='3:21'>3:21</option>
							<option value='3:18'>3:18</option>
							<option value='3:15'>3:15</option>
							<option value='3:12'>3:12</option>
							<option value='3:08'>3:08</option>
							<option value='3:05'>3:05</option>
							<option value='3:02'>3:02</option>
							<option value='2:58'>2:58</option>
							<option value='2:55'>2:55</option>
							<option value='2:52'>2:52</option>
							<option value='2:49'>2:49</option>
							<option value='2:45'>2:45</option>
							<option value='2:42'>2:42</option>
							<option value='2:39'>2:39</option>
							<option value='2:35'>2:35</option>
							<option value='2:32'>2:32</option>
							<option value='2:29'>2:29</option>
							<option value='2:26'>2:26</option>
							<option value='2:22'>2:22</option>
							<option value='2:19'>2:19</option>
							<option value='2:16'>2:16</option>
							<option value='2:14'>2:14</option>
							<option value='2:09' selected={true}>
								2:09
							</option>
							<option value='2:07'>2:07</option>
							<option value='2:05'>2:05</option>
							<option value='2:03'>2:03</option>
							<option value='2:01'>2:01</option>
							<option value='1:59'>1:59</option>
							<option value='1:57'>1:57</option>
							<option value='1:55'>1:55</option>
							<option value='1:53'>1:53</option>
							<option value='1:51'>1:51</option>
							<option value='1:49'>1:49</option>
							<option value='1:47'>1:47</option>
							<option value='1:45'>1:45</option>
							<option value='1:43'>1:43</option>
							<option value='1:41'>1:41</option>
							<option value='1:39'>1:39</option>
							<option value='1:37'>1:37</option>
							<option value='1:35'>1:35</option>
							<option value='1:33'>1:33</option>
							<option value='1:31'>1:31</option>
							<option value='1:29'>1:29</option>
							<option value='1:27'>1:27</option>
							<option value='1:25'>1:25</option>
							<option value='1:23'>1:23</option>
							<option value='1:21'>1:21</option>
							<option value='1:19'>1:19</option>
							<option value='1:17'>1:17</option>
							<option value='1:15'>1:15</option>
							<option value='1:13'>1:13</option>
							<option value='1:11'>1:11</option>
							<option value='1:09'>1:09</option>
							<option value='1:07'>1:07</option>
							<option value='1:05'>1:05</option>
							<option value='1:03'>1:03</option>
							<option value='1:01'>1:01</option>
							<option value='0:59'>0:59</option>
							<option value='0:57'>0:57</option>
							<option value='0:55'>0:55</option>
							<option value='0:53'>0:53</option>
							<option value='0:51'>0:51</option>
							<option value='0:49'>0:49</option>
							<option value='0:47'>0:47</option>
							<option value='0:45'>0:45</option>
							<option value='0:43'>0:43</option>
							<option value='0:41'>0:41</option>
							<option value='0:39'>0:39</option>
							<option value='0:37'>0:37</option>
							<option value='0:35'>0:35</option>
							<option value='0:33'>0:33</option>
							<option value='0:31'>0:31</option>
							<option value='0:29'>0:29</option>
							<option value='0:27'>0:27</option>
							<option value='0:25'>0:25</option>
							<option value='0:23'>0:23</option>
							<option value='0:21'>0:21</option>
							<option value='0:19'>0:19</option>
							<option value='0:17'>0:17</option>
							<option value='0:15'>0:15</option>
							<option value='0:13'>0:13</option>
							<option value='0:11'>0:11</option>
							<option value='0:09'>0:09</option>
						</select>
						<br />
						<input
							className='form-input'
							placeholder='Grader Initials'
							id='plankgrader'
							type='text'
							value={formData.plankgrader}
							onChange={(event) =>
								setFormData({ ...formData, plankgrader: event.target.value })
							}></input>
						<br />
						<span>Points: </span>
					</li>
					<li className='form-li testsections'>
						<label className='form-label' htmlFor='twomr'>
							Two-Mile run: Overall event time{' '}
						</label>
						<br />
						<span>Time (minutes:seconds) </span>
						<select
							className='form-input'
							id='twomr'
							type='text'
							value={formData.twomr}
							onChange={(event) =>
								setFormData({ ...formData, twomr: event.target.value })
							}>
							<option value='13:30'>13:30</option>
							<option value='13:39'>13:39</option>
							<option value='13:48'>13:48</option>
							<option value='13:57'>13:57</option>
							<option value='14:06'>14:06</option>
							<option value='14:15'>14:15</option>
							<option value='14:24'>14:24</option>
							<option value='14:33'>14:33</option>
							<option value='14:42'>14:42</option>
							<option value='14:51'>14:51</option>
							<option value='15:00'>15:00</option>
							<option value='15:09'>15:09</option>
							<option value='15:18'>15:18</option>
							<option value='15:27'>15:27</option>
							<option value='15:36'>15:36</option>
							<option value='15:45'>15:45</option>
							<option value='15:54'>15:54</option>
							<option value='16:03'>16:03</option>
							<option value='16:12'>16:12</option>
							<option value='16:21'>16:21</option>
							<option value='16:30'>16:30</option>
							<option value='16:39'>16:39</option>
							<option value='16:48'>16:48</option>
							<option value='16:57'>16:57</option>
							<option value='17:06'>17:06</option>
							<option value='17:15'>17:15</option>
							<option value='17:24'>17:24</option>
							<option value='17:33'>17:33</option>
							<option value='17:42'>17:42</option>
							<option value='17:51'>17:51</option>
							<option value='18:00'>18:00</option>
							<option value='18:12'>18:12</option>
							<option value='18:24'>18:24</option>
							<option value='18:36'>18:36</option>
							<option value='18:48'>18:48</option>
							<option value='19:00'>19:00</option>
							<option value='19:24'>19:24</option>
							<option value='19:48'>19:48</option>
							<option value='20:12'>20:12</option>
							<option value='20:36'>20:36</option>
							<option value='21:00' selected={true}>
								21:00
							</option>
							<option value='21:01'>21:01</option>
							<option value='21:03'>21:03</option>
							<option value='21:05'>21:05</option>
							<option value='21:07'>21:07</option>
							<option value='21:09'>21:09</option>
							<option value='21:10'>21:10</option>
							<option value='21:12'>21:12</option>
							<option value='21:14'>21:14</option>
							<option value='21:16'>21:16</option>
							<option value='21:18'>21:18</option>
							<option value='21:19'>21:19</option>
							<option value='21:21'>21:21</option>
							<option value='21:23'>21:23</option>
							<option value='21:25'>21:25</option>
							<option value='21:27'>21:27</option>
							<option value='21:28'>21:28</option>
							<option value='21:30'>21:30</option>
							<option value='21:32'>21:32</option>
							<option value='21:34'>21:34</option>
							<option value='21:36'>21:36</option>
							<option value='21:37'>21:37</option>
							<option value='21:39'>21:39</option>
							<option value='21:41'>21:41</option>
							<option value='21:43'>21:43</option>
							<option value='21:45'>21:45</option>
							<option value='21:46'>21:46</option>
							<option value='21:48'>21:48</option>
							<option value='21:50'>21:50</option>
							<option value='21:52'>21:52</option>
							<option value='21:54'>21:54</option>
							<option value='21:55'>21:55</option>
							<option value='21:57'>21:57</option>
							<option value='21:59'>21:59</option>
							<option value='22:01'>22:01</option>
							<option value='22:03'>22:03</option>
							<option value='22:04'>22:04</option>
							<option value='22:06'>22:06</option>
							<option value='22:08'>22:08</option>
							<option value='22:10'>22:10</option>
							<option value='22:12'>22:12</option>
							<option value='22:13'>22:13</option>
							<option value='22:15'>22:15</option>
							<option value='22:17'>22:17</option>
							<option value='22:19'>22:19</option>
							<option value='22:21'>22:21</option>
							<option value='22:22'>22:22</option>
							<option value='22:24'>22:24</option>
							<option value='22:26'>22:26</option>
							<option value='22:28'>22:28</option>
							<option value='22:30'>22:30</option>
							<option value='22:31'>22:31</option>
							<option value='22:33'>22:33</option>
							<option value='22:35'>22:35</option>
							<option value='22:37'>22:37</option>
							<option value='22:39'>22:39</option>
							<option value='22:40'>22:40</option>
							<option value='22:42'>22:42</option>
							<option value='22:44'>22:44</option>
							<option value='22:46'>22:46</option>
							<option value='22:48'>22:48</option>
						</select>
						<br />
						<input
							className='form-input'
							placeholder='Grader Initials'
							id='twomrgrader'
							type='text'
							value={formData.twomrgrader}
							onChange={(event) =>
								setFormData({ ...formData, twomrgrader: event.target.value })
							}></input>
						<br />
						<span>Points: </span>
					</li>
					<li className='form-li testsections'>
						<span>Select One: Overall Time to reach required distance</span>
						<br />
						<label className='form-label form-radio-label' htmlFor='fivekrow'>
							5K Row{' '}
						</label>
						<input
							className='form-input'
							id='fivekrow'
							type='radio'
							name='fivekrow'
							value='false'
							checked={formData.fivekrow === 'true'}
							onChange={(event) =>
								setFormData({ ...formData, fivekrow: event.target.value })
							}></input>
						<label className='form-label form-radio-label' htmlFor='onekswim'>
							{' '}
							1K Swim{' '}
						</label>
						<input
							className='form-input'
							id='onekswim'
							type='radio'
							name='onekswim'
							value='false'
							checked={formData.onekswim === 'true'}
							onChange={(event) =>
								setFormData({ ...formData, onekswim: event.target.value })
							}></input>
						<label className='form-label form-radio-label' htmlFor='onekswim'>
							{' '}
							12K Bike{' '}
						</label>
						<input
							className='form-input'
							id='twelvekbike'
							type='radio'
							name='twelvekbike'
							value='false'
							checked={formData.twelvekbike === 'true'}
							onChange={(event) =>
								setFormData({ ...formData, twelvekbike: event.target.value })
							}></input>
						<input
							className='form-input'
							placeholder='Time(minutes:seconds)'
							id='choicescore'
							type='text'
							value={formData.choicescore}
							onChange={(event) =>
								setFormData({ ...formData, choicescore: event.target.value })
							}></input>
						<br />
						<input
							className='form-input'
							placeholder='Grader Initials'
							id='choicegrader'
							type='text'
							value={formData.choicegrader}
							onChange={(event) =>
								setFormData({ ...formData, choicegrader: event.target.value })
							}></input>
						<br />
						<label className='form-label form-radio-label' htmlFor='choicego'>
							Go{' '}
						</label>
						<input
							className='form-input'
							id='choicego'
							type='radio'
							name='choicego'
							value='true'
							checked={formData.choicego === 'true'}
							onChange={(event) =>
								setFormData({ ...formData, choicego: event.target.value })
							}></input>
						<label className='form-label form-radio-label' htmlFor='choicenogo'>
							{' '}
							No Go{' '}
						</label>
						<input
							className='form-input'
							id='choicenogo'
							type='radio'
							name='choicenogo'
							value='false'
							checked={formData.choicenogo === 'false'}
							onChange={(event) =>
								setFormData({ ...formData, choicenogo: event.target.value })
							}></input>
						<br />
						<span>Points: </span>
					</li>
					<br />
					<li className='signatures'>
						<span>Soldier Signature: _________________________________</span>
						<span>Date: ______________________</span>
						<span>Total Points: ______________________</span>
						<br />
						<span>
							NCOIC/OIC(Last, First, M.I.): _________________________________
						</span>
						<span>Rank: ___________________</span>
						<span>Go: ________ No Go: ________</span>
						<br />
						<span>NCOIC/OIC Signature: _________________________________</span>
						<span>Date: ______________________</span>
					</li>
				</ul>
			</form>
		</main>
	);
}

export default ScoreCardForm;
