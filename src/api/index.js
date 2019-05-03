export const getBrands = (callback) => {
  return fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas',
          { method: 'GET',
            mode: 'cors',
            cache: 'default' })
      .then(function(response) {
        return response.json();
      })
      .then(function(list) {
        callback(list);
      })
}

export const getModels = (brandId, callback) => {
  return fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos`,
          { method: 'GET',
            mode: 'cors',
            cache: 'default' })
      .then(function(response) {
        return response.json();
      })
      .then(function(list) {
        callback(list.modelos);
      })
}

export const getYears = (brandId, modelId, callback) => {
  return fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos/${modelId}/anos`,
          { method: 'GET',
            mode: 'cors',
            cache: 'default' })
      .then(function(response) {
        return response.json();
      })
      .then(function(list) {
        callback(list);
      })
}

export const getValue = (brandId, modelId, yearId, callback) => {
  return fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos/${modelId}/anos/${yearId}`,
          { method: 'GET',
            mode: 'cors',
            cache: 'default' })
      .then(function(response) {
        return response.json();
      })
      .then(function(value) {
        callback(value);
      })
}