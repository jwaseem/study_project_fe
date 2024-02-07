import { configureStore } from '@reduxjs/toolkit';
import userDataReducer from './reducer/userDataReducer';

const store = configureStore({
    reducer:{
        data:userDataReducer
    }
});
export default store;