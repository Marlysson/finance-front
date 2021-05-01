import React from 'react';
import '../styles/button.css';

class Button extends React.Component{
    
    constructor(props){
    	super(props);
    }

	render(){

		return (
			<button class="btn btn-sm btn-create">
				<span class="material-icons">{this.props.icon}</span>
				{this.props.description != null ? this.props.description : ''}
			</button>
		)
	}
}

export default Button