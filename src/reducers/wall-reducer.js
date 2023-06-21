import { wallApi } from '../api/wallApi';

const GET_POSTS = 'GET_POSTS';

const initialState = {
  posts: [],
  currentPage: 0,
  totalCountPage: 0,
  pageSize: 0,
};

const wallReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case GET_POSTS:
      newState.posts = action.posts;
      newState.currentPage = action.currentPage;
      newState.totalCountPage = action.totalCountPage;
      newState.pageSize = action.pageSize;
      return newState;
    default:
      return newState;
  }
};

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

export default wallReducer;
