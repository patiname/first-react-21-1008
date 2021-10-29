import { Link } from "react-router-dom";
import styled from "styled-components";
import { router } from "../router";

const Wrap = styled.div``;

const MainBanner = styled.section`
  height: 800px;
  background: url("https://marketplace.canva.com/EAEhdDImdv4/1/0/1600w/canva-red-shoes-black-friday-big-sale-banner-lXGW5M6vVZg.jpg")
    no-repeat center / cover;
`;

const Section = styled.section`
  padding: 150px 350px;
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  width: 550px;
  height: 650px;
  &:nth-child(1) {
    background: url("http://image.auction.co.kr/itemimage/17/ef/d4/17efd41606.jpg")
      no-repeat center / cover;
  }
  &:nth-child(2) {
    background: url("http://img3.tmon.kr/cdn3/deals/2020/03/03/3187986206/3187986206_front_6df5e94b0f.jpg")
      no-repeat center / cover;
  }
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const Home = () => {
  return (
    <Wrap>
      <MainBanner />

      <Section>
        <Con>
          <Link to={router.sub1} />
        </Con>

        <Con>
          <Link to={router.sub1} />
        </Con>
      </Section>
    </Wrap>
  );
};
