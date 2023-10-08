import UtilityService from './UtilityService';
import AppConstants from './AppConstants';
import ApiSauceService from './ApiSauceService';

class RestService {
  constructor() {
    this.service = AppConstants.apisauce;

  }

  postJSON(url, data = {}, params = []) {

      return ApiSauceService.postJSON(url, data, params);

  }


  getJSON(url, params = []) {

      return ApiSauceService.getJSON(url, params);
    }


  constructURL(url, pathVariablesJSON, requestParams) {
    if (
      !UtilityService.checkEmpty(url) &&
      !UtilityService.checkEmpty(pathVariablesJSON)
    ) {
      for (const key of Object.keys(pathVariablesJSON)) {
        url = url.replace('{' + key + '}', pathVariablesJSON[key]);
      }
    }
    let params = [];
    if (
      !UtilityService.checkEmpty(url) &&
      !UtilityService.checkEmpty(requestParams)
    ) {
      Object.keys(requestParams).map(key => {
        params.push(key + '=' + requestParams[key]);
      });
      url += '?' + params.join('&');
    }
    return url;
  }
}

const restService = new RestService();
export default restService;
