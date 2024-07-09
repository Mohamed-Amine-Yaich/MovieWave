import React, { createContext, useContext, useState, useEffect, SetStateAction } from 'react';
import useMovieDetails from '../hooks/useMovieDetails';
import { MovieDetails } from '../interfaces/interfaces';


const MovieDetailsContext = createContext<
    {
        loading: boolean;
        movie: MovieDetails | undefined;
        error: string;
        apiError: string;
        hideErrorToast: () => void;
        setMovieId: (str: string) => void,
        setIsFavorite: (bool: boolean) => void,
        isFavorite: boolean | undefined
    }
>({
    loading: false,
    movie: undefined,
    error: '',
    apiError: '',
    hideErrorToast: () => { },
    setMovieId: (str: string) => { },
    setIsFavorite: (bool: boolean) => { },
    isFavorite: undefined
}
);

export const MovieDetailsProvider = ({ children }: { children: React.ReactNode }) => {
    const { movie, apiError, error, hideErrorToast, loading, setMovieId, isFavorite, setIsFavorite, } = useMovieDetails();

    return (
        <MovieDetailsContext.Provider value={{ movie, apiError, error, hideErrorToast, loading, setMovieId, isFavorite, setIsFavorite, }}>
            {children}
        </MovieDetailsContext.Provider>
    );
};

export const useMovieDetailsContext = () => useContext(MovieDetailsContext);