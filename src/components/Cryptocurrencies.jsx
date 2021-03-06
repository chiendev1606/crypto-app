import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Input, Col } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = ({ simplified }) => {
	const count = simplified ? 10 : 100;

	const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
	const [cryptos, setCryptos] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const filterData = cryptosList?.data?.coins?.filter(currency =>
			currency.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setCryptos(filterData);
	}, [searchTerm, cryptosList]);

	if (isFetching) return 'Loading...';

	return (
		<>
			{!simplified && (
				<div className="search-crypto">
					<Input
						placeholder="Search Crypto..."
						value={searchTerm}
						onChange={e => setSearchTerm(e.target.value)}
					/>
				</div>
			)}
			<Row gutter={[32, 32]} className="crypto-card-container">
				{cryptos?.map(currency => (
					<Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
						<Card
							title={`${currency.rank} . ${currency.name} `}
							extra={<img src={currency.iconUrl} alt={currency.name} className="crypto-image" />}
							hoverable>
							<p>Price: {millify(currency.price)}</p>
							<p>Market Cap: {millify(currency.marketCap)}</p>
							<p>Daily Change: {millify(currency.change)} %</p>
						</Card>
					</Col>
				))}
			</Row>
		</>
	);
};

export default Cryptocurrencies;
