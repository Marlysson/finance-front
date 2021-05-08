import React from 'react';
import '../styles/itemlist.css';

class ItemList extends React.Component{

	constructor(props){
		super(props);
	}

	render(){

		return (
			
			this.props.moviments.map((moviment) => 
				
				<li key={moviment.description} className="list-group-item mb-2 d-flex justify-content-between">
				  	
				  	<span>{moviment.description}</span>
				  	
				  	<span className={`item-list-value ${'INCOME' === moviment.operation ? 'incomes-type' : 'expenses-type'}`}>
				  		R$ {moviment.amount}
				  	</span>
				</li>		
			)
		)
	}
}

export default ItemList;