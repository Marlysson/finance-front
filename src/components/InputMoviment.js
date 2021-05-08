import React from "react";

class InputMoviment extends React.Component{

    constructor(props){
        super(props);
        this.state = {value : ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleTyping = this.handleTyping.bind(this);
    }

    handleTyping(event){
        console.log(this.state);
        this.setState({value: this.format(this.state.value)});
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    format(number){
        const formatter = new Intl.NumberFormat('pt-BR', {  
                                        style: 'decimal', 
                                        maximumFractionDigits: 10
                                        });
        return formatter.format(number);
    }

    render(){

        return (

            <input 
                type="text" 
                className="form-control form-control-sm" 
                id="valor"
                placeholder="R$ 2.455,00"
                maxLength="20" 
                value={this.state.value}
                onKeyUp={this.handleTyping}
                onChange={this.handleChange}
            />

        )
    }
}

export default InputMoviment;