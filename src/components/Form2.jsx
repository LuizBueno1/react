import { useState } from "react";

function Form2(){

    const[form, setForm] = useState({
        name:"",
        city:""
    });

    const inputValue = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]:value});
    } 

    return(
        <form>
            <h1>{form.name}</h1>
            <h1>{form.city}</h1>
            <input type="text" name="name" onChange={inputValue} />
            <input type="text" name="city" onChange={inputValue} />
        </form>
    );
}

export default Form2;