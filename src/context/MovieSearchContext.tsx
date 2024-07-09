import React, { createContext, useContext, useState, useEffect } from 'react';
import useMovieSearch from '../hooks/useMovieSearch';
import { IMovie } from '../interfaces/interfaces';

const MovieSearchContext = createContext<{
    loading: boolean;
    results: IMovie[];
    error: string;
    apiError: string;
    currentPage: number;
    searchText: string;
    handleTextDebounce: (str: string) => void;
    loadMoreMovies: () => void;
    hideErrorToast: () => void;
}>({

    loading: true,
    results: [],
    error: '',
    apiError: '',
    currentPage: 1,
    searchText: "",
    handleTextDebounce: (str: string) => { },
    loadMoreMovies: () => { },
    hideErrorToast: () => { },

});

export const MovieSearchProvider = ({ children }: { children: React.ReactNode }) => {
    const { loading, results, searchText, handleTextDebounce, currentPage, apiError, error, loadMoreMovies, } = useMovieSearch()

    return (
        <MovieSearchContext.Provider value={{ loading, results, searchText, handleTextDebounce, currentPage, apiError, error, loadMoreMovies }}>
            {children}
        </MovieSearchContext.Provider>
    );
};

export const useMovieSearchContext = () => useContext(MovieSearchContext);
