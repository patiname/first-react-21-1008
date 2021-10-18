import styled from "styled-components";
import { MainColor } from "../GlobalStyled/GlobalStyle";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Con = styled.div`
  width: 350px;
  border: 3px solid black;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
`;

const BgImg = styled.div`
  width: 100%;
  height: 350px;
  background: url("https://image.shutterstock.com/image-vector/background-multicolor-gradient-colourful-color-260nw-1711154779.jpg")
    no-repeat center / cover;
`;

const Items = styled.div`
  padding: 20px;
  color: ${(props) => props.fontColor};
  h3 {
    font-size: 30px;
  }
  p {
    margin-top: 30px;
    opacity: 0.7;
  }
`;

const Sub = styled.h4`
  color: ${(props) => props.subColor};
`;

export const StyeldCom = () => {
  const { fontColor, subColor } = MainColor;

  return (
    <Wrap>
      <Con>
        <BgImg></BgImg>
        <Items fontColor={fontColor}>
          <h3>Title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            minima. Quis debitis commodi assumenda atque ipsa optio ipsam
            expedita error neque quo quasi quod, culpa quidem molestias repellat
            sapiente officia.
          </p>
          <Sub subColor={subColor}>
            본 카드는 타인에게 양도 또는 대여할수 없습니다.
          </Sub>
        </Items>
      </Con>
    </Wrap>
  );
};
