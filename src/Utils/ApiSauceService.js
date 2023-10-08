import {create} from 'apisauce';
import UtilityService from './UtilityService';
// import StorageService from './StorageService';
import APIConstants from './APIConstants';
import AppConstants from './AppConstants';


class ApiSauceService {
    api = create({
        baseURL: APIConstants.baseUrl,
        timeout: 1800,
    });

    addRequestTransform() {
        // this.api.addRequestTransform((request) => {
        //     if (UtilityService.getAuthToken() != null) {
        //         request.headers[AppConstants.REQUEST_HEADERS.AUTH_HEADER] = UtilityService.getAuthToken();
        //     }
        //
        // });
        this.api.setHeader("Authorization", `Bearer ${ UtilityService.getAuthToken()}`);
    }

    postJSON(url, data = {}, params = []) {
        this.api.setHeader("Authorization", `Bearer ${ UtilityService.getAuthToken()}`);

        url = this.prepareData(url, params);
        console.log("POST :: ", url, " :: payload :: ", data);

        return this.api
            .post(url, data)
            .then((response) => {
                this.handleResponseProblems(response);
                if(response.ok) {
                    return response.data
                }
                throw Error(JSON.stringify(response));
            })
            .catch((error) => {

                throw error;
            });
    }



    getJSON(url, params = []) {
        this.api.setHeader("Authorization", `Bearer ${ UtilityService.getAuthToken()}`);
        url = this.prepareData(url, params);
        console.log("GET :: ", url);
        return this.api
            .get(url)
            .then((response) => {
                this.handleResponseProblems(response);
                if (response.ok) {
                    return response;
                }
                throw Error(JSON.stringify(response));
            })
            .catch((error) => {

                throw error;
            });
    }

    get(url, headers, responseType, params = {}) {
        url = this.prepareData(url, params);
        console.log("GET :: ", url);
        return this.api
            .get(url, {}, {headers})
            .then((response) => {
                this.handleResponseProblems(response);
                if(response.ok) {
                    return response.data;
                }
                throw Error(JSON.stringify(response));
            })
            .catch((error) => {
                throw error;
            });
    }



    postMultipart(url, data, config, params = {}) {
        url = this.prepareData(url, params);
        return this.api
            .post(url, data, config)
            .then((response) => response)
            .catch((error) => {
                console.log(error);
            });
    }

    prepareData(url, params) {
        let paramString = '';
        Object.entries(params).map(([key, value]) => {
            paramString = `${paramString + key}=${value}&`;
            return null;
        });
        paramString = paramString.substring(0, paramString.length - 1);
        if (paramString.length > 0) {
            url = `${url}?${paramString}`;
        }
        return url;
    }

    handleResponseProblems(response) {
        const {problem} = response;
        if(problem != null) {
            console.log("Request problem is", problem, JSON.stringify(response));
        }
        if (response.status === 401) {
            UtilityService.setAuthToken(null);
        }
        switch (problem) {
            case 'CLIENT_ERROR':
                throw response.originalError;
                break;
            case 'SERVER_ERROR':
                throw response.originalError;
                break;
            case 'TIMEOUT_ERROR':
                throw response.originalError;
                break;
            case 'CONNECTION_ERROR':
                throw response.originalError;
                break;
            case 'NETWORK_ERROR':
                throw response.originalError;
                break;
            case 'CANCEL_ERROR':
                throw response.originalError;
                break;
        }
    }
}

const apiSauceService = new ApiSauceService();
export default apiSauceService;
