import React, {FC, useCallback, useContext, useEffect, useState} from "react";
import {MagnifyingGlassIcon} from "@radix-ui/react-icons";
import {Input} from "@/components/ui/input.tsx";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {CommandDialog} from "@/components/ui/command.tsx";
import {Movie} from "@/types/response-types.ts";
import {MovieContext} from "@/providers/movie-provider.tsx";
import {useNavigate} from "react-router-dom";
import {getMoviesRequest} from "@/utils/requests/movie-requests.ts";
import _debounce from "lodash/debounce";
import {TextSearch} from "lucide-react";
import {Skeleton} from "@/components/ui/skeleton.tsx";
import {EmptyResult} from "@/components/common/empty-result.tsx";
import {SearchFilter} from "@/components/common/search-filter.tsx";

export const SearchDialog:FC = () => {
    const { showSearchDialog, setShowSearchDialog, setSearchFilter , typeFilter} = useContext(MovieContext);
    const [data, setData] = useState<Movie[]>([]);
    const [totalResults, setTotalResults] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [searchWord, setSearchWord] = useState<string>('');

    const navigate = useNavigate();

    const handleDebounceFn = useCallback( (inputValue: string, typeFilter: string) => {
        if (!inputValue || inputValue === '') {
            inputValue = 'pokemon'
        }
        if (inputValue.length < 2) return;
        setSearchFilter(inputValue);
        setSearchWord(inputValue);
        void getMoviesRequest(inputValue, typeFilter).then((response) => {
            if(response.data.Response === 'False') {
                setData([]);
                return;
            }
            setTotalResults(Number(response.data.totalResults));
            setData(response.data.Search);
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
            setIsLoading(false)
        })
    }, [setSearchFilter, typeFilter]);

    const debounceFn = useCallback(_debounce(handleDebounceFn, 2000), [handleDebounceFn]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsLoading(true)
        void debounceFn(event.target.value, typeFilter);
    };

    useEffect(() => {
        if (searchWord) {
            setIsLoading(true);
            void debounceFn(searchWord, typeFilter);
        }
    }, [typeFilter, debounceFn, searchWord]);

    return (
        <CommandDialog open={showSearchDialog} onOpenChange={() => {
            setShowSearchDialog(false);
            setData([]);
        }}
        >
            <div className={'flex flex-row items-center px-4 pt-2 bg-east-bay-800'}>
                <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                <SearchFilter />
                <Input className="border-none outline-none bg-east-bay-800 bg-transparent shadow-none w-6/12 rounded-none border-transparent focus:ring-0 focus:ring-offset-0 text-east-bay-300 placeholder-white"  placeholder="Type a movie name..." onChangeCapture={handleChange} />
            </div>
            <ScrollArea className="h-72 w-full pt-2 bg-east-bay-800 border-t border-kimberly-600">
                {
                    isLoading ? (<div className={'flex flex-col gap-y-4'}>
                        <Skeleton className="h-10 w-2/3 mx-4 rounded-xl" />
                        <Skeleton className="h-10 w-2/3 mx-4 rounded-xl" />
                        <Skeleton className="h-10 w-2/3 mx-4 rounded-xl" />
                        <Skeleton className="h-10 w-2/3 mx-4 rounded-xl" />
                        <Skeleton className="h-10 w-2/3 mx-4 rounded-xl" />
                    </div>) : data.length > 0 ? (
                            <div>
                                <div className={'h-10 px-4 pb-2 flex flex-row items-center justify-between hover:cursor-pointer hover:bg-east-bay-900 border-b border-kimberly-600'} onClick={() => setShowSearchDialog(false)}>
                                    <div className={'flex flex-row gap-x-4'} >
                                        <TextSearch className={'text-east-bay-300'} />
                                        <p className={'text-east-bay-300'}>Show all results</p>
                                    </div>
                                    <div>
                                        <Badge className="text-xs bg-kimberly-800 text-gray-300">{totalResults}</Badge>
                                    </div>
                                </div>
                                {
                                    data.map((item, index) => (
                                        <div key={index} className={'flex flex-row justify-between px-4 py-2 border-b border-kimberly-600 hover:cursor-pointer hover:bg-east-bay-900'} onClick={() => {
                                            navigate(`/movie/${item.imdbID}`)
                                            setShowSearchDialog(false)
                                        }}>
                                            <div className={'flex flex-row items-center gap-x-4'}>
                                                <Avatar>
                                                    <AvatarImage src={item.Poster} alt="@shadcn" />
                                                    <AvatarFallback>{ item.Title.charAt(0) }</AvatarFallback>
                                                </Avatar>
                                                <span className={'text-east-bay-300'}>{item.Title}</span>
                                            </div>
                                            <div>
                                                <Badge className="text-xs bg-kimberly-800 text-gray-300">{item.Type.charAt(0).toUpperCase() + item.Type.slice(1)}</Badge>
                                            </div>
                                        </div>
                                    ))

                                }
                            </div>
                    ) : searchWord ? <EmptyResult /> : null
                }
            </ScrollArea>
        </CommandDialog>
    )
}