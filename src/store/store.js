import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { weatherApi } from '../../features/api/weatherAPI'; 
import weatherSlice from "../../features/slice/weatherSlice";
import {persistReducer} from 'redux-persist';
import { combineReducers } from "@reduxjs/toolkit"; 
import AsyncStorage from "@react-native-async-storage/async-storage";

import thunk from 'redux-thunk';
const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  weather: weatherSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: {
    persistedReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(weatherApi.middleware),

});
export default store;
setupListeners(store.dispatch);
