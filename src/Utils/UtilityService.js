class UtilityService {
    authToken = {};
    sessionId = null;


    checkEmpty(obj) {
        if (obj === undefined || obj === null) {
            return true;
        }
        if (typeof obj === 'string' || typeof obj === 'number') {
            return obj.toString().trim().length === 0;
        }
        for (let key in obj) {
            if (hasOwnProperty.call(obj, key)) {
                return false;
            }
        }
        return true;
    }
    getAuthToken() {
        return this.authToken;
    }

    setAuthToken(token) {
        this.authToken = token;
    }



    getJSON(data) {
        console.log()
        let result = {};
        try {
            if (!this.checkEmpty(data)) {
                result = JSON.parse(data);
            }
            return result;
        } catch (e) {
            return result;
        }
    }

    getScreenWidth() {
        return SCREEN_WIDTH;
    }
    getScreenHeight() {
        return SCREEN_HEIGHT;
    }
    generateSessionId(terminalId) {
        this.sessionId = new Date().getTime() + "_" + getUnitDetailCache().unitId + "_" + terminalId;
        this.setSessionId(this.sessionId);
        return this.sessionId;
    }

    getSessionId() {
        return this.sessionId;
    }

    setSessionId(data) {
        return this.sessionId = data;
    }




    getSource() {
        return UtilityService.source;
    }

    setSource(value) {
        UtilityService.source = value;
    }




    clearUtility() {

    }


    setBrightness(value) {
        this.brightness = value;
    }

    getBrightness() {
        return this.brightness;
    }

    setCurrentScreen(value) {
        this.currentScreen = value;
    }

    getCurrentScreen() {
        return this.currentScreen;
    }



    getRoundOffValue(value) {
        return (value * 100) / 100;
    }


}

const utilityService = new UtilityService();
export default utilityService;
