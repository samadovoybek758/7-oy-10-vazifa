// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import likedReducer from './likedSlice'; 

// Redux store yaratish
const store = configureStore({
  reducer: {
    likedTracks: likedReducer, 
  },
});

export default store; 
