import { configureStore } from '@reduxjs/toolkit';
import SignInSlice from './Screens/SignInSlice';


export const store = configureStore({
    reducer: {
            SignInSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
            thunk: {
                extraArgument: {},
            }
        }),
});
