import ErrorToast from '@/components/DetailScreen/ErrorToast';
import MovieDetailBackButton from '@/components/DetailScreen/MovieDetailBackButton';
import MovieDetailContent from '@/components/DetailScreen/MovieDetailContent';
import MovieDetailPoster from '@/components/DetailScreen/MovieDetailsPoster';
import { MovieDetails } from '@/interfaces/interfaces';
import { useLocalSearchParams } from 'expo-router';
import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

interface DetailScreenProps { }

const DetailScreen = (props: DetailScreenProps) => {
  const params = useLocalSearchParams();
  console.log(params)
  const [movie, setMovie] = useState<MovieDetails>();
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string>('');
  const [error, setError] = useState<string>('gg');


  function hideErrorToast(): void {
    setError('')
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>

      <MovieDetailBackButton />
      <MovieDetailPoster loading={loading} movie={movie} />

      {movie && <MovieDetailContent movie={movie} />}

      {(error || apiError) && (
        <ErrorToast
          isVisible={!!(error || apiError)}
          message={error ? "An error has occurred. Please try later." : apiError && 'Movie could not be loaded. Please try again later.'}
          onClose={hideErrorToast}
        />
      )}
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  scrollViewContent: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },

})