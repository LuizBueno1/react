import { useState } from "react";

function Form(){

    const[text, setText] = useState("");

    const inputValue = (event) => {
        setText(event.target.value);
    } 

    return(
        <form>
            <h1>{text}</h1>
            <input type="text" onChange={inputValue} />
        </form>
    );
}

export default Form;