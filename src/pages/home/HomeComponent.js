import * as React from "react";

import { getBrands, getModels, getYears, getValue } from "../../api";
import DropDown from "../../components/DropDown";
import OutlinedButton from "../../components/OutlinedButton";
import RowInfo from "../../components/RowInfo";
import {  Container,
          MainWrapper,
          Title,
          Paragraph,
          ButtonWrapper } from "./styles"

class HomeComponent extends React.Component {

  componentWillMount() {
    const { setBrandsList } = this.props;
    getBrands(setBrandsList)
  }

  handleChangeBrand = (evt) => {
    const { setBrandId, setModelsList, setYearsList, setYearId, setModelId } = this.props;
    const brandId = evt.currentTarget.value;
    setYearId(0);
    setModelId(0);
    setBrandId(brandId);
    setYearsList([]);
    getModels(brandId, setModelsList)
  }

  handleChangeModel = (evt) => {
    const { setModelId, setYearsList, brandId, setYearId } = this.props;
    const modelId = evt.currentTarget.value;
    setYearId(0);
    setModelId(modelId);
    getYears(brandId, modelId, setYearsList)
  }

  handleChangeYear = (evt) => {
    const { setYearId } = this.props;
    const yearId = evt.currentTarget.value;
    setYearId(yearId);
  }

  calculateValue = () => {
    const { brandId, modelId, yearId, setCarInfo } = this.props;
    getValue(brandId, modelId, yearId, setCarInfo);
  }

  clearValues = () => {
    const { setBrandId,
            setModelId,
            setYearId,
            setCarInfo,
            setModelsList,
            setYearsList } = this.props;
    setBrandId(0);
    setModelId(0);
    setYearId(0);
    setCarInfo({});
    setModelsList([]);
    setYearsList([]);
  }

  render() {
    const { brandsList,
            modelsList,
            yearsList,
            carInfo,
            brandId,
            modelId,
            yearId } = this.props;
    const { handleChangeBrand,
            handleChangeModel,
            handleChangeYear,
            calculateValue,
            clearValues } = this;

    return (
      <Container>
        <MainWrapper>
          <Title>Mobiauto</Title>
          {carInfo && carInfo.AnoModelo ?
          <React.Fragment>
            <RowInfo label="Ano" value={carInfo.AnoModelo}/>
            <RowInfo label="Código FIPE" value={carInfo.CodigoFipe}/>
            <RowInfo label="Combustível" value={carInfo.Combustivel}/>
            <RowInfo label="Marca" value={carInfo.Marca}/>
            <RowInfo label="Mês Referencia" value={carInfo.MesReferencia}/>
            <RowInfo label="Modelo" value={carInfo.Modelo}/>
            <RowInfo label="Valor" value={carInfo.Valor}/>
          </React.Fragment> :
          <React.Fragment> 
            <Paragraph>
              Prencha os campos abaixo para que possamos fornecer o valor da carro na tabela FIPE:
            </Paragraph>
            <DropDown
              label="Marca"
              value={brandId}
              list={brandsList}
              onChange={handleChangeBrand}/>
            <DropDown
              label="Modelo"
              value={modelId}
              list={modelsList}
              onChange={handleChangeModel}/>
            <DropDown
              label="Ano"
              value={yearId}
              list={yearsList}
              onChange={handleChangeYear}/>
          </React.Fragment> }
          <ButtonWrapper>
            {carInfo && carInfo.AnoModelo ?
            <OutlinedButton
              label="Buscar novamente"
              onClick={clearValues}/> :
            <OutlinedButton
              label="Calcular"
              disabled={!brandId || !modelId || !yearId}
              onClick={calculateValue}/>}
          </ButtonWrapper>
        </MainWrapper>
      </Container>
    );
  }
}

export default HomeComponent;
