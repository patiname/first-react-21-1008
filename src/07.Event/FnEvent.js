import { useState } from "react";

export const FnEvent = () => {
  const [num, setNum] = useState(1);
  console.log(num);

  //   const onClickPlus = () => {
  //     setNum(num + 1);
  //   };

  //   const onClickMinus = () => {
  //     setNum(num - 1);
  //   };

  return (
    <div>
      <h1>함수형 컴포넌트</h1>
      <h3>{num}</h3>
      <button onClick={() => setNum(num + 1)}> + </button>
      <button onClick={() => setNum(num - 1)}> - </button>
    </div>
  );
};
