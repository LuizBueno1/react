import { useState } from "react";

function State(){

    //State
    const[text, setText] = useState("Hello World!");

    function alterText(){
        setText("Bye World!");
    }

    return(
        <>
            <h1>{text}</h1>
            <button onClick={alterText}>Alter text</button>
        </>
    );
}

export default State;