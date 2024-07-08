import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Loading from '../Loading';
import MovieCard from '../MovieCard';
import NoResultsOrError from '../NoResultsOrError';
import { IMovie } from '@/interfaces/interfaces';
import SearchFooter from '../SearchFooter';

interface SearchContentProps {
    loading: boolean
    results: IMovie[]
    searchText: string
    currentPage: number
    apiError: string
    error: string
    loadMoreMovies: () => void
}

const SearchContent = ({ searchText, currentPage, loading, results, apiError, error, loadMoreMovies }: SearchContentProps) => {
    return (
        loading ? (
            <Loading />
        ) : results.length > 0 ? (
            <FlatList
                showsVerticalScrollIndicator={false}
                data={results}
                renderItem={({ item }: { item: IMovie }) => <MovieCard item={item} />}
                keyExtractor={item => item.imdbID}
                numColumns={2}
                onEndReached={loadMoreMovies}
                onEndReachedThreshold={0.5}
                ListFooterComponent={<SearchFooter searchText={searchText} currentPage={currentPage} apiError={apiError} />}
            />
        ) : (
            <NoResultsOrError error={error} />
        )

    )
};

export default SearchContent;

const styles = StyleSheet.create({
    container: {}
});
