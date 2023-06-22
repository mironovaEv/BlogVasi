import { accountApi } from '../api/accountApi';
import { postApi } from '../api/postApi';
import { wallApi } from '../api/wallApi';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const GET_POST = 'GET_POST';
const GET_POSTS = 'GET_POSTS';

const initialState = {
  accessToken: '',
  refreshToken: '',
  isAuth: false,
  id: '',
  title: '',
  content: '',
  picture: '',
  createdDate: '',
  posts: [],
  currentPage: 0,
  totalCountPage: 0,
  pageSize: 0,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case LOGIN:
      newState.accessToken = action.accessToken;
      newState.refreshToken = action.refreshToken;
      newState.isAuth = true;
      return newState;
    case LOGOUT:
      newState.accessToken = null;
      newState.refreshToken = null;
      newState.isAuth = false;
      return newState;
    case GET_POST:
      newState.isAuth = !!localStorage.getItem('accessToken');
      newState.id = action.id;
      newState.title = action.title;
      newState.content = action.content;
      newState.picture = action.picture;
      newState.createdDate = action.createdDate;
      return newState;
    case GET_POSTS:
      newState.isAuth = !!localStorage.getItem('accessToken');
      newState.posts = action.posts;
      newState.currentPage = action.currentPage;
      newState.totalCountPage = action.totalCountPage;
      newState.pageSize = action.pageSize;
      return newState;
    default:
      return newState;
  }
};

export function LoginActionCreator(accessToken, refreshToken) {
  return { type: LOGIN, accessToken, refreshToken };
}

export function LogoutActionCreator() {
  return { type: LOGOUT };
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
export function LogoutThunkCreator() {
  return (dispatch) => {
    accountApi.Logout().then((resp) => {
      if (resp) {
        console.log('123');
        dispatch(LogoutActionCreator(resp.accessToken, resp.refreshToken));
      }
    });
  };
}

export function GetPostActionCreator(id, title, content, picture, createdDate) {
  return { type: GET_POST, id, title, content, picture, createdDate };
}

export function GetPostThunkCreator(id) {
  return (dispatch) => {
    postApi.getPost(id).then((resp) => {
      if (resp) {
        dispatch(GetPostActionCreator(resp.id, resp.title, resp.content, resp.picture, resp.createdDate));
      }
    });
  };
}

export function GetPostsActionCreator(posts, currentPage, totalCountPage, pageSize) {
  return { type: GET_POSTS, posts, currentPage, totalCountPage, pageSize };
}

export function GetPostsThunkCreator(number) {
  return (dispatch) => {
    wallApi.getPosts(number).then((resp) => {
      if (resp) {
        dispatch(
          GetPostsActionCreator(
            resp.posts,
            resp.pagination.currentPage,
            resp.pagination.totalCountPage,
            resp.pagination.pageSize,
          ),
        );
      }
    });
  };
}

export function AddPostThunkCreator(data) {
  return (dispatch) => {
    wallApi.addPost(data).then((resp) => {
      if (resp.status === 200) {
        dispatch(GetPostsThunkCreator(1));
      }
    });
  };
}

export default reducer;
