import baseAPi from "@/redux/api/baseApi";

export const supplyPostApi = baseAPi.injectEndpoints({
  endpoints: (builder) => ({
    getPost: builder.query({
      query: () => `/all-post`,
      providesTags: ["Post"],
    }),
    getSinglePost: builder.query({
      query: (id) => `/post/${id}`,
      providesTags: ["Post"],
    }),
    addPost: builder.mutation({
      query: (postData) => ({
        url: "/add-post",
        method: "POST",
        body: postData,
      }),
      invalidatesTags: ["Post"],
    }),
    updatePost: builder.mutation({
      query: ({ id, postData }) => ({
        url: `/update-post/${id}`,
        method: "PATCH",
        body: postData,
      }),
      invalidatesTags: ["Post"],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/delete-post/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useAddPostMutation,
  useGetPostQuery,
  useGetSinglePostQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
} = supplyPostApi;
