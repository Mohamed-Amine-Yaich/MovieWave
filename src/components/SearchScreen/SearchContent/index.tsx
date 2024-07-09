import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Loading from '../Loading';
import MovieCard from '../MovieCard';
import NoResultsOrError from '../NoResultsOrError';
import { IMovie } from '@/src/interfaces/interfaces';
import SearchFooter from '../SearchFooter';
import { useMovieSearchContext } from '@/src/context/MovieSearchContext';



const SearchContent = () => {
    const { loading, results, error, loadMoreMovies, } = useMovieSearchContext()

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
                ListFooterComponent={<SearchFooter  />}
            />
        ) : (
            <NoResultsOrError error={error} />
        )

    )
};

export default SearchContent;

