import { postApi } from '../api/postApi';

const GET_POST = 'GET_POST';

const initialState = {
  id: '',
  title: '',
  content: '',
  picture: '',
  createdDate: '',
};

const postReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case GET_POST:
      newState.id = action.id;
      newState.title = action.title;
      newState.content = action.content;
      newState.picture = action.picture;
      newState.createdDate = action.createdDate;
      return newState;
    default:
      return newState;
  }
};

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

export default postReducer;
