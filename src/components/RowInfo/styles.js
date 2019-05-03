import styled from "styled-components";

import { lightestColor } from "../../colors";
import { defaultSpace, halfSpace } from "../../spaces";
import { fontMedium } from "../../typograph";

const Label = styled.span`
  color: ${lightestColor};
  font-size: ${fontMedium};
  font-weight: bold;
  margin-right: ${halfSpace};
`;

const Value = styled.span`
  color: ${lightestColor};
  font-size: ${fontMedium};
`;

const Row = styled.div`
  margin-bottom: ${defaultSpace};
`;

export {
    Row,
    Label,
    Value
}