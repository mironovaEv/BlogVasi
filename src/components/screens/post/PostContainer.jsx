/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { GetPostThunkCreator } from '../../../reducers/reducer';
import Post from './Post';

function MiddlePostComponent(props) {
  const { id } = useParams();
  useEffect(() => {
    props.GetPostThunkCreator(id);
  }, []);
  return <Post {...props} />;
}

function MapStateToProps(state) {
  return {
    id: state.id,
    title: state.title,
    content: state.content,
    picture: state.picture,
    createdDate: state.createdDate,
  };
}
const PostContainer = connect(MapStateToProps, { GetPostThunkCreator })(MiddlePostComponent);

export default PostContainer;
