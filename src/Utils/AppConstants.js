import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const appConstants = {
    width,
    height,
    OS: Platform.OS,
    version: Platform.Version,
    apisauce: 'APISAUCE',
    fetch: 'FETCH',
    panelGuid : "75a22a9e-d0e4-4547-af6b-6156bb0760eb"

};

export default appConstants;
