import React from 'react';
import '../styles/itemlist.css';
import Button from './Button';

class ItemList extends React.Component{

	constructor(props){
		super(props);
	}

	render(){

		let elements;

		if ( this.props.moviments.length === 0){
			elements = <li className="list-group-item mb-4 d-flex justify-content-center" style={{'fontWeight': 'bold'}}>Não há movimentações</li>;

		}else{
			
			elements = this.props.moviments.map((moviment) => 

				<li key={moviment.id} className="list-group-item mb-2 d-flex justify-content-between">
						
						<span>{moviment.description}</span>
						
						<span className={`item-list-value ${'INCOME' === moviment.operation ? 'incomes-type' : 'expenses-type'}`}>
							R$ {moviment.amount}
						</span>
				</li>	
				
			)
		}
		
		return (

			<div>

				<ul className='list-group'>{elements}</ul>
				
				{
				
					this.props.moviments.length > 0 && 
				
					<div className="container-sized mt-2 d-flex justify-content-center">
						<div className="d-flex justify-content-between container-pagination">
							<Button icon='arrow_back'/>
							<Button icon='arrow_forward'/>
						</div>
					</div>
				}

			</div>

		)

	}

}

export default ItemList;