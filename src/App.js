
import React from 'react';
import Header from './components/Header.js';
import Button from './components/Button.js';
import ItemList from './components/ItemList.js';
import NumberFormat from 'react-number-format';
import { Toast } from "react-bootstrap";

class App extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			moviments : [],
			showToast: false,
			movimentDetails:{
				operation: '',
				amount: ''
			},
			description: '',
			amount: '',
			operation: 'income'
		}

		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onTypingValue = this.onTypingValue.bind(this);
		this.onCreateMoviment = this.onCreateMoviment.bind(this);
		this.onDescriptionChange = this.onDescriptionChange.bind(this);
	}

	componentDidMount(){

		fetch('http://localhost:8000/moviments').then(response => response.json())
		.then((response) => {
			this.setState({moviments: response})
		}).catch(function(error){
			throw new Error("Something wrong: " + error);
		})
	}

	onDescriptionChange(event){
		this.setState({description: event.target.value});
	}

	onTypingValue(valueTyped){
		this.setState({amount: valueTyped.value});
	}

	onChange(event){
		this.setState({ operation: event.target.value});
	}

	onSubmit(event){
		event.preventDefault();
	}

	onCreateMoviment(){

		let moviment = {
			"amount": this.state.amount,
			"description": this.state.description,
			"operation": this.state.operation.toUpperCase()
		}
		
		let data = JSON.stringify(moviment);

		let headers = {
			'Content-Type': 'application/json;charset=UTF-8'
		}
		
		fetch('http://localhost:8000/moviments/',
			{ method: 'POST', body: data, headers: headers }
		).then(response => response.json())
		 .then((moviment_created) => {
			
			this.setState((state) => {
				return { 
					moviments: [...state.moviments, moviment_created],
					movimentDetails: {
						operation: moviment_created.operation === 'INCOME' ? 'Receita' : 'Despesa',
						amount: moviment_created.amount
					},
					showToast: true
				};
			})

		}).catch(function(error){
			console.log(error)
		})

	}

	render(){

		let { moviments }  = this.state;

	  	return (
	    
		    <div>
			    
			    <Header />
				
				<div style={{width: 350, position: 'absolute', right:15, top: 15}}>

					<div style={{position: 'relative'}}>

						<Toast 
							onClose={() => this.setState({showToast: false})}
							show={this.state.showToast} 
							delay={5000} autohide>
							<Toast.Header>
							<i className="material-icons" style={{fontSize: 20}}>paid</i>
								<span style={{paddingLeft: 5, fontWeight: "bold"}} className="mr-auto">Nova movimentação</span>
							</Toast.Header>
							<Toast.Body>
		  						<span>{this.state.movimentDetails.operation}</span> de R$ <span>{this.state.movimentDetails.amount}</span> realizada com sucesso.
							</Toast.Body>
						</Toast>

					</div>

				</div>

			    <div className="container-sized mb-4 d-flex justify-content-between align-items-center">
			    	<span style={{ 'fontWeight': 'bold', 'color': '#7f8c8d'}}>Movimentações</span>
		    		<Button icon='add' description='Adicionar' modal="novoMovimento" />
		    	</div>

				<div className="modal fade" id="novoMovimento">
					
					<div className="modal-dialog modal-sm">
						
						<div className="modal-content">
							
							<div className="modal-header">
								
								<div className="d-flex flex-direction-row justify-content-center" style={{'color':'#9B59B6', 'fontWeight': 'bold'}}>
									
									<span className="material-icons">monetization_on</span>
									<h5 className="modal-title pl-2">
										NOVO MOVIMENTO
									</h5>

								</div>

								<button id="closeModal" type="button" className="close" data-dismiss="modal">
									<span aria-hidden="true">&times;</span>
								</button>

							</div>

							<form onSubmit={this.onSubmit}>

								<div className="modal-body">

									<div className="form-group">

										<label htmlFor="valor">Descrição</label>

										<input value={this.state.description} onChange={this.onDescriptionChange} className="form-control form-control-sm"/>
									
									</div>

									<div className="form-group">

										<label htmlFor="valor">Valor</label>
										
										<div className="input-group input-group-sm">
											
											<div className="input-group-prepend">
												<span className="input-group-text">R$</span>
											</div>
											
											<NumberFormat 
												value={this.state.amount}
												className="form-control"
												onValueChange={this.onTypingValue}
												isNumericString={true}
												decimalScale={2}
												fixedDecimalScale={true}
												thousandSeparator={'.'}
												decimalSeparator={','}
											/>

										</div>
										
									</div>

									<div className="form-group d-flex mt-2 justify-content-around">

										<div className="form-check">
											<input 
												className="form-check-input" 
												type="radio" 
												name="tipo" 
												value="income" 
												id="receita"
												checked={this.state.operation === 'income'}
												onChange={this.onChange}
											/>
											<label className="form-check-label" htmlFor="receita">
												Receita
											</label>
										</div>

										<div className="form-check">
											<input 
												className="form-check-input" 
												type="radio" 
												name="tipo" 
												id="despesa" 
												value="expense" 
												checked={this.state.operation === 'expense'}
												onChange={this.onChange}
											/>
											<label className="form-check-label" htmlFor="despesa">
												Despesa
											</label>
										</div>

									</div>

								</div>
								
								<div className="modal-footer">
									<button type="button" className="btn btn-sm btn-secondary" data-dismiss="modal">Fechar</button>
									<button type="button" onClick={this.onCreateMoviment} className="btn btn-sm custom-button">Salvar</button>
								</div>

							</form>
						</div>
					</div>
				</div>

		    	<div className="container-sized ">
					  <ItemList moviments={moviments} />
		    	</div>

		    </div>

	  	);
	}
}

export default App;
