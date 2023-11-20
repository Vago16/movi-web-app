import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Navbar from './components/Navbar';


const App = () => {
	return (
		<div className='wrapper'>
			<BrowserRouter>
				<Navbar />
				<div className='title'>
					<h1>Movi</h1>
				</div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Dashboard />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;