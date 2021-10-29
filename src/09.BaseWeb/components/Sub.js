import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 200px 450px;
`;

const CoverBg = styled.div`
  width: 50%;
  height: 600px;
  background: url(${(props) => props.bgImg}) no-repeat center / cover;
`;

const ConWrap = styled.div`
  width: 45%;
  margin-left: 80px;
  height: 600px;
`;

const Title = styled.h3`
  font-size: 50px;
  font-weight: 600;
  margin: 50px 0 50px 0;
`;

const Desc = styled.p`
  line-height: 1.5em;
  font-size: 18px;
`;

export const Sub = ({ bg, title, desc }) => {
  console.log(bg, title);
  return (
    <Wrap>
      <CoverBg bgImg={bg} />
      <ConWrap>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </ConWrap>
    </Wrap>
  );
};
