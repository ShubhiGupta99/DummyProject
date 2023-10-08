

class APIs {
    constructor() {
        this.baseUrl = 'https://dev-unipanel-api.azurewebsites.net/api/';


        this.urls = {

            users: {
                login: this.baseUrl + 'user/loginPanelist' ,
                createStudyType : this.baseUrl +'dummyuser/createStudyType',
                getStudyType : this.baseUrl +'dummyuser/getStudyType',
            },

        };
        this.getUrls = this.getUrls.bind(this);
    }

    getUrls() {
        return this.urls;
    }

    getBaseUrl() {
        return this.baseUrl;
    }


}

const APIConstants = new APIs();
export default APIConstants;
