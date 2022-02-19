//import { useState } from "react";
import "./styles.css";
import Button from "./component/Button";
//import Icons from "./component/Icons"

export default function App() {
  return (
    <div className="App">
      <h1>
        Lets Play Some Games <span>👾</span>
      </h1>

      <Button num="1" color={["red", "blue"]} showImage={true} />
      <Button num="2" color={["aqua", "pink"]} />
      <Button num="3" color={["yellow", "green"]} />
    </div>
  );
}
