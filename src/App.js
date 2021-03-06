import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import './App.css';

import { Navbar, Homepage, Cryptocurrencies, Exchanges, CryptoDetails, News } from './components';

const App = () => {
	return (
		<div className="app">
			<div className="navbar">
				<Navbar />
			</div>
			<div className="main">
				<Layout>
					<div className="routes">
						<Routes>
							<Route exact path="/" element={<Homepage />} />
							<Route exact path="/exchanges" element={<Exchanges />} />
							<Route exact path="/cryptocurrencies" element={<Cryptocurrencies simplified={false} />} />
							<Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
							<Route exact path="/news" element={<News simplified={false} />} />
						</Routes>
					</div>
				</Layout>
				<div className="footer">
					<Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
						Cryptoverse <br />
					</Typography.Title>
					<Space>
						<Link to="/">Home</Link>
						<Link to="/exchanges">Exchanges</Link>
						<Link to="/news">News</Link>
					</Space>
				</div>
			</div>
		</div>
	);
};

export default App;
