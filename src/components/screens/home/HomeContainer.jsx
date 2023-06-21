/* eslint-disable react/prop-types */

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { GetPostsThunkCreator } from '../../../reducers/wall-reducer';
import Home from './Home';

function MiddlePostsComponent(props) {
  let { number } = useParams();
  if (!number) number = 1;
  useEffect(() => {
    props.GetPostsThunkCreator(number);
  }, []);
  return <Home {...props} />;
}

function MapStateToProps(state) {
  return { posts: state.wall.posts, currentPage: state.wall.currentPage, totalCountPage: state.wall.totalCountPage };
}
const PostsContainer = connect(MapStateToProps, { GetPostsThunkCreator })(MiddlePostsComponent);

export default PostsContainer;
