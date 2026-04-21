function Functions(){

    function message1(){
        alert("Message 1");
    }

    const message2 = () => {
        alert("Message 2");
    }

    return(
        <>
            <button onClick={message1}>Click here</button>
            <button onClick={message2}>Click here</button>
        </>
    );
}

export default Functions;