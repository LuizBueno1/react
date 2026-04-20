//Component
function Conditional({average}){

    if(average >= 7){
        return <h1>Approved</h1>;
    } else{
        return <h1>Failed</h1>;
    }
}

export default Conditional;