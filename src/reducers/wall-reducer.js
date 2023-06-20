import { wallApi } from '../api/wallApi';

const GET_POSTS = 'GET_POSTS';

const initialState = {
  posts: [],
};

const wallReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case GET_POSTS:
      newState.posts = action.posts;
      return newState;
    default:
      return newState;
  }
};

export function GetPostsActionCreator(posts) {
  return { type: GET_POSTS, posts };
}

export function GetPostsThunkCreator() {
  return (dispatch) => {
    wallApi.getPosts().then((resp) => {
      if (resp) {
        dispatch(GetPostsActionCreator(resp.posts));
      }
    });
  };
}

export default wallReducer;
