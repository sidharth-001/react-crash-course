import React from "react";

import Header from "./components/Header";
import Counter from "./components/Counter";

class App extends React.Component{
    render(){
        return (
            <div>
                <Header text="You Spent" />
                <Counter />
            </div>
        )
    }
}

export default App;