import apiClient from "../services/api-clients"

export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    release_date: string;
}

export interface MovieResponse {
    results: Movie[];
}

const getMovies = (searchText: string) => {
    const response = apiClient.get<MovieResponse>("/search/movie", {
        params: {
            query: searchText
        }
    });
    return response;
};

export default getMovies;