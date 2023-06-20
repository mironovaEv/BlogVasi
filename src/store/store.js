/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
import { configureStore } from '@reduxjs/toolkit';
import accountReducer from '../reducers/account-reducer';
import wallReducer from '../reducers/wall-reducer';

export default configureStore({
  reducer: {
    account: accountReducer,
    wall: wallReducer,
  },
});
