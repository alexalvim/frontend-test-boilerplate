import styled from "styled-components";

import { mainColor, lightestColor } from "../../colors";
import { halfSpace, doubleSpace } from "../../spaces";
import { fontSmall, fontMedium } from "../../typograph";

const Container = styled.div`
  align-items: center;
  background-image: linear-gradient(${lightestColor}, ${mainColor});
  display: flex;
  height: 100%;
  justify-content: center
  padding: ${doubleSpace};
  width: 100%;
`;

const LabelText = styled.span`
  color: ${lightestColor};
  font-size: ${fontSmall};
`;

const Select = styled.select`
  font-size: ${fontMedium};
  margin-bottom: ${halfSpace};
  width: 100%;
`;


export {
  Container,
  LabelText,
  Select
}