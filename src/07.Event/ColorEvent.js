// import { useState } from "react";
// import styled from "styled-components";

import { useState } from "react";
import styled from "styled-components";

// const Box = styled.div`
//   width: 300px;
//   height: 300px;
//   background-color: ${(props) => props.bgColor};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 50px;
// `;

// export const ColorEvent = () => {
//   const [color, setColor] = useState("pink");
//   const [num, setNum] = useState(0);
//   console.log(num);

//   const onClickColor = () => {
//     if (num === 0) {
//       setColor("deeppink");
//       setNum(1);
//     } else if (num === 1) {
//       setColor("pink");
//       setNum(0);
//     }
//   };

//   return (
//     <Box bgColor={color} onClick={onClickColor}>
//       <h2>날 클릭해줘!</h2>
//     </Box>
//   );
// };

// 1.useState정의하기
// 2.이벤트 정의하기

const Heart = styled.span`
  font-size: 20px;
  color: red;
`;

export const ColorEvent = () => {
  const [heart, setHeart] = useState("♡");
  const [num, setNum] = useState(0);

  const onClickLike = () => {
    if (num === 0) {
      setHeart("♥");
      setNum(1);
    } else if (num === 1) {
      setHeart("♡");
      setNum(0);
    }
  };

  return (
    <div>
      <Heart>{heart}</Heart> <span onClick={onClickLike}>좋아요</span>
    </div>
  );
};
