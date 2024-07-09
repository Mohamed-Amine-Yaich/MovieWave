import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NO_MORE_RESULTS_TEXT } from '@/src/constants/constants';
import Loading from '../Loading';
import { useMovieSearchContext } from '@/src/context/MovieSearchContext';



const HomeFooter = () => {
    const {  apiError  } = useMovieSearchContext()

    return(
    apiError ? (
        <Text style={styles.resultsText}>{NO_MORE_RESULTS_TEXT}</Text>
    ) : <Loading />)}

export default HomeFooter;

const styles = StyleSheet.create({
    resultsText: {
        color: 'white',
        fontWeight: '600',
        marginLeft: 4,
        fontSize: 18,
        marginTop: 8,
        marginBottom: 10,
    },
});
