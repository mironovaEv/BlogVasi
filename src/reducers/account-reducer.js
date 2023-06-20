import { accountApi } from '../api/accountApi';

const LOGIN = 'LOGIN';

const initialState = {
  token: '',
  isAuth: false,
  email: '',
  fullNmae: '',
};

const accountReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case LOGIN:
      newState.token = action.token;
      newState.isAuth = true;
      return newState;
    default:
      return newState;
  }
};

export function LoginActionCreator(token) {
  return { type: LOGIN, token };
}

export function LoginThunkCreator(email, password) {
  return (dispatch) => {
    accountApi.Login(email, password).then((resp) => {
      if (resp) {
        dispatch(LoginActionCreator(resp.token));
      }
    });
  };
}

export default accountReducer;
