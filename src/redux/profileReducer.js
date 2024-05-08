import {profileAPI } from "../api/Api";
import { stopSubmit } from 'redux-form';

const ADD_POST = 'ADD-POST';
const SET_PROFILE_IMAGE = 'SET-PROFILE-IMAGE'
const SET_STATUS = 'SET-STATUS';
const SET_PROFILE = 'SET-PROFILE';
const DELETE_POST = 'DELETE-POST';
const SET_INFO = 'SET_INFO';
// import store from "./state";

let initialState = {
    profile: null,
}



const profileReducer = ( state = initialState , action) => {
       
    switch(action.type ) {
        case SET_PROFILE: 
            return{
                ...state,
               profile: action.profile
            }
        
        case SET_INFO:
            const newState = {
                ...state,
                profile: { ...action.data }
                };
            localStorage.setItem('personalData', JSON.stringify(newState.profile));
            return newState;
        case SET_PROFILE_IMAGE: {
            return {
                ...state,
                profile: {...state.profile , photos: action.photos}   
            }
        }   
        default:
            return state;
    }   
}


   
export const setUserProfile = (profile) => {
    return {
        type:SET_PROFILE,
        profile,
    }
}

export const changePersonalInfo = (data) => {
    return {
      type: SET_INFO,
      data
    }
  }
  


// export const getUserProfile = (userId) => {
//     return (dispatch) => {
//         profileAPI.getUserProfile(userId).then(data => {
//             dispatch(setUserProfile(data));
//         })
//     }
// }
export const getUserProfile = (customerId) => async (dispatch) =>{
    let responce = await profileAPI.getProfile(customerId)
    dispatch(setUserProfile(responce.data));
}


export const setProfileImage = (photos) => {
    return{
        type: SET_PROFILE_IMAGE,
        photos
    }
    
}

export const saveProfileImage = (image) => async (dispatch) =>{
    let responce = await profileAPI.setProfileImage(image)
    if(responce.data.resultCode === 0){
        dispatch(setProfileImage(responce.data.data.photos))
    }
}

export const changeProfileInfo = (profile) => async (dispatch , getState) => {
    const customerId = getState().auth.customerId
    let responce = await profileAPI.saveProfileChanges(profile)
    if (responce.data.resultCode === 0){
        dispatch(getUserProfile(customerId))
    }
    else{
        let parsedArray = responce.data.messages[0].split('->')
        let action = stopSubmit("editProfile" , {_error:  responce.data.messages[0]})
        dispatch(action)   
        return Promise.reject(responce.data.messages[0])
    }
}


export default profileReducer;