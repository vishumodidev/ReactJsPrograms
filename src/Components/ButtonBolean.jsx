import React from "react";
function ButtonBoolean(props)
{
    return(
        <>
        <h2>The Button Component</h2>
        <button disabled={props.disabled} >Click Me</button>
        </>
    )
}

export default ButtonBoolean;