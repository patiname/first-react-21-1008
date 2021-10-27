import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: gold;
  a {
    color: white;
  }
`;
const Logo = styled.div``;
const Nav = styled.div``;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to="/">Home</Link>
      </Logo>

      <Nav>
        <Link to="/">Home</Link>
        <Link to="/sub1">Sub1</Link>
        <Link to="/sub2">Sub2</Link>
      </Nav>
    </SHeader>
  );
};
