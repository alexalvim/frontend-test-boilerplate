import * as React from "react";

import { Button } from "./styles";

export default ({ label, onClick, disabled }) => (
  <Button onClick={onClick} disabled={disabled}>
    {label}
  </Button>)