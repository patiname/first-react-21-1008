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
// import { AniEvent } from "./07.Event/AniEvent";
// import { AnimationEvent } from "./07.Event/AnimationEvent";
// import { ClassEvent } from "./07.Event/ClassEvent";
// import { ColorEvent } from "./07.Event/ColorEvent";
// import { FnEvent } from "./07.Event/FnEvent";
// import { Popup } from "./07.Event/Popup";
// import { UseRoute } from "./08.router/UseRoute";
import { BaseWebRoute } from "./09.BaseWeb/BaseWebRoute";
import { Login } from "./10.form/Login";
import { MainRouter } from "./10.form/MainRouter";
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
      {/* <ColorEvent /> */}
      {/* <AniEvent /> */}
      {/* <Popup /> */}
      {/* <AnimationEvent /> */}
      {/* 7일차 */}

      {/* <UseRoute /> */}
      {/* 8일차 */}

      {/* <BaseWebRoute /> */}
      {/* 9일차 */}

      {/* <Login /> */}
      <MainRouter />
    </>
  );
}

export default App;

// 1.아이디
// =>아이디 유무 파악 -> 유:아이디 성공, 무:아이디가 없습니다
// =>몇자 이상 작성하기 -> 이하: 메세지, 이상:""

// 2.패스워드
// =>패스워드 옳은지 아닌지 파악 -> 틀리다:"메세지", 성공:"로그인"
// =>몇자 이상 작성하기 -> 이하: 메세지, 이상:""
//=>react-hook-form
