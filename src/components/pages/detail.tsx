import {FC, useContext, useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import {DetailPageUrlParams} from "@/types/url-types.ts";
import {Navbar} from "@/components/common/navbar.tsx";
import {getMovieDetailRequest} from "@/utils/requests/movie-requests.ts";
import {MovieResponse} from "@/types/response-types.ts";
import {Clock} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {MovieContext} from "@/providers/movie-provider.tsx";
import {CustomCarousel} from "@/components/common/custom-carousel.tsx";
import {Loader} from "@/components/common/loader.tsx";

export const Detail:FC = () => {
    const { movieId } = useParams<DetailPageUrlParams>()
    const fetchRef = useRef(0)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [movie, setMovie] = useState<MovieResponse>({})
    const { movies } = useContext(MovieContext)

    useEffect(() => {
        if (!movieId) return
            setIsLoading(true)
            void getMovieDetailRequest(movieId).then((response) => {
                setMovie(response.data)
            }).catch((error) => {
                console.log(error)
            }).finally(() => {
                fetchRef.current = 1
                setIsLoading(false)
            })
    }, [movieId]);

    return (
        <div className={'bg-east-bay-900 min-h-dvh h-full pb-4'}>
            <Navbar/>
            <div className={'container pt-10 h-full'}>
                {
                    isLoading ? (<Loader />) : (
                        <>
                            <div className={'flex flex-row justify-around gap-x-5'}>
                                <div className={'w-1/4'}>
                                    <img src={movie.Poster} alt={'movie-poster'} className={'w-full rounded-xl'}/>
                                </div>
                                <div className={'w-3/4'}>
                                    <div className={'flex flex-col'}>
                                        <h1 className={' text-tacao-400 font-medium text-3xl'}>
                                            {movie.Title}
                                        </h1>
                                        <div
                                            className={'flex flex-row gap-x-6 text-2xl text-kimberly-500 pt-4 border-b pb-3 border-kimberly-600'}>
                                            <div className={'flex flex-row gap-x-2'}>
                                                <p>IMDB</p>
                                                <p>{movie.imdbRating}/10 ({movie.imdbVotes})</p>
                                            </div>
                                            <div className={'flex flex-row gap-x-2'}>
                                                <p>Year</p>
                                                <p>{movie.Year}</p>
                                            </div>
                                            <div className={'flex flex-row gap-x-2 items-center'}>
                                                <Clock/>
                                                <p>{movie.Runtime}</p>
                                            </div>
                                        </div>
                                        <div className={'flex flex-row pt-4'}>
                                            <div className={'flex flex-col gap-y-2 w-2/3 text-xl'}>
                                                <div className={'flex flex-row gap-x-3'}>
                                                    <h2 className={'text-kimberly-500'}>Genre</h2>
                                                    <p className={'text-tacao-300'}>{movie.Genre}</p>
                                                </div>
                                                {
                                                    movie.Director !== 'N/A' && (
                                                        <div className={'flex flex-row gap-x-3'}>
                                                            <h2 className={'text-kimberly-500'}>Director</h2>
                                                            <p className={'text-tacao-300'}>{movie.Director}</p>
                                                        </div>
                                                    )
                                                }
                                                <div className={'flex flex-row gap-x-3'}>
                                                    <h2 className={'text-kimberly-500'}>Actors</h2>
                                                    <p className={'text-tacao-300'}>{movie.Actors}</p>
                                                </div>
                                                <div className={'flex flex-row gap-x-3'}>
                                                    <h2 className={'text-kimberly-500'}>Languages</h2>
                                                    <p className={'text-tacao-300'}>{movie.Language}</p>
                                                </div>
                                                <div className={'flex flex-row gap-x-3'}>
                                                    <h2 className={'text-kimberly-500'}>Plot</h2>
                                                    <p className={'text-tacao-300'}>{movie.Plot}</p>
                                                </div>
                                                {
                                                    movie.Type === 'series' && (
                                                        <div className={'flex flex-row gap-x-3'}>
                                                            <h2 className={'text-kimberly-500'}>Seasons</h2>
                                                            <p className={'text-tacao-300'}>{movie.totalSeasons}</p>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                            <div className={'w-1/3 flex flex-col gap-y-4'}>
                                                <Button
                                                    className={'bg-tacao-300 text-gray-800 hover:bg-tacao-400 hover:text-gray-900 duration-300 hover:scale-105'}>
                                                    Watch Now
                                                </Button>
                                                <Button
                                                    className={'bg-tacao-300 text-gray-800 hover:bg-tacao-400 hover:text-gray-900 duration-300 hover:scale-105'}>
                                                    Add to Watchlist
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'mx-10'}>
                                <h1 className={'text-tacao-300 pt-6 text-2xl'}>Other movies according your search</h1>
                                <div>
                                    <CustomCarousel movies={movies.filter((movie) => movie.imdbID !== movieId)}/>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}