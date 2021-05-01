import React from 'react';
import Balance from './Balance.js';

import '../styles/header.css';

class Header extends React.Component {

	render(){

		return (

			<div className="header-container">
				
				<h1 className="title">Minhas Finanças</h1>
				<p className="balance-label">Meu saldo</p>
				<p className="balance-value">R$ 1458.00</p>

				<Balance/>

			</div>

		);
	}

}

export default Header;
