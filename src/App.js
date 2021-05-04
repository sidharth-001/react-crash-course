import React from "react";
import axios from "axios";

// import Form from "./components/Form";
import Counter from "./components/Counter";
import Test from "./components/Test";

class App extends React.Component{
    render(){
        return (
            <div>
                <Test />
                <Counter />
            </div>
        )
    }
}

export default App;