import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";

import type { Movie } from "../services/api"


interface Props {
  movie: Movie;
}


export const MovieCard = ({ movie }: Props) => {
    return (
        <Card>
<Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
<CardBody>
                <HStack justifyContent="space-between">
                    <Heading fontSize="2xl">{movie.title}</Heading>
                    <Heading fontSize="sm">{movie.release_date}</Heading>
                </HStack>
            </CardBody>
        </Card>
    );
};

export default MovieCard;

