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
import {useNavigate} from "react-router-dom";
import {EmptyPicture} from "@/components/common/empty-picture.tsx";

interface MovieCardProps {
    movie: Movie
}

export const MovieCard:FC<MovieCardProps> = ({movie}) => {
    const navigate = useNavigate()
    return (
        <Card className={'w-1/6 hover:cursor-pointer hover:scale-105 transition-all duration-300 border-none bg-kimberly-600'} onClick={() => navigate(`/movie/${movie.imdbID}`)}>
            {
                movie.Poster !== 'N/A' ? (
                    <img src={movie.Poster ?? ''} alt={movie.Title} className={'w-full h-40 object-cover rounded-t-lg'}/>
                ) : (
                    <EmptyPicture />
                )
            }
            <CardHeader>
                <CardTitle className={'truncate text-gray-100 mb-2'}>{movie.Title}</CardTitle>
                <CardDescription className={'flex flex-col gap-y-1 w-2/3'}>
                    <Badge className={'py-1 bg-kimberly-800 text-gray-300'}><FileDigit className={'w-4 h-4 mr-2'} /> { movie.imdbID }</Badge >
                    <Badge className={'py-1 bg-kimberly-800 text-gray-300'}><Calendar className={'w-4 h-4 mr-2'}  />{ movie.Year }</Badge>
                    <Badge className={'py-1 bg-kimberly-800 text-gray-300'}><Clapperboard className={'w-4 h-4 mr-2'}  />{movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1)}</Badge>
                </CardDescription>
            </CardHeader>
        </Card>

    )
}