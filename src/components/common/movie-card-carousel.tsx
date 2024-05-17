import {useNavigate} from "react-router-dom";
import {Card,  CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {EmptyPicture} from "@/components/common/empty-picture.tsx";
import { Movie } from "@/types/response-types";
import {FC} from "react";

interface MovieCardProps {
    movie: Movie
}

export const MovieCardCarousel:FC<MovieCardProps> = ({ movie }) => {
    const navigate = useNavigate()
    return (
        <Card className={'w-full hover:cursor-pointer hover:scale-105 transition-all duration-300 border-none bg-kimberly-600'} onClick={() => navigate(`/movie/${movie.imdbID}`)}>
            {
                movie.Poster !== 'N/A' ? (
                    <img src={movie.Poster ?? ''} alt={movie.Title} className={'w-full h-40 object-cover rounded-t-lg'}/>
                ) : (
                    <EmptyPicture />
                )
            }
            <CardHeader>
                <CardTitle className={'truncate text-gray-100 mb-2'}>{movie.Title}</CardTitle>
            </CardHeader>
        </Card>

    )
}