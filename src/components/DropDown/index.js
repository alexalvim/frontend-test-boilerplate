import * as React from "react";

import { Select, LabelText } from "./styles";

export default ({ label, list, onChange, value }) => (
  <label>
    <LabelText>{label}</LabelText>
    {list && list.length > 0 ?
    <Select onChange={onChange} value={value}>
      <option value="">Selecione uma opção</option>
      {list.map((element, i) =>
        <option key={i} value={element.codigo}>{element.nome}</option>)}
    </Select> :
    <Select disabled>
      <option value="0">Prencha os outros campos para habilitar este</option>
    </Select>}
  </label>)