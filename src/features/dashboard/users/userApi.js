import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            providesTags: ['users'],
            query: () => 'users',
        }),
    }),
})

export const { useGetUsersQuery } = usersApi
