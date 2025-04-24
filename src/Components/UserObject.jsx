import React from "react";

function UserObject(props)
{
    
    return(
    <>
    <h2>The Object as prop from APP.js component is</h2>
    <h3>The Name is:{props.user.name}</h3>
    <h3>The Proffession is:{props.user.proffesion}</h3>
    <h3>The No Of Centuries is:{props.user.centuries}</h3>
    </>
)
}

export default UserObject;