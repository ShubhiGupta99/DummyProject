import { createSlice } from '@reduxjs/toolkit';

const SignInSlice = createSlice({
    name:'SignInSlice',
    initialState:{
      userDetails : {},
        studyTypeList :[],
        responseForStudy :[]
    },
    reducers:{
        setUserDetails :(state,action)=>{
            state.userDetails = action.payload;
        },
        setStudyTypeList :(state,action)=>{
            state.studyTypeList = action.payload;
        },
        setResponseForStudy :(state,action)=>{
            state.responseForStudy = action.payload;
        }
    }
})


export const {setUserDetails,setStudyTypeList,setResponseForStudy} = SignInSlice.actions
export default SignInSlice.reducer
