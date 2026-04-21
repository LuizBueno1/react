function Listing(){

    const names = ["Paul", "Mary", "Anne", "Lewis"];

    return(
        <ul>
            {names.map((name, index) => (<li key={index}>{name}</li>))}
        </ul>
    );
}

export default Listing;