/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers/reducer';

export default configureStore({
  reducer: reducer,
});
