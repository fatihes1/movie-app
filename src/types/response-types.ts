export interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface ApiResponse {
    Search: Movie[];
    totalResults: string;
    Response: string;
}