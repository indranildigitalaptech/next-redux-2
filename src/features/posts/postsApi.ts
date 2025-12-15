import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define Post type
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    tagTypes: ['Posts'],
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => 'posts',
            providesTags: ['Posts'],
        }),
        getPostById: builder.query<Post, number>({
            query: (id) => `posts/${id}`,
            providesTags: (result, error, id) => [{ type: 'Posts', id }],
        }),
        createPost: builder.mutation<Post, Partial<Post>>({
            query: (newPost) => ({
                url: 'posts',
                method: 'POST',
                body: newPost,
            }),
            invalidatesTags: ['Posts'],
        }),
    }),
});

// Export hooks for usage in functional components
export const { useGetPostsQuery, useGetPostByIdQuery, useCreatePostMutation } = postsApi;
