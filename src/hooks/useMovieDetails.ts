
import { useEffect, useCallback, useState } from 'react';
import { IAPIErrorResponse, MovieDetails } from '../interfaces/interfaces';
import { router } from 'expo-router';
import { fetchMovies } from '../services/moviesService';
import { useAuthContext } from '../context/AuthContext';
import { addFavoriteMovie, addMovie, removeFavoriteMovie } from '../services/movie-wave-api/movies-wave-api-Service';


const useMovieDetails = () => {
    const [movie, setMovie] = useState<MovieDetails>();
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [movieId, setMovieId] = useState<string>();
    const [isFavorite, setIsFavorite] = useState<boolean>();
    const { isLoggedIn, authToken } = useAuthContext();

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

    const markAsFavorite = async (movieId: string) => {
        try {
            if (isLoggedIn && authToken && movie) {
                const addMovieRes = await addMovie(movie, authToken)
                if ("_id" in addMovieRes) {
                    const movieId = addMovieRes._id as string
                    console.log('hihieih')
                    await addFavoriteMovie(movieId, authToken)
                }

            } else {
                setError('You need to log in to your account!')
            }
        } catch (err) {
            setApiError('An error has occurred. Please try later!');
            setIsFavorite(false)
        } finally {
        }
    };
    useEffect(() => {
        if (movieId && authToken) {
            if (isFavorite) {
                markAsFavorite(movieId)
            } else {
                removeFavoriteMovie(movieId, authToken)
            }
        }

    }, [isFavorite]);
    


    return {
        loading,
        movie,
        error,
        apiError,
        hideErrorToast,
        setMovieId,
        setIsFavorite,
        isFavorite
    };
};

export default useMovieDetails;

