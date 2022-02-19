import { useState } from "react";
import { random } from "../random"; //we are importing random var rather than the whole file
import FlipCoin from "./FlipCoin";
import Icon from "./Icon";

//create an object
const imageMap = {
  head: "../imageflip.jpeg",
  tail: "../images/edge.png",
  edge: "../images/edge.png"
};
console.log(imageMap.head);
console.log(imageMap.tail);
console.log(imageMap.edge);

export default function Button({ num, icons, color, showImage }) {
  const [isClicked, setIsClicked] = useState();
  const [imgSrc, setImgSrc] = useState("");

  const background = isClicked ? color[0] : color[1];

  function flip() {
    if (num !== "1") {
      return;
    }
    setIsClicked(!isClicked);
    setImgSrc(random());
  }

  console.log(imgSrc);

  return (
    <div
      style={{
        backgroundColor: background,
        textAlign: "center",
        height: "20vh"
      }}
    >
      {showImage && imgSrc && (
        <img
          alt="flip pictrue"
          src={imageMap[imgSrc]}
          height="50px"
          width="50px"
        />
      )}
      <button onClick={flip}>Click here ➡</button>

      {num === "1" && (
        //bc it is a group of elm
        <>
          <Icon />
          <FlipCoin />
        </>
      )}
    </div>
  );
}
