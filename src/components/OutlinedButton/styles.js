import styled from "styled-components";

import { mainColor, lightestColor } from "../../colors";
import { defaultSpace, doubleSpace } from "../../spaces";
import { fontMedium } from "../../typograph";

const Button = styled.button`
  background-color: ${lightestColor};
  border: solid 2px ${mainColor};
  border-radius: 4px;
  color ${mainColor};
  cursor: pointer;
  font-size: ${fontMedium}
  padding: ${defaultSpace} ${doubleSpace};

  &:disabled {
    opacity: .75;
  }
`;


export {
  Button
}