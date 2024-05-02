import { stopSubmit } from 'redux-form';
import { profileAPI , loginAPI } from '../api/Api';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_LOGIN_USER_PROFILE = 'SET_LOGIN_USER_PROFILE';

const initialState = {
    isLogin: false,
    email: null,
    token: null,
    userProfile: null
};



const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                isAuth: true,
                email: action.email,
                token: action.token,
              
            };
        case SET_LOGIN_USER_PROFILE:
            console.log(action.profile)
            return {
                ...state,
                userProfile: action.profile,
            };
        default:
            return state;
    }
};


export const setAuthUserData = (token, email) => ({
    type: SET_AUTH_USER_DATA,
    token,
    email,
});

export const setLoginUserProfile = (profile) => ({
    type: SET_LOGIN_USER_PROFILE,
    profile,
});



export const getMyselfAuthData = (email, password) => async (dispatch) => {
    try {
        // Аутентифицируем пользователя
        let response = await loginAPI.login(email, password);
        if (response.data) {
            // Если аутентификация прошла успешно, получаем accessToken и refreshToken
            const { accessToken, refreshToken } = response.data;

            // Сохраняем токены в локальное хранилище (или где-то еще по вашему выбору)
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);

            // Задаем авторизационные данные в глобальном состоянии
            dispatch(setAuthUserData(accessToken, email));

            // Получаем профиль пользователя
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


    




export const login = (email, password) => async (dispatch) =>
{
    let responce = await loginAPI.login(email, password);
    if (responce.data.resultCode === 0) {
        dispatch(getMyselfAuthData());
    }
    else {
        let message = responce.data.messages.length > 0 ? responce.data.messages[0] : "Incorrect email or sosi";
            let action = stopSubmit("login" , {_error: message})
            dispatch(action)   
    }
}

export const logout = () => async (dispatch) =>
{
    let responce = await loginAPI.logout()
    if (responce.data.resultCode === 0) {
        dispatch(setAuthUserData(null , null , null));
    }
}


export default authReducer;