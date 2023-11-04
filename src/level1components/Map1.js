import Player from "./level2components/Player";
import Obstacle from "./level2components/Obstacle";
import "./level1style.css";
import { useEffect, useState } from "react";

function Map1() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [background, setBackground] = useState("black");
  const [opacity, setOpacity] = useState("100%");
  const [alert, setAlert] = useState("");

  const collisionF = function () {
    setBackground("grey");
    setOpacity("90%");
    setAlert("upsy!");
  };

  const relieveF = function () {
    setBackground("black");
    setOpacity("100%");
    setAlert("");
  };

  const obstacleHeight = 10;
  const obstacleWidth = 10;
  const obstacleTop = 20;
  const obstacleLeft = 20;

  const handleKeyDown = function (e) {
    if (e.key == "d") {
      setX(x + 1);
      if (
        x >= obstacleLeft - obstacleWidth &&
        x <= obstacleLeft + obstacleWidth &&
        y > obstacleTop - obstacleHeight &&
        y < obstacleTop + obstacleHeight
      ) {
        collisionF();
      }
      if (x >= obstacleLeft + obstacleWidth - 1) {
        relieveF();
      }
    } else if (e.key == "a") {
      setX(x - 1);
      if (
        x > obstacleLeft - obstacleWidth &&
        x <= obstacleLeft + obstacleWidth &&
        y > obstacleTop - obstacleHeight &&
        y < obstacleTop + obstacleHeight
      ) {
        collisionF();
      }
      if (x <= obstacleLeft - obstacleWidth + 1) {
        relieveF();
      }
    } else if (e.key == "s") {
      setY(y + 1);
      if (
        y >= obstacleTop - obstacleHeight &&
        y <= obstacleTop + obstacleHeight &&
        x > obstacleLeft - obstacleWidth &&
        x < obstacleLeft + obstacleWidth
      ) {
        collisionF();
      }
      if (y >= obstacleTop + obstacleHeight - 1) {
        relieveF();
      }
    } else if (e.key == "w") {
      setY(y - 1);
      if (
        x > obstacleLeft - obstacleWidth &&
        x < obstacleLeft + obstacleWidth &&
        y > obstacleTop - obstacleHeight &&
        y <= obstacleTop + obstacleHeight
      ) {
        collisionF();
      }
      if (y <= obstacleTop - obstacleHeight + 1) {
        relieveF();
      }
    }
  };

  console.log(`this is X = ${x}`);
  console.log(`this is Y = ${y}`);
  console.log(obstacleLeft - obstacleWidth);

  return (
    <div
      className="map"
      style={{ background }}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="controls-wrapper">
        <div className="instructions title">Controls</div>
        <div className="instructions">Up: W</div>
        <div className="instructions">Right: D</div>
        <div className="instructions">Down: S</div>
        <div className="instructions">Left: A</div>
      </div>
      <div className="controls-wrapper">
        <div className="instructions title">Mission</div>
        <div className="instructions">Touch the blue square with the red one!</div>
      </div>
      <div className="controls-wrapper">
        <div className="instructions title">Troubleshoot</div>
        <div className="instructions">Click on the black background if the controls don't work!</div>
      </div>

      <Player xTunnel={x} yTunnel={y}></Player>
      <Obstacle
        styleTunnel={opacity}
        alertTunnel={alert}
        obstacleHeightTunnel={obstacleHeight}
        obstacleWidthTunnel={obstacleWidth}
        obstacleTopTunnel={obstacleTop}
        obstacleLeftTunnel={obstacleLeft}
      ></Obstacle>
    </div>
  );
}

export default Map1;
