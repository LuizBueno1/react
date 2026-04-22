import { Activity, useState } from "react";

function Container() {

    const [visible, setVisible] = useState(true);

    function alterVisibility() {
        //setVisible(!visible);
        setVisible(currentValue => !currentValue);
    }

    return (
        <>
            <button onClick={alterVisibility}>Click Here</button>
            <Activity mode={visible ? "visible" : "hidden"}>
                <h1>Learning to use the Activity</h1>
            </Activity>
        </>
    )
}

export default Container;