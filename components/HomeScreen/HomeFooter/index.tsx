import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NO_MORE_RESULTS_TEXT } from '@/constants/constants';
import Loading from '../Loading';

interface HomeFooterNameProps {
    searchText: string, currentPage: number, apiError: string,
}

const HomeFooter = ({ searchText, currentPage, apiError }: HomeFooterNameProps) => (
    apiError ? (
        <Text style={styles.resultsText}>{NO_MORE_RESULTS_TEXT}</Text>
    ) : <Loading />)

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
