import { useState } from "react";
import "./level2style.css";

function Player(props) {
  return (
    <div
      className="player"
      style={{ top: `${props.yTunnel}rem`, left: `${props.xTunnel}rem` }}
    ></div>
  );
}

export default Player;
