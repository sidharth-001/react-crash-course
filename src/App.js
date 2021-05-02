import React from "react";

import Header from "./components/Header";
import Button from "./components/Button";

class App extends React.Component{
    render(){
        return (
            <div>
                <h1>Hello, world!</h1>
                <Header text="Hit it!" />
                <Button label="Click!"/>
            </div>
        )
    }
}

export default App;