import React from "react";

// function greet(){
//     console.log("Hello!");
// } 


class Button extends React.Component{
    constructor(){
        super();
        this.state = {
            counter: 0
        };
        // this.handleButtonClick = this.handleButtonClick.bind('this');
    }

    handleButtonClick = () => {
        this.setState({counter: 1});
    } //using arrow function to automatically bind with 'this'

    render(){
        return <button onClick={this.handleButtonClick}>{this.state.counter}</button>;
        //can be also used as
        //return <button onClick={() => this.handleButtonClick()}>{this.state.counter}</button>;
    }
}

export default Button;