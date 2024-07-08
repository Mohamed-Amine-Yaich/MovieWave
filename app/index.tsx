
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


import useMovieSearch from '@/hooks/useMovieSearch';
import { Stack } from 'expo-router';
import SearchImageBg from '@/components/SearchScreen/SearchImageBg';
import SearchBar from '@/components/SearchScreen/SearchSearchBar';
import SearchContent from '@/components/SearchScreen/SearchContent';

interface SearchScreenProps { }

const SearchScreen = (props: SearchScreenProps) => {
  const { loading, results, searchText, handleTextDebounce, currentPage, apiError, error, loadMoreMovies, } = useMovieSearch()
  return (
    <View style={styles.container}>
      <Stack.Screen options={{  headerShown: false}} />

      <SearchImageBg />

      <SearchBar handleTextDebounce={handleTextDebounce} />

      <SearchContent loading={loading} results={results} searchText={searchText} currentPage={currentPage} apiError={apiError} error={error} loadMoreMovies={loadMoreMovies} />

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