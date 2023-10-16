import { configureStore} from '@reduxjs/toolkit';
import dataSlice from '../slice/Slice'

const store = configureStore({
  reducer: {
    dataSlice,
  },
});

export default store;