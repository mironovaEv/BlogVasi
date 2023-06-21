import { accountApi } from '../api/accountApi';

const LOGIN = 'LOGIN';

const initialState = {
  accessToken: '',
  refreshToken: '',
  isAuth: false,
  email: '',
  fullNmae: '',
};

const accountReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case LOGIN:
      newState.accessToken = action.accessToken;
      newState.refreshToken = action.refreshToken;
      newState.isAuth = true;
      return newState;
    default:
      return newState;
  }
};

export function LoginActionCreator(accessToken, refreshToken) {
  return { type: LOGIN, accessToken, refreshToken };
}

export function LoginThunkCreator(email, password) {
  return (dispatch) => {
    accountApi.Login(email, password).then((resp) => {
      if (resp) {
        dispatch(LoginActionCreator(resp.accessTokentoken, resp.refreshToken));
      }
    });
  };
}

export default accountReducer;
