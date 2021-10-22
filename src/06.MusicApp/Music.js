import styled from "styled-components";
import { MusicApi } from "../api";
import { Header } from "./components/Header";
import { PlayBarWrap } from "./components/PlayBarWrap";
import { PlayBtn } from "./components/PlayBtn";
import { TitleWrap } from "./components/TitleWrap";
import { UserWrap } from "./components/UserWrap";

const Wrap = styled.div`
  height: 100vh;
  background-color: #555;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ConWrap = styled.div`
  width: 375px;
  height: 667px;
  padding: 40px;
  background-color: #1d1d1d;
  border-radius: 30px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Cover = styled.div`
  width: 250px;
  height: 280px;
  margin: 30px 0 20px 0;
  border-radius: 30px;
`;

export const Music = () => {
  const { coverImg, title, subTitle, avatar, userName } = MusicApi;

  return (
    <Wrap>
      <ConWrap>
        <Header />

        <Cover
          style={{
            background: `url(${coverImg}) no-repeat center / cover`,
          }}
        />

        <TitleWrap title={title} subTitle={subTitle} />

        <PlayBarWrap />

        <PlayBtn />

        <UserWrap userName={userName} avatar={avatar} />
      </ConWrap>
    </Wrap>
  );
};
