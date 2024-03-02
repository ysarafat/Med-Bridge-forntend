import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseAPi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ass-6-gamma.vercel.app/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `${token}`);
      }
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["Post", "Donor", "Volunteer", "Testimonials", "Comments"],
});

export default baseAPi;
// https://ass-6-gamma.vercel.app/api/v1
