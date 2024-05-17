import { FC } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { Movie } from '@/types/response-types';
import { MovieCardCarousel } from '@/components/common/movie-card-carousel';

interface CustomCarouselProps {
    movies: Movie[];
}

export const CustomCarousel: FC<CustomCarouselProps> = ({ movies }) => {

    return (
        <Carousel opts={{align: 'start'}} className="w-full">
            <CarouselContent className="w-full">
                {movies.map((movie, index) => (
                    <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
                        <div className="p-1">
                            <MovieCardCarousel movie={movie} />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};
