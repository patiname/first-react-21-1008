import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: gray;
`;

const Pop = styled.div`
  width: 500px;
  height: 300px;
  background-color: lightgray;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  display: ${(props) => props.see};
`;

const Close = styled.div`
  cursor: pointer;
`;

export const Popup = () => {
  const [show, setShow] = useState("none");

  //   const onClickShow = () => {
  //     setShow("block");
  //   };

  return (
    <Wrap>
      <Box onClick={() => setShow("block")}>
        <h1>클릭하시오!</h1>
      </Box>

      <Pop see={show}>
        <Close onClick={() => setShow("none")}> X </Close>
      </Pop>
    </Wrap>
  );
};
