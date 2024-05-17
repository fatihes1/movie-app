import {FC, useContext} from "react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {SlidersHorizontal} from "lucide-react";
import {MovieContext} from "@/providers/movie-provider.tsx";
import {EPISODE, MOVIE, NO_FILTER, SERIES} from "@/enums/SearchTypeEnums.ts";

export const SearchFilter:FC = () => {
    const { typeFilter, setTypeFilter } = useContext(MovieContext);
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={'text-east-bay-950'}>
                <SlidersHorizontal className={'w-4 h-4'} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-east-bay-800 text-east-bay-300">
                <DropdownMenuLabel>Filter</DropdownMenuLabel>
                <DropdownMenuSeparator className={'bg-kimberly-600'} />
                <DropdownMenuRadioGroup value={typeFilter} onValueChange={setTypeFilter}>
                    <DropdownMenuRadioItem className={'border-b border-kimberly-600 hover:cursor-pointer focus:text-east-bay-300 focus:bg-east-bay-900'} value={NO_FILTER}>No Filter</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem className={'border-b border-kimberly-600 hover:cursor-pointer focus:text-east-bay-300 focus:bg-east-bay-900'} value={MOVIE}>Movie</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem className={'border-b border-kimberly-600 hover:cursor-pointer focus:text-east-bay-300 focus:bg-east-bay-900'} value={SERIES}>Series</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem className={'border-b border-kimberly-600 hover:cursor-pointer focus:text-east-bay-300 focus:bg-east-bay-900'} value={EPISODE}>Episodes</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>


    )
}