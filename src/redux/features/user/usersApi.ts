import baseAPi from "@/redux/api/baseApi";

export const userApi = baseAPi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (email) => ({
        url: `/user/${email}`,
      }),
    }),
  }),
});

export const { useGetUserQuery } = userApi;
