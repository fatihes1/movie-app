import axios from 'axios'
import {ApiResponse, MovieResponse} from "@/types/response-types.ts";

const API_URL = 'https://www.omdbapi.com/' || ''

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const API_KEY: string = import.meta.env.VITE_OMDB_API_KEY || ''

export function getMoviesRequest(search: string, typeFilter: string = "", page: number = 1) {
  return axios.get<ApiResponse>(`${API_URL}`, {
    params: {
      s: search,
      type: typeFilter,
      apikey: API_KEY,
      page
    },
  })
}

export function getMovieDetailRequest(id: string) {
  return axios.get<MovieResponse>(`${API_URL}`, {
    params: {
      i: id,
      apikey: API_KEY
    },
  })
}
