function Events(){

    return(
        <>
            <button onClick={function (){alert("Hello World!")}}>Click here</button>
            <button onClick={() => alert("Hello World!")}>Click here</button>
        </>
    );
}

export default Events;