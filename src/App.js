
import React from 'react';
import Header from './components/Header.js';
import Button from './components/Button.js';
import ItemList from './components/ItemList.js';
import NumberFormat from 'react-number-format';


class App extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			moviments : [],
			value: '',
			operation: 'income'
		}

		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onTypingValue = this.onTypingValue.bind(this);

	}

	componentDidMount(){
		fetch('http://localhost:8000/moviments').then(response => response.json())
		.then((response) => {
			this.setState({moviments: response})
		}).catch(function(error){
			throw new Error("Something wrong: " + error);
		})
	}

	onTypingValue(valueTyped){
		this.setState({value: valueTyped.value})
	}

	onChange(event){
		this.setState({operation: event.target.value});
	}

	onSubmit(event){
		event.preventDefault();

		let data = JSON.stringify({
			'description': 'Freela',
			'amount': this.state.value,
			'operation': this.state.operation.toUpperCase()
		})

		let headers = {
			'Content-Type': 'application/json;charset=UTF-8'
		}

		fetch('http://localhost:8000/moviments/',
			{ method: 'POST', body: data , headers: headers }
		).then(response => response.json())
		 .then((response) => {
			alert(`Montante de ${response.amount} registrado com sucesso.`)
			this.setState((state) => {
				return { moviments: [response, ...state.moviments]};
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

			    <div className="container-sized mb-4 d-flex justify-content-between align-items-center">
			    	<span>Movimentações</span>
		    		<Button icon='add' description='Adicionar' modal="novoMovimento" />
		    	</div>

				<div className="modal fade" id="novoMovimento">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								
								<div className="d-flex flex-direction-row justify-content-center" style={{'color':'#9B59B6', 'fontWeight': 'bold'}}>
									<span className="material-icons">monetization_on</span>
									<h5 className="modal-title pl-2">
										NOVO MOVIMENTO
									</h5>
								</div>

								<button type="button" className="close" data-dismiss="modal" aria-label="Close"></button>
							</div>
							<form onSubmit={this.onSubmit}>

								<div className="modal-body">
	
									<div className="row">

										<div className="form-group col-lg-6">

											<label htmlFor="valor">Valor</label>
											
											<div className="input-group">
												
												<div className="input-group-prepend">
													<span className="input-group-text" id="basic-addon1">R$</span>
													<NumberFormat 
														value={this.state.value}
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
											
										</div>

										<div className="form-group col-lg-5 d-flex mt-4 justify-content-between">

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

								</div>
								
								<div className="modal-footer">
									<button type="button" className="btn btn-sm btn-secondary" data-dismiss="modal">Fechar</button>
									<button type="button" type="submit" className="btn btn-sm custom-button">Salvar</button>
								</div>

							</form>
						</div>
					</div>
				</div>

		    	<div className="container-sized ">
		    		<ul className="list-group">
					  <ItemList moviments={moviments} />
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
