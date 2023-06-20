/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
import { configureStore } from '@reduxjs/toolkit';
import accountReducer from '../reducers/account-reducer';

export default configureStore({
  reducer: {
    account: accountReducer,
  },
});
