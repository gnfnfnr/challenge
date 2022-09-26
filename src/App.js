import React, { useRef, useState } from "react";
import styled from "styled-components";

const MapBox = styled.div`
  width: 400px;
  height: 250px;
  overflow: hidden;
  position: relative;
`;
const MapImg = styled.img`
  position: absolute;
  left: ${(props) => props.imgL}px;
  top: ${(props) => props.imgT}px;
  cursor: pointer;
`;

function App() {
  const [imgL, setImgL] = useState(0);
  const [imgT, setImgT] = useState(0);
  const [curL, setCurL] = useState(0);
  const [curT, setCurT] = useState(0);
  const [mouseMove, setMouseMove] = useState(false);
  //드래그 시작
  const DragEvent = (event) => {
    // 현재 위치에서 마우스 위치로 이동
    setImgL(curL - event.nativeEvent.clientX);
    setImgT(curT - event.nativeEvent.clientY);
  };
  // 이미지 움직이기
  const MoveDrag = (event) => {
    event.preventDefault();
    setCurL(parseInt(event.nativeEvent.clientX + imgL));
    setCurT(parseInt(event.nativeEvent.clientY + imgT));
    return false;
  };

  return (
    <MapBox>
      <MapImg
        imgL={curL}
        imgT={curT}
        src={require("./map.png")}
        onMouseDown={(event) => {
          setMouseMove(true);
          DragEvent(event);
        }}
        onMouseMove={(event) => (mouseMove ? MoveDrag(event) : "")}
        onMouseUp={(event) => {
          setMouseMove(false);
        }}
      />
    </MapBox>
  );
}

export default App;
