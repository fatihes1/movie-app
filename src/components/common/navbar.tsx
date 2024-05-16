import React, {FC, useCallback, useEffect, useState} from "react";
import _debounce from "lodash/debounce";

import {
    CommandDialog,
} from "@/components/ui/command"
import {Button} from "@/components/ui/button.tsx";
import {Search} from "lucide-react";
import {getMoviesRequest} from "@/utils/requests/movie-requests.ts";
import { Movie} from "@/types/response-types.ts";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";
import {Input} from "@/components/ui/input.tsx";
import {MagnifyingGlassIcon} from "@radix-ui/react-icons";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {Badge} from "@/components/ui/badge.tsx";

interface NavbarProps {
    handleOnChangeSearch: (search: string) => void;
}

export const Navbar:FC<NavbarProps> = ({ handleOnChangeSearch }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [data, setData] = useState<Movie[]>([]);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen(prevOpen => !prevOpen);
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    const handleDebounceFn = useCallback( (inputValue: string) => {
        if (!inputValue || inputValue === '') {
            setData([]);
            return;
        }
        if (inputValue.length < 2) return;
        handleOnChangeSearch(inputValue);
        void getMoviesRequest(inputValue).then((response) => {
            console.log(response.data.Search)
            setData(response.data.Search);
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
        })
    }, [handleOnChangeSearch]);

    const debounceFn = useCallback(_debounce(handleDebounceFn, 2000), [handleDebounceFn]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //setSearch(event.target.value); // TODO: add redux state this value
        void debounceFn(event.target.value);
    };

    return (
        <nav className="h-16 w-full bg-cloud-burst-950">
            <div className="container flex flex-row justify-center items-center h-full">
                <Button className="mr-4 bg-transparent" variant="outline" onClick={() => setOpen(true)}>
                    Search a Movie <Search className="w-4 h-4 ml-4" />
                </Button>
                <CommandDialog open={open} onOpenChange={() => {
                    setOpen(false);
                    setData([]);
                }}>
                    <div className={'flex flex-row items-center px-4 mt-2'}>
                        <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                        <Input className="border-none outline-none bg-transparent shadow-none w-6/12 rounded-none border-transparent focus:ring-0 focus:ring-offset-0"  placeholder="Type a movie name..." onChangeCapture={handleChange} />
                    </div>
                        <ScrollArea className="h-72 w-full border-t-2 mt-2">
                            {
                                !data ? (<p>Yükleniyor</p>) : (
                                    data.map((item, index) => (
                                        <div key={index} className={'flex flex-row justify-between px-4 py-2 border-b hover:cursor-pointer hover:bg-green-300'} onClick={() => console.log(item.imdbID)}>
                                            <div className={'flex flex-row items-center gap-x-4'}>
                                                <Avatar>
                                                    <AvatarImage src={item.Poster} alt="@shadcn" />
                                                    <AvatarFallback>{ item.Title.charAt(0) }</AvatarFallback>
                                                </Avatar>
                                                <span>{item.Title}</span>
                                            </div>
                                            <div>
                                                <Badge className="text-xs">{item.Type.charAt(0).toUpperCase() + item.Type.slice(1)}</Badge>
                                            </div>
                                        </div>
                                    ))
                                )
                            }
                        </ScrollArea>
                </CommandDialog>

            </div>
        </nav>
    )
}