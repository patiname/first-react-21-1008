import styled from "styled-components";
import { Icons } from "../../GlobalStyled/GlobalStyle";

const SPlayBtn = styled.div``;

const Items = styled.div``;

export const PlayBtn = () => {
  const { random, preArrow, play, nextArrow, shear } = Icons;

  return (
    <SPlayBtn>
      <Items>{random}</Items>
      <Items>{preArrow}</Items>
      <Items>{play}</Items>
      <Items>{nextArrow}</Items>
      <Items>{shear}</Items>
    </SPlayBtn>
  );
};
