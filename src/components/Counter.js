import React, {useState} from "react";

const Counter = () => {

    const [clicks, setClicks] = useState(0);
    
    function handleButtonClick(){
        setClicks(clicks+1);
    }

    return(
        <div>
            <h1>Click Counter</h1>
            <span>You Clicked {clicks} clicks</span>
            <br />
            <button onClick={handleButtonClick}>Click Me!</button>
        </div>
    )
}

export default Counter;