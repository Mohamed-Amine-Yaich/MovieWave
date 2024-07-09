import React, { createContext, useContext, useState, useEffect } from 'react';
import useMovieDetails from '../hooks/useMovieDetails';

const MovieDetailsContext = createContext();

export const MovieDetailsProvider = ({ children }) => {
    const { movie, apiError, error, hideErrorToast, loading } = useMovieDetails();
    
    return (
        <MovieDetailsContext.Provider value={{ movie, apiError, error, hideErrorToast, loading }}>
            {children}
        </MovieDetailsContext.Provider>
    );
};

export const useMovieDetailsContext = () => useContext(MovieDetailsContext);