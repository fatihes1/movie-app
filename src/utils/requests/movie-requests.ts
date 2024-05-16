import axios from 'axios'
import {ApiResponse} from "@/types/response-types.ts";

const API_URL = 'https://www.omdbapi.com/' || ''

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const API_KEY: string = import.meta.env.VITE_OMDB_API_KEY || ''

export function getMoviesRequest(search: string, page: number = 1) {
  return axios.get<ApiResponse>(`${API_URL}`, {
    params: {
      s: search,
      apikey: API_KEY,
      page
    },
  })
}
