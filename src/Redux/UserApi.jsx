import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Create the API slice
const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://randomuser.me/api' }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => '',
    }),
  }),
});

// Export the auto-generated hook for the `getUser` query endpoint
export const { useGetUserQuery } = userApi;

export default userApi;
