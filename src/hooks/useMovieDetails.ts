
import { useEffect, useCallback, useState } from 'react';
import { IAPIErrorResponse, MovieDetails } from '../interfaces/interfaces';
import { router, } from 'expo-router';
import { fetchMovies } from '../services/moviesService';


const useMovieDetails = () => {
    const [movie, setMovie] = useState<MovieDetails>();
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [movieId, setMovieId] = useState<string>();

    const fetchMovieById = useCallback(async (movieId: string) => {
        setLoading(true);
        try {
            const fetchMovieByIdRes = await fetchMovies({ i: movieId }) as unknown as IAPIErrorResponse | MovieDetails;
            if ('Response' in fetchMovieByIdRes) {
                if (fetchMovieByIdRes.Response === 'True') {
                    setMovie(fetchMovieByIdRes as MovieDetails);
                } else {
                    setApiError((fetchMovieByIdRes as IAPIErrorResponse).Error);
                }
            } else {
                setError("Failed to fetch movies. Please try again later.");
            }
        } catch (error) {
            console.error('Error fetching movie:', error);
            setError('Failed to fetch movies. Please try again later.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        console.log('movieid', movieId)
        if (movieId) fetchMovieById(movieId);
    }, [movieId, fetchMovieById]);

    const handleNavigation = () => {
        router.navigate('/')
    };

    const hideErrorToast = () => {
        if (error) setError('');
        if (apiError) setApiError('');
        handleNavigation();
    };
    return {
        loading,
        movie,
        error,
        apiError,
        hideErrorToast,
        handleNavigation,
        setMovieId

    };
};

export default useMovieDetails;

