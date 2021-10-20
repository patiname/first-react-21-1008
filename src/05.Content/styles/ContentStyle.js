import styled from "styled-components";

export const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor};
`;

export const ConWrap = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

export const Con = styled.div`
  width: 420px;
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.4);
  background-color: ${(props) => props.bgColor};
`;

export const Bg = styled.div`
  height: 400px;
`;

export const ItemWrap = styled.div`
  padding: 20px;
  color: ${(props) => props.color};
`;

export const Title = styled.h3`
  font-size: 26px;
  font-weight: 700;
`;

export const Desc = styled.p`
  margin-top: 20px;
  line-height: 24px;
  opacity: 0.7;
  font-weight: 200;
`;
