import {Movie} from "@/types/response-types.ts";
import React, {createContext, useEffect, useState} from "react";
import {getMoviesRequest} from "@/utils/requests/movie-requests.ts";
import {INITIAL_PER_PAGE} from "@/utils/constant/action-types.ts";

interface IMovieContext {
    movies: Movie[];
    setMovies: (value: Movie[]) => void;
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
    page: number;
    setPage: (value: number) => void;
    pageCount: number;
    setPageCount: (value: number) => void;
    searchFilter: string;
    setSearchFilter: (value: string) => void;
    typeFilter: string;
    setTypeFilter: (value: string) => void;
    onPageChange: (value: number) => void;
    showSearchDialog: boolean;
    setShowSearchDialog: (value: boolean) => void;
}

export const MovieContext = createContext<IMovieContext>({
    movies: [],
    setMovies: () => {},
    isLoading: false,
    setIsLoading: () => {},
    page: 1,
    setPage: () => {},
    pageCount: 0,
    setPageCount: () => {},
    searchFilter: 'pokemon',
    setSearchFilter: () => {},
    typeFilter: '',
    setTypeFilter: () => {},
    onPageChange: () => {},
    showSearchDialog: false,
    setShowSearchDialog: () => {}
});

export const MovieProvider = ({children}: {children: React.ReactNode}) => {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [searchFilter, setSearchFilter] = useState('pokemon');
    const [showSearchDialog, setShowSearchDialog] = useState<boolean>(false);
    const [typeFilter, setTypeFilter] = useState<string>('');

    useEffect(() => {
        setIsLoading(true)

        void getMoviesRequest(searchFilter,typeFilter, page).then((response) => {
            if (response.data.Response === 'False') {
                setMovies([])
                return
            }
            setMovies(response.data.Search)
            setPageCount(Math.ceil(Number(response.data.totalResults) / INITIAL_PER_PAGE))
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
            setIsLoading(false)
        })
    }, [page, searchFilter, typeFilter]);

    const onPageChange = (page: number) => {
        setPage(page);
    };

    return (
        <MovieContext.Provider value={{movies, setMovies, isLoading, setIsLoading, page, setPage, pageCount, setPageCount, searchFilter, setSearchFilter, onPageChange, showSearchDialog, setShowSearchDialog, typeFilter, setTypeFilter}}>
            {children}
        </MovieContext.Provider>
    )
}