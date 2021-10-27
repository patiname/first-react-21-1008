import { Helmet } from "react-helmet-async";
import styled from "styled-components";

const Section = styled.section`
  height: 700px;
  background-color: gray;
  h3 {
    margin-top: 100px;
    font-size: 100px;
  }
`;

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>홈</title>
      </Helmet>

      <Section>
        <h3>title</h3>
        <p>sub titlesdfghgfdfghjhgfghjh</p>
      </Section>
    </div>
  );
};
