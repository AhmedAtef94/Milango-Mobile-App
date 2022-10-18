import {configureStore} from '@reduxjs/toolkit';
import repos from './reposSlice';

export default configureStore({
  reducer: {
    repos,
  },
});
