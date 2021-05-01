
import React from 'react';
import Header from './components/Header.js';
import Button from './components/Button.js';
import ItemList from './components/ItemList.js';

class App extends React.Component{

	constructor(props){
		super(props);
		this.moviments = [
			{'operation': 'INCOME', 'description': 'Freelance', 'amount': 2500.30},
			{'operation': 'EXPENSE', 'description': 'Lanche', 'amount': 64.60},
			{'operation': 'EXPENSE', 'description': 'Livros', 'amount': 120.20},
			{'operation': 'INCOME', 'description': 'Freelance', 'amount': 2200.50},
		]	
	}

	render(){

	  	return (
	    
		    <div>
			    
			    <Header />

			    <div className="container-sized mb-4 d-flex justify-content-between align-items-center">
			    	<span>Movimentações</span>
		    		<Button icon='add' description='Adicionar'/>
		    	</div>

		    	<div className="container-sized ">
		    		<ul className="list-group">
					  <ItemList moviments={this.moviments} />
					</ul>
		    	</div>

		    	<div className="container-sized mt-2 d-flex justify-content-center">
		    		<div className="d-flex justify-content-between container-pagination">
			    		<Button icon='arrow_back'/>
			    		<Button icon='arrow_forward'/>
		    		</div>
		    	</div>

		    </div>

	  	);
	}
}

export default App;
