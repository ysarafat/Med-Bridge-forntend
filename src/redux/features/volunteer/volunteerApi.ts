import baseAPi from "@/redux/api/baseApi";

const volunteerApi = baseAPi.injectEndpoints({
  endpoints: (builder) => ({
    addVolunteer: builder.mutation({
      query: (volunteerData) => ({
        url: "/add-volunteer",
        method: "POST",
        body: volunteerData,
      }),
    }),
    allVolunteer: builder.query({
      query: () => "/all-volunteer",
    }),
  }),
});

export const { useAddVolunteerMutation, useAllVolunteerQuery } = volunteerApi;
