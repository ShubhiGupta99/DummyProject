import {createNavigationContainerRef, StackActions} from '@react-navigation/native';


export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
    if (navigationRef.isReady()) {
        console.log(":::: :::: Navigating to ::", name);

        navigationRef.navigate(name, params);
    }
}

export function goBack() {
    if (navigationRef.isReady()) {
        navigationRef.goBack();
    }
}

export function push(name, params) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(StackActions.push(name, params));
    }
}

export function pop(count) {
    if (navigationRef.isReady()) {
        StackActions.pop(count);
    }
}

export function popToTop() {
    if (navigationRef.isReady()) {
        StackActions.popToTop();
    }
}

export function replace(name, params) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(StackActions.replace(name, params));
    }
}
