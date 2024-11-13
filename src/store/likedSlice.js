// src/store/likedSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const likedSlice = createSlice({
  name: 'likedTracks',
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const trackId = action.payload.id;
      const existingTrack = state.find(track => track.id === trackId);
      if (existingTrack) {
        return state.filter(track => track.id !== trackId); 
      } else {
        state.push(action.payload); 
      }
    },
  },
});

export const { toggleLike } = likedSlice.actions;
export default likedSlice.reducer;
