import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://api.weatherapi.com/v1/forecast.json',
  }),
  endpoints: (builder) => ({
    getWeatherByType: builder.query({
      query: (type) => `?key=8e255d412f424711aec105033221809&q=${type}&days=5`,
    }),
  }),
});

export const { useGetWeatherByTypeQuery } = weatherApi;