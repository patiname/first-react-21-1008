import { useState } from "react";
import styled, { keyframes } from "styled-components";

const boxMove = keyframes`
    0%{
        transform: translate(0,0);
    }
    50%{
        transform: translate(200px,200px);
    }
    100%{
        transform: translate(400px,0);
    }
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: teal;
  animation: 1s ${(props) => props.aniName} forwards;
`;

export const AnimationEvent = () => {
  const [move, setMove] = useState("");

  return (
    <div>
      <button onClick={() => setMove(boxMove)}>시작!</button>
      <button onClick={() => setMove("")}>재시작!</button>
      <Box aniName={move}></Box>
    </div>
  );
};
