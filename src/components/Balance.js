import React from 'react';
import '../styles/balance.css';

class Balance extends React.Component {

	render(){

		return (

			<div className="balance-container">
				
				<div className="balance-type">
					<p class="balance-type-label">Receitas</p>
					<p class="balance-type-value balance-incomes">R$ 1230.40</p>
				</div>

				<div className="balance-type">
					<p class="balance-type-label">Despesas</p>
					<p class="balance-type-value balance-expenses">R$ 650.00</p>
				</div>

			</div>
			
		);
	}

}

export default Balance;
