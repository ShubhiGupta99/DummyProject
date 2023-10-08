import {ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import * as NavigationService from '../Utils/NavigationService';
import UtilityService from '../Utils/UtilityService';
// import RestService from '../Utils/RestService';
// import APIConstants from '../Utils/APIConstants';

const ThirdScreen = () => {

    const [studyType, setStudyType] = useState('');
    const data = ["response 1", "response 2", "response 3"];
    let responseForStudy = useSelector(store=>store.SignInSlice.responseForStudy);



    return (

        <View style={{ height: '100%', width: '100%', backgroundColor: 'white', padding: '5%' }}>
            <Text style={{ fontSize: 30, color: 'black' }}>{'Your Response'}</Text>
            <Text style={{ fontSize: 18 }}>{'You have shared your responses as below:'}</Text>
            <ScrollView>
            {!UtilityService.checkEmpty(responseForStudy)?
            <View>
                {responseForStudy.map((value, index) => {
                    return <Text style={{ fontSize: 20 }}>{"- " + value.studyType}</Text>
                })}
            </View>:null}
            </ScrollView>
            {/*<TouchableOpacity style={{ borderWidth: 1, backgroundColor: '#F1F1F1', borderRadius: 10, height: 40, marginTop: '5%', width: 80, alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontSize: 15 }}>{'+ more'}</Text></TouchableOpacity>*/}
            <View style={{ position: 'absolute', bottom: '3%', flexDirection: 'row', width: '100%', justifyContent: 'flex-end' }}>
                <TouchableOpacity style={{ borderWidth: 1, backgroundColor: '#F1F1F1', borderRadius: 10, height: 40, marginTop: '5%', width: 100, alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontSize: 15 }}
                onPress={()=>NavigationService.goBack()}>{'< Go Back'}</Text></TouchableOpacity>
                <TouchableOpacity style={{ borderWidth: 1, backgroundColor: '#E1E1E1', borderRadius: 10, height: 40, marginTop: '5%', width: 80, alignItems: 'center', justifyContent: 'center', marginLeft: '5%' }}><Text style={{ fontSize: 15 }}>{'Proceed >'}</Text></TouchableOpacity>
            </View>
        </View>

    );
}

export default ThirdScreen;
