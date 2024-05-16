import {FC} from "react";
import {Movie} from "@/types/response-types.ts";

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge.tsx";
import {Calendar, Clapperboard, FileDigit} from "lucide-react";

interface MovieCardProps {
    movie: Movie
}

export const MovieCard:FC<MovieCardProps> = ({movie}) => {
    return (
        <Card className={'w-1/6 hover:cursor-pointer hover:animate-pulse'}>
            <img src={movie.Poster ?? ''} alt={movie.Title} className={'w-full h-40 object-cover rounded-t-lg'}/>
            <CardHeader>
                <CardTitle className={'truncate'}>{movie.Title}</CardTitle>
                <CardDescription className={'flex flex-col gap-y-1 w-2/3'}>
                    <Badge className={'py-1'}><FileDigit className={'w-4 h-4 mr-2'} /> { movie.imdbID }</Badge >
                    <Badge className={'py-1'}><Calendar className={'w-4 h-4 mr-2'}  />{ movie.Year }</Badge>
                    <Badge className={'py-1'}><Clapperboard className={'w-4 h-4 mr-2'}  />{movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1)}</Badge>
                </CardDescription>
            </CardHeader>
        </Card>

    )
}