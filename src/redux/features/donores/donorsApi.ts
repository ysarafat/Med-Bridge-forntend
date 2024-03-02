import baseAPi from "@/redux/api/baseApi";

export const donorsApi = baseAPi.injectEndpoints({
  endpoints: (builder) => ({
    getDonors: builder.query({
      query: () => `/all-donor`,
      providesTags: ["Donor"],
    }),
    getSingleDonor: builder.query({
      query: (email) => `/donor/${email}`,
      providesTags: ["Donor"],
    }),
    addDonors: builder.mutation({
      query: (data) => ({
        url: "/add-donor",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Donor"],
    }),
    updateDonorAmount: builder.mutation({
      query: ({ email, totalAmount, post }) => ({
        url: `/update-donate-amount/${email}`,
        method: "PATCH",
        body: { totalAmount: totalAmount, post: post },
      }),
      invalidatesTags: ["Donor"],
    }),
  }),
});

export const {
  useAddDonorsMutation,
  useGetDonorsQuery,
  useGetSingleDonorQuery,
  useUpdateDonorAmountMutation,
} = donorsApi;
