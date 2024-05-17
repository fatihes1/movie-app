import {FC, useContext, } from "react";
import {MovieCard} from "@/components/common/movie-card.tsx";
import {CustomPagination} from "@/components/common/custom-pagination.tsx";
import {MovieContext} from "@/providers/movie-provider.tsx";
import {Loader} from "@/components/common/loader.tsx";
import {EmptyResult} from "@/components/common/empty-result.tsx";


export const Home:FC = () => {
    const { searchFilter, page, onPageChange, pageCount, isLoading, movies } = useContext(MovieContext)

    return (
        <div >
            <div className={'container'}>
                <h1 className={'text-3xl text-start mt-3 mb-2 font-medium text-tacao-300'}>The result listing for : "{searchFilter}"</h1>
            </div>
            {
                isLoading ? ( <Loader />
                ) : movies.length > 0 ?
                    (
                        <div>
                            <div className={'flex flex-row gap-x-5 pb-1 flex-wrap justify-center border-none gap-y-5 mt-2'}>
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
                 : (<EmptyResult />)
            }
        </div>
    )
};