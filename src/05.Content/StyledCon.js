import styled from "styled-components";
import { contents } from "../api";
import { DarkMode } from "../GlobalStyled/GlobalStyle";
import {
  Wrap,
  ConWrap,
  Con,
  Bg,
  ItemWrap,
  Title,
  Desc,
} from "./styles/ContentStyle";

export const StyledCon = () => {
  const { fontColor, bgColor } = DarkMode;

  return (
    <Wrap bgColor={bgColor}>
      <ConWrap>
        {contents.map((con) => (
          <Con key={con.id}>
            <Bg
              style={{
                background: `url(${con.bgUrl}) no-repeat center / cover`,
              }}
            />
            <ItemWrap color={fontColor}>
              <Title>{con.title}</Title>
              <Desc>{con.desc}</Desc>
            </ItemWrap>
          </Con>
        ))}
      </ConWrap>
    </Wrap>
  );
};
