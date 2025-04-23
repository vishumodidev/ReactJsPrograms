import React from "react";

function StringNumber(props){
    return(
        <>
        <h2>We are taking name <span style={{color:"red"}}>{props.name} </span>and age: <span style={{color:"blue"}}>{props.age} </span>as props</h2>
        </>
    )
}

export default StringNumber;