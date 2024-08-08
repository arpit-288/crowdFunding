import react from "react";
import { Button } from "../components/Button";

export function AuthenticationPage() {
  const click = function printMe() {
    console.log("Hey button is working pefectly fine");
  };
  return (
    <>
      <div className="bg-white flex justify-between">
        <div>
          <h1>Hey this is left side.</h1>
        </div>
        <div>
          <h1>Hey this is right side.</h1>
        </div>
      </div>
    </>
    // <Button title={'Submit'} onClickHandler={click}></Button>
  );
}
