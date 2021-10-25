// import { ClassComponent } from "./02.component/ClassComponent";
// import { FnComponent } from "./02.component/FnComponent";
// import { Food } from "./02.component/Food";
// import "./style.css";
// import Kakao from "./03.map/Kakao";
// import { MapFn } from "./03.map/MapFn";
// import { BaseStyle } from "./04.styledComponent/BaseStyle";
// import { StyeldCom } from "./04.styledComponent/StyeldCom";
// import { StyledCon } from "./05.Content/StyledCon";
// import { Music } from "./06.MusicApp/Music";
import { ClassEvent } from "./07.Event/ClassEvent";
import { ColorEvent } from "./07.Event/ColorEvent";
import { FnEvent } from "./07.Event/FnEvent";
import { GlobalStyle } from "./GlobalStyled/GlobalStyle";

// const foods = [
//   {
//     id: 0,
//     name: "피자",
//     side: "콜라",
//   },
//   {
//     id: 1,
//     name: "치킨",
//     side: "사이다",
//   },
//   {
//     id: 2,
//     name: "삼겹살",
//     side: "환타",
//   },
//   {
//     id: 3,
//     name: "파스타",
//     side: "레몬티",
//   },
//   {
//     id: 4,
//     name: "족발",
//     side: "미란다",
//   },
// ];

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <FnComponent foodName={"피자"} dinner={"샐러드"} menu={foods} />
      <ClassComponent nickName={"이정환"} age={24} menu={foods} />
      <Food menu={foods} /> */}
      {/* 2일차  */}

      {/* <MapFn /> */}
      {/* <Kakao /> */}
      {/* 3일차 */}

      {/* <BaseStyle /> */}
      {/* 4일차 */}

      {/* <StyeldCom /> */}
      {/* <StyledCon /> */}
      {/* 5일차 */}

      {/* <Music /> */}
      {/* 6일차*/}

      {/* <ClassEvent /> */}
      {/* <FnEvent /> */}
      <ColorEvent />
    </>
  );
}

export default App;
