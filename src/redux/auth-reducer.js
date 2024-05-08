import { stopSubmit } from 'redux-form';
import { profileAPI , loginAPI } from '../api/Api';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_LOGIN_USER_PROFILE = 'SET_LOGIN_USER_PROFILE';
const SET_INFO = 'SET_INFO';
// const accessToken = localStorage.getItem('accessToken');
// const refreshToken = localStorage.getItem('refreshToken');
const initialState = {
    isLogin: false,
    email: null,
    userProfile:null,

};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                isLogin: action.isLogin,
                email: action.email,
            };
        case SET_INFO:
            const newState = {
                ...state,
                userProfile: { ...action.data }
                };
            localStorage.setItem('personalData', JSON.stringify(newState.userProfile));
            return newState;
        case SET_LOGIN_USER_PROFILE:
            return {
                ...state,
                userProfile: action.profile,
            };
        default:
            return state;
    }
};


export const setAuthUserData = (token, email , isLogin) => ({
    type: SET_AUTH_USER_DATA,
    token,
    email,
    isLogin,
});

export const setLoginUserProfile = (profile) => ({
    type: SET_LOGIN_USER_PROFILE,
    profile,
});

export const changePersonalInfo = (data) => {
    return {
      type: SET_INFO,
      data
    }
  }
  

export const setNewAcc = (email, password, confirm) => async (dispatch) => {
    try {
        // Аутентифицируем пользователя
        let response = await loginAPI.registration(email, password , confirm);
        if (response.data) {
            
            let responseUser = await profileAPI.getProfile();
            if (responseUser.data) {
                // Если запрос прошел успешно, сохраняем данные профиля в глобальном состоянии
                dispatch(setLoginUserProfile(responseUser.data));
            } else {
                console.error('Empty response from profile API:', responseUser);
            }
        } else {
            console.error('Unexpected response structure:', response);
        }
    } catch (error) {
        console.error('Ошибка аутентификации:', error);
    }
};
export const setNewInfo = (data) => async (dispatch) => {
    const fullData = {
        firstName: data.firstName,
        lastName: data.lastName,
        country: data.country,
        email: data.email,
        phone:data.phone,
        streetAddress: data.streetAddress,
        city: data.city,
        postalCode: data.postalCode,
    };

    console.log('Sending data:', fullData);

    try {
        let response = await profileAPI.setNewInfo(fullData);
        if (response) {
            dispatch(changePersonalInfo(fullData));
        } else {
            console.error('Unexpected response structure:', response);
        }
    } catch (error) {
        console.error('Ошибка аутентификации:', error);
        if (error.response) {
            console.error('Error response data:', error.response.data);
        }
    }
    
};



export const getMyselfAuthData = (email, password) => async (dispatch) => {
    try {
        let response = await loginAPI.login(email, password);
        console.log(response)
        if (response.data) {
            const { accessToken, refreshToken } = response.data;

            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
          
            dispatch(setAuthUserData(accessToken, email , true));

            let responseUser = await profileAPI.getProfile();
            if (responseUser.data) {
                console.log(responseUser.data)

                dispatch(setLoginUserProfile(responseUser.data));
            } else {
                console.error('Empty response from profile API:', responseUser);
            }
        } else {
            console.error('Unexpected response structure:', response);
        }
    } catch (error) {
        console.error('Ошибка аутентификации:', error);
    }
};



export const login = (email, password) => async (dispatch) => {
    const response = await loginAPI.login(email, password);
    if (response.data.resultCode === 0) {
        const newAccessToken = response.data.accessToken; // Предполагается, что токен возвращается в ответе
        localStorage.setItem('accessToken', newAccessToken); // Сохраняем новый токен

        // Обновляем состояние аутентификации
        dispatch(getMyselfAuthData());
    } else {
        const message = response.data.messages.length > 0 ? response.data.messages[0] : "Incorrect email or password";
        const action = stopSubmit("login", { _error: message });
        dispatch(action);
    }
};


export const logout = () => async (dispatch) =>
    {
        dispatch(setAuthUserData(null , null , false ));

        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
       
    }


export default authReducer;