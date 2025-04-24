
import React from "react";
import StringNumber from "./Components/StringNumber";
import ButtonBoolean from "./Components/ButtonBolean";
import ExpressionComp from "./Components/ExpressionComp";
import UserObject from "./Components/UserObject";

function App()
{
    const countA=100;
    const countB=200;

    const userobj={name:"smrithi",proffesion:"cricketer",centuries:30}
 return(
  <>
  <StringNumber name="virat" age="36" />
  <ButtonBoolean disabled/>
  <ExpressionComp count={countA*countB} />
  <UserObject user={userobj} />

  </>
 )
}
export default App;