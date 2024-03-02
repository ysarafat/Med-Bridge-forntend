import baseAPi from "@/redux/api/baseApi";

const volunteerApi = baseAPi.injectEndpoints({
  endpoints: (builder) => ({
    addVolunteer: builder.mutation({
      query: (volunteerData) => ({
        url: "/add-volunteer",
        method: "POST",
        body: volunteerData,
      }),
      invalidatesTags: ["Volunteer"],
    }),
    allVolunteer: builder.query({
      query: () => "/all-volunteer",
      providesTags: ["Volunteer"],
    }),
  }),
});

export const { useAddVolunteerMutation, useAllVolunteerQuery } = volunteerApi;
