import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    Image,
    KeyboardAvoidingView,
    LogBox,
    Modal,
    Text,
    TextInput, ToastAndroid,
    TouchableOpacity,
    View,
} from 'react-native';
import RestService from '../Utils/RestService';
import APIConstants from '../Utils/APIConstants';
import UtilityService from '../Utils/UtilityService';
import * as NavigationService from '../Utils/NavigationService';
import {useDispatch} from 'react-redux';
import {setUserDetails,setStudyTypeList,setResponseForStudy} from './SignInSlice';
import AppConstants from '../Utils/AppConstants';


const SignInScreen = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setUserDetails({}));
        dispatch(setStudyTypeList([]));
        dispatch(setResponseForStudy([]));
    },[])
    function login() {
        RestService.postJSON(APIConstants.getUrls().users.login, {
                panelGuid: AppConstants.panelGuid,
                email: userId,
                password: password,
            },
            []).then((response) => {
                console.log(response);

            if (response !== null && response.data !== null) {
                   dispatch(setUserDetails(response.data))
                   NavigationService.navigate("SecondScreen");
                if (response.token !== null) {
                    UtilityService.setAuthToken(response.token?.access?.token);
                }
            }

        }).catch((error) => {
            console.log(error);
            ToastAndroid.show("Wrong Details entered",ToastAndroid.SHORT)
        });
    }



    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
            <KeyboardAvoidingView>
            <View style={{ width: '80%', marginTop: '25%', borderRadius: 25, alignItems: 'center', alignSelf: 'center', justifyContent: 'center', height: '70%', backgroundColor: '#F5F5F5' }}>
                <View style={{ width: '90%', height: '70%' }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black', marginBottom: '5%' }}>{'Sign In'}</Text>
                    <View style={{ alignItems: 'baseline', width: '100%' }}>
                        <Text style={{ color: 'black', fontSize: 20 }}>Email ID</Text>
                        <TextInput
                            style={{ width: '100%', fontSize: 15 }}
                            underlineColorAndroid="gray"
                            placeholder={"UserId"}
                            value={userId}
                            onChangeText={(userId) => setUserId(userId)}
                            onEndEditing={() => {

                            }}
                        />
                        <Text style={{ color: 'black', fontSize: 20 }}>Password</Text>
                        <TextInput
                            style={{ fontSize: 15, width: '100%' }}
                            placeholder={"Password"}
                            underlineColorAndroid="gray"
                            value={password}
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                            onEndEditing={() => {

                            }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', height: '20%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: 'lightgray', width: '40%', alignItems: 'center', justifyContent: 'center', borderRadius: 15, borderColor: '#9747FF', borderWidth: 1, height: 60 }}><Text style={{ color: 'black', fontSize: 20 }}>{'Button'}</Text></TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#9747FF', alignItems: 'center', justifyContent: 'center', borderRadius: 15, width: '40%', height: 60 }} onPress={()=>{login()}}><Text style={{ color: 'white', fontSize: 20 }}>{'Login'}</Text></TouchableOpacity>
                </View>
            </View>
            </KeyboardAvoidingView>
        </View>
    );
};

export default SignInScreen;
