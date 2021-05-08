import React from 'react';
import '../styles/button.css';

class Button extends React.Component{
    
    constructor(props){
		super(props);
    }

	render(){

		let button;

		if ( this.props.modal != null ){

			let element = "#" + this.props.modal;

			return (
				<button className="btn btn-sm custom-button" data-toggle='modal' data-target={element}>
					<span className="material-icons">{this.props.icon}</span>
					{this.props.description != null ? this.props.description : ''}
				</button>
			)	
		}

		return (
			<button className="btn btn-sm custom-button">
				<span className="material-icons">{this.props.icon}</span>
				{this.props.description != null ? this.props.description : ''}
			</button>
		)
	}
}

export default Button