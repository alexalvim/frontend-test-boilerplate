import styled from "styled-components";

import { mainColor, lightestColor } from "../../colors";
import { defaultSpace, doubleSpace } from "../../spaces";
import { fontLarge, fontMedium } from "../../typograph";

const Container = styled.div`
  align-items: center;
  background-image: linear-gradient(${mainColor}, ${lightestColor}, ${mainColor});
  display: flex;
  height: 100%;
  justify-content: center
  padding: ${doubleSpace};
  width: 100%;
`;

const MainWrapper = styled.div`
  background-color: ${mainColor};
  border-radius: 4px;
  max-width: 500px;
  padding: ${doubleSpace};
  width: 100%;
`;

const Title = styled.h1`
  color: ${lightestColor};
  font-size: ${fontLarge};
  margin-bottom: ${defaultSpace};
  text-align: center;
`;

const Paragraph = styled.p`
  color: ${lightestColor};
  font-size: ${fontMedium};
  margin-bottom: ${defaultSpace};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${defaultSpace};
`;

export {
  Container,
  MainWrapper,
  Title,
  Paragraph,
  ButtonWrapper,
}