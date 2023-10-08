import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import RestService from '../Utils/RestService';
import APIConstants from '../Utils/APIConstants';
import {useDispatch, useSelector} from 'react-redux';
import {setResponseForStudy, setStudyTypeList} from './SignInSlice';
import UtilityService from '../Utils/UtilityService';
import * as NavigationService from '../Utils/NavigationService';
const SecondScreen = () => {

    const [studyType, setStudyType] = useState('');
    let studyTypeList = useSelector(store=>store.SignInSlice.studyTypeList);
    let responseForStudy = useSelector(store=>store.SignInSlice.responseForStudy);
    const dispatch = useDispatch();

    function addStudyType() {
        RestService.postJSON(APIConstants.getUrls().users.createStudyType, {
            studyType: studyType
        }).then(response => {
          console.log("created");
        }).catch(err => {

        })
    }

    function moreStudyType(){
        if(!UtilityService.checkEmpty(studyType)) {
            addStudyType()
            let newList = [...studyTypeList, studyType];
            dispatch(setStudyTypeList(newList));
            setStudyType('');
        }
    }

    function getResponses(){
        RestService.getJSON(APIConstants.getUrls().users.getStudyType).then(res => {
            if(!UtilityService.checkEmpty(res)){
               dispatch(setResponseForStudy(res?.data?.data))
                NavigationService.navigate('ThirdScreen')
            }
        }).catch(err => {
            // NavigationService.navigate('ThirdScreen')
        });
    }

    return (
        <View style={{ height: '100%', width: '100%', backgroundColor: 'white', padding: '5%' }}>
            <Text style={{ fontSize: 30, color: 'black' }}>Add Study Type</Text>
            <Text style={{ fontSize: 18 }}>{'and tell us more about yourself in \nas many points as you would want to'}</Text>
            {studyTypeList.map((stl)=>{
                return(<View style={{ marginTop: '5%', borderWidth: 1, borderRadius: 15,height:40,justifyContent:'center',paddingLeft:10 }} >
                    <Text>
                        {stl}
                    </Text>
                </View>)
            })}
            <TextInput
                style={{ marginTop: '5%', borderWidth: 1, borderRadius: 15 }}
                placeholder={'Your response here'}
                onChangeText={(text) => setStudyType(text)}
                // onEndEditing={() => {
                //     addStudyType()
                // }}
            />
            <TouchableOpacity style={{ borderWidth: 1, backgroundColor: '#F1F1F1', borderRadius: 10, height: 40, marginTop: '5%', width: 80, alignItems: 'center', justifyContent: 'center' }}
            onPress={()=>{moreStudyType()}}><Text style={{ fontSize: 15 }}>{'+ more'}</Text></TouchableOpacity>
            <View style={{ position: 'absolute', bottom: '3%', flexDirection: 'row', width: '100%', justifyContent: 'flex-end' }}>
                <TouchableOpacity style={{ borderWidth: 1, backgroundColor: '#F1F1F1', borderRadius: 10, height: 40, marginTop: '5%', width: 100, alignItems: 'center', justifyContent: 'center'}}
                onPress={()=>NavigationService.goBack()}><Text style={{ fontSize: 15 }}>{'< Go Back'}</Text></TouchableOpacity>
                <TouchableOpacity style={{
                    borderWidth: 1, backgroundColor: studyTypeList.length==0 ?'#E1E1E1' :'#9747FF', borderRadius: 10, height: 40, marginTop: '5%', width: 80, alignItems: 'center', justifyContent: 'center', marginLeft: '5%' }}
                onPress={()=>{getResponses()}}><Text style={{ fontSize: 15 }}>{'Proceed'}</Text></TouchableOpacity>
            </View>
        </View>
    );
}

export default SecondScreen;
