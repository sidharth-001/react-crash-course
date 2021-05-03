import React from "react";

class Form extends React.Component{

    constructor(){
        super();
        this.state = {
            value: "Enter your name"
        }
    }

    handleInputChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        alert(this.state.value);
    }

    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" id="name" value={this.state.value} onChange={this.handleInputChange} />
                <input type="submit" />
            </form>
        );
    }
}

export default Form;
