import React from 'react';
import '../styles/balance.css';

class Balance extends React.Component {

	render(){

		return (

			<div className="balance-container">
				
				<div className="balance-type">
					<p className="balance-type-label">Receitas</p>
					<p className="balance-type-value incomes-type">R$ 1230.40</p>
				</div>

				<div className="balance-type">
					<p className="balance-type-label">Despesas</p>
					<p className="balance-type-value expenses-type">R$ 650.00</p>
				</div>

			</div>
			
		);
	}

}

export default Balance;
