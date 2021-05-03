import React from "react"

class Form extends React.Component{

    handleFormSubmit = (event) => {
        event.preventDefault();
        let F_value = document.querySelector('#name').value;
        alert(F_value);
    }

    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" id="name" />
                <input type="submit" />
            </form>
        );
    }
}

export default Form;
