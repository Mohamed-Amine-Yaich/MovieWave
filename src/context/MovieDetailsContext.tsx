import React, { createContext, useContext, useState, useEffect } from 'react';
import useMovieDetails from '../hooks/useMovieDetails';
import { MovieDetails } from '../interfaces/interfaces';


const MovieDetailsContext = createContext<
    {
        loading: boolean;
        movie: MovieDetails | undefined;
        error: string;
        apiError: string;
        hideErrorToast: () => void;
        handleNavigation: () => void;
        setMovieId: (str: string ) => void,

    }
>({
    loading: false,
    movie: undefined,
    error: '',
    apiError: '',
    hideErrorToast: () => { },
    handleNavigation: () => { },
    setMovieId: (str: string ) => { },
}
);

export const MovieDetailsProvider = ({ children }) => {
    const { movie, apiError, error, hideErrorToast, loading, setMovieId } = useMovieDetails();

    return (
        <MovieDetailsContext.Provider value={{ movie, apiError, error, hideErrorToast, loading, setMovieId }}>
            {children}
        </MovieDetailsContext.Provider>
    );
};

export const useMovieDetailsContext = () => useContext(MovieDetailsContext);