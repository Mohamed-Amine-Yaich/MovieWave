
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import HomeContent from '@/components/HomeScreen/HomeContent';
import HomeImageBg from '@/components/HomeScreen/HomeImageBg';
import SearchBar from '@/components/HomeScreen/HomeSearchBar';
import useMovieSearch from '@/hooks/useMovieSearch';
import { Stack } from 'expo-router';

interface SearchScreenProps { }

const SearchScreen = (props: SearchScreenProps) => {
  const { loading, results, searchText, handleTextDebounce, currentPage, apiError, error, loadMoreMovies, } = useMovieSearch()
  return (
    <View style={styles.container}>
      <Stack.Screen options={{  headerShown: false}} />

      <HomeImageBg />

      <SearchBar handleTextDebounce={handleTextDebounce} />

      <HomeContent loading={loading} results={results} searchText={searchText} currentPage={currentPage} apiError={apiError} error={error} loadMoreMovies={loadMoreMovies} />

    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'center'
  },

})