function Obstacle(props) {
  const style = {
    opacity: `${props.styleTunnel}`,
    height: `${props.obstacleHeightTunnel}rem`,
    width: `${props.obstacleWidthTunnel}rem`,
    top: `${props.obstacleTopTunnel}rem`,
    left: `${props.obstacleLeftTunnel}rem`,
  };

  return (
    <div style={style} className="obstacle">
      <div className="obstacle--text">{props.alertTunnel}</div>
    </div>
  );
}

export default Obstacle;
