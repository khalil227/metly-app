import { createSlice } from "@reduxjs/toolkit";

const GRIDITEM = [
    {
        key: '1',
        isApplied: false,
        city: '',
        bgColor: "#c16864"
    },
    {
        key: '2',
        isApplied: false,
        city: '',
        bgColor: "#6e7667"
    },
    {
        key: '3',
        isApplied: false,
        city: '',
        bgColor: '#4e6366'
    },
    {
        key: '4',
        isApplied: false,
        city: '',
        bgColor: '#e2ca8e'
    }
];

const initialState = {
  weather: GRIDITEM,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {
    
    addWeather(state, { payload }) {
      state.weather = state.weather.map((i) => {
        if (i.key == payload.key) {
          i.isApplied = true;
          i.city = payload.city;
          return i;
        }
        else return i;
    })
  
  },
    deleteWeather(state, {payload}){
      console.log(payload.city)
      state.weather = state.weather.map((i) => {
        
        if (i.key == payload.key) {
          i.isApplied = false;
          i.city = "";
          return i;
        }
        else return i;
    })

    }
}
});

export default weatherSlice.reducer;
export const {addWeather, deleteWeather} = weatherSlice.actions;
