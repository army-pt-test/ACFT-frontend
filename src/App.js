import './App.css';
// Dependencies
import { Routes, Route } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';
// Components
import Navigation from './components/Navigation/Navigation';
import CadetList from './components/CadetList/CadetList';
import AddCadet from './components/AddCadet/AddCadet';
import CadetDetails from './components/CadetDetails/CadetDetails';
import Home from './components/Home/Home';

export const CadetContext = createContext('');

function App() {
	const [cadet, setCadet] = useState('');
	const [cadetList, setCadetList] = useState('');

	return (
		<div className='main-wrapper'>
			<div className='navbar-wrapper'>
				<Navigation />
			</div>
			<div className='wrapper'>
				<CadetContext.Provider
					value={{
						cadet,
						setCadet,
						cadetList,
						setCadetList,
					}}>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/cadetlist' element={<CadetList />} />
						<Route path='/addcadet' element={<AddCadet />} />
						<Route path='/cadetlist/:id' element={<CadetDetails />} />
					</Routes>
				</CadetContext.Provider>
			</div>
		</div>
	);
}

export default App;
