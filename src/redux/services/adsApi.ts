import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adsApi = createApi({
    reducerPath: "adsAPi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
    endpoints: (builder) => ({
        getAdsById: builder.query({
            query: (id) => `advertisements/${id}`,
        }),
        // createPost: builder.mutation({
        //     query: (newPost) => ({
        //         url: `posts`,
        //         method: "POST",
        //         body: newPost
        //     })
        // }),
        getCarMarka: builder.query({
            query: () => `categories/`
        }),
        getModelsByMarka: builder.query({
            query: (marka) => `advertisements/?marka=${marka}`, 
          }),
    }),

})

export const {
    useGetAdsByIdQuery,
    useGetCarMarkaQuery,
    useGetModelsByMarkaQuery 
} = adsApi 