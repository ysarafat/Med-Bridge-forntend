import baseAPi from "@/redux/api/baseApi";

const commentsApi = baseAPi.injectEndpoints({
  endpoints: (builders) => ({
    addComment: builders.mutation({
      query: (data) => ({
        url: "add-comment",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Comments"],
    }),
    getComments: builders.query({
      query: () => "/all-comments",
      providesTags: ["Comments"],
    }),
  }),
});

export const { useAddCommentMutation, useGetCommentsQuery } = commentsApi;
