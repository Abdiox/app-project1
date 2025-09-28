import { useEffect, useState } from "react";

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


const useMovies = () => {
    const [data, setData] = useState<MovieResponse | null>(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        apiClient
            .get<MovieResponse>("/movie/popular")
            .then((res) => setData(res.data))
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }, []);

    return { data, error, isLoading };
};

export default useMovies;