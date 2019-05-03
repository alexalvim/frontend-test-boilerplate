// @flow

import { action, observable, decorate } from "mobx";
import remotedev from "mobx-remotedev";

const _defaultInitialState = {
  brandsList: [],
  brandId: 0,
  modelsList: [],
  modelId: 0,
  yearsList: [],
  yearId: 0,
  carInfo: {}
};

class UserStore {
  constructor(initialState) {
    this.setInitialState(initialState || _defaultInitialState);
  }

  setInitialState = initialState => {
    const { brandsList,
            brandId,
            modelsList,
            modelId,
            yearsList,
            yearId,
            carInfo } = initialState;

    this.brandsList = brandsList;
    this.brandId = brandId;
    this.modelsList = modelsList;
    this.modelId = modelId;
    this.yearsList = yearsList;
    this.yearId = yearId
    this.carInfo = carInfo;
  };

  setBrandsList = list => {
    this.brandsList = list;
  };

  setBrandId = id => {
    this.brandId = id;
  }

  setModelsList = list => {
    this.modelsList = list;
  };

  setModelId = id => {
    this.modelId = id;
  }

  setYearsList = list => {
    this.yearsList = list;
  };

  setYearId = id => {
    this.yearId = id;
  }

  setCarInfo = info => {
    this.carInfo = info;
  }
}

export default remotedev(
  decorate(UserStore, {
    brandsList: observable,
    brandId: observable,
    modelsList: observable,
    modelId: observable,
    yearsList: observable,
    yearId: observable,
    carInfo: observable,

    setBrandsList: action,
    setBrandId: action,
    setModelsList: action,
    setModelId: action,
    setYearsList: action,
    setYearId: action,
    setCarInfo: action,

    setInitialState: action
  })
);
