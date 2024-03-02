import baseAPi from "@/redux/api/baseApi";

const testimonialsApi = baseAPi.injectEndpoints({
  endpoints: (builder) => ({
    addTestimonials: builder.mutation({
      query: (data) => ({
        url: "/add-testimonials",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Testimonials"],
    }),

    getTestimonialsByPostId: builder.query({
      query: (id) => `/all-testimonials/${id}`,
      providesTags: ["Testimonials"],
    }),
  }),
});

export const { useAddTestimonialsMutation, useGetTestimonialsByPostIdQuery } =
  testimonialsApi;
