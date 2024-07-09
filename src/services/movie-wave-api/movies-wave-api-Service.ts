import { MovieDetails } from '@/src/interfaces/interfaces';
import axiosInstance from './axiosInstance';
import { AxiosError } from 'axios';



export const loginService = async (data: { email: string, password: string }) => {
  try {
    console.log('hi')
    const response = await axiosInstance.post('/auth/login', data);
    return response.data as unknown as { token: string }

  } catch (error) {
    console.log('error', error)
    return error as unknown as AxiosError
  }
};



//create a movie in the movie collection
export const addMovie = async (movie: MovieDetails, authToken: string): Promise<MovieDetails | AxiosError> => {
  try {
    const response = await axiosInstance.post('/movies', movie, {
      headers: {
        Authorization: `Bearer ${authToken}`
      },

    });
    console.log(response.data)
    return response.data as unknown as MovieDetails

  } catch (error) {
    return error as unknown as AxiosError
  }
};

//create a favorite document in favorite collection 
export const addFavoriteMovie = async (movieId: string, authToken: string) => {
  try {
    const bearerToken = `Bearer ${authToken}`
    console.log('movieid', movieId, bearerToken)

    const response = await axiosInstance.post(`/favorite/${movieId}`, {
      headers: {
        Authorization: bearerToken

      }

    });
    console.log('response', response)
    //   return response.data as unknown
  } catch (error) {

    return error as unknown as AxiosError
  }
};
export const removeFavoriteMovie = async (movieId: string, authToken: string) => {
  try {
    const response = await axiosInstance.post(`/favorite/${movieId}`, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });
    return response.data as unknown as { token: string }
  } catch (error) {

    return error as unknown as AxiosError
  }
};