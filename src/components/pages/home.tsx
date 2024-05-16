import {FC, useEffect, useRef, useState} from "react";
import {getMoviesRequest} from "@/utils/requests/movie-requests.ts";
import {Movie} from "@/types/response-types.ts";
import {MovieCard} from "@/components/common/movie-card.tsx";
import {Skeleton} from "@/components/ui/skeleton.tsx";
import {CustomPagination} from "@/components/common/custom-pagination.tsx";

interface HomeProps {
    search: string;
}

export const Home:FC<HomeProps> = ({ search }) => {
    const INITIAL_PER_PAGE = 10
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const fetchRef = useRef(0)
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
            setIsLoading(true)
            void getMoviesRequest(search, page).then((response) => {
                setMovies(response.data.Search)
                setPageCount(Math.ceil(Number(response.data.totalResults) / INITIAL_PER_PAGE))
            }).catch((error) => {
                console.log(error)
            }).finally(() => {
                setIsLoading(false)
                fetchRef.current = 1
            })
    }, [page, search]);

    const onPageChange = (page: number) => {
        setPage(page);
    };

    return (
        <>
            <div className={'container'}>
                <h1 className={'text-3xl text-start mt-5'}>The result listing for : "{search}"</h1>
            </div>
            {
                isLoading ? (
                    <div className={'flex mt-4 flex-wrap flex-row justify-center gap-x-5 gap-y-5 mt-4'}>
                        {
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                            [...Array(10)].map((_, index) => (
                                <div key={index} className={'w-1/6 h-72'}>
                                    <Skeleton className="h-72"/>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <div>
                        <div className={'flex flex-row gap-x-5 flex-wrap justify-center gap-y-5 mt-4'}>
                            {
                                movies.map((movie, index) => (
                                    <MovieCard key={index} movie={movie}/>
                                ))
                            }
                        </div>
                        <div>
                            <CustomPagination pageCount={pageCount} currentPage={page} onPageChange={onPageChange}/>
                        </div>
                    </div>
                )
            }
        </>
    )
};