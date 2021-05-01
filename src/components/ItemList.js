import React from 'react';
import '../styles/itemlist.css';

class ItemList extends React.Component{

	constructor(props){
		super(props);
		this.state = { moviments: this.props.moviments };
	}

	render(){

		return (
			
			this.state.moviments.map((moviment) => 
				
				<li key={moviment.description} class="list-group-item mb-2 d-flex justify-content-between">
				  	
				  	<span>{moviment.description}</span>
				  	
				  	<span className={`item-list-value ${'INCOME' == moviment.operation ? 'incomes-type' : 'expenses-type'}`}>
				  		R$ {moviment.amount.toFixed(2)}
				  	</span>
				</li>		
			)
		)
	}
}

export default ItemList;