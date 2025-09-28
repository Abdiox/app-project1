import { SimpleGrid, Text } from "@chakra-ui/react";

import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import type { Movie } from "../services/api";

const MovieGrid = () => {
  const { data, error, isLoading } = useMovies();

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={5}
      padding="10px"
    >
      {isLoading &&
  [...Array(20)].map((_, index) => <MovieCardSkeleton key={index} />)}
      {data?.results.map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </SimpleGrid>
  );
};

export default MovieGrid;

