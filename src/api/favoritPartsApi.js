import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY } from "../constants";

export const favoritPartsApi = createApi({
  reducerPath: "favoritPartsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.favorit-parts.ru/hs/" }),
  endpoints: (builder) => ({
    getPartPrice: builder.query({
      query: ({ partNumber, brand, analogues }) => ({
        url: "hsprice/",
        params: {
          key: API_KEY,
          number: partNumber,
          brand: brand,
          analogues: analogues,
        },
      }),
    }),
  }),
});

export const { useGetPartPriceQuery, useLazyGetPartPriceQuery } =
  favoritPartsApi;
