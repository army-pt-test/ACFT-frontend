import './App.css';
// Dependencies
import { Routes, Route } from 'react-router-dom';
// Components
import Navigation from './components/Navigation/Navigation';
import CadetList from './components/CadetList/CadetList';
import AddCadet from './components/AddCadet/AddCadet';
import CadetDetails from './components/CadetDetails/CadetDetails';
import Home from './components/Home/Home';

function App() {
	return (
		<div className='main-wrapper'>
			<div className='navbar-wrapper'>
				<Navigation />
			</div>
			<div className='wrapper'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/cadetlist' element={<CadetList />} />
					<Route path='/addcadet' element={<AddCadet />} />
					<Route path='/cadetlist/:id' element={<CadetDetails />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
