import * as React from "react";

class HomeContainer extends React.Component {
  render() {
    const ViewComponent = this.props.viewComponent;
    const {
      userStore:
      { brandsList,
        brandId,
        setBrandsList,
        setBrandId,
        modelsList,
        modelId,
        setModelsList,
        setModelId,
        yearsList,
        yearId,
        setYearsList,
        setYearId,
        setCarInfo,
        carInfo }
    } = this.props;
    const viewComponentProps = {
      brandsList,
      brandId,
      setBrandsList,
      setBrandId,
      modelsList,
      modelId,
      setModelsList,
      setModelId,
      yearsList,
      yearId,
      setYearsList,
      setYearId,
      setCarInfo,
      carInfo
    };

    return <ViewComponent {...viewComponentProps} />;
  }
}

export default HomeContainer;
