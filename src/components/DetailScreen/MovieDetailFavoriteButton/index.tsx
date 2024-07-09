import { useMovieDetailsContext } from '@/src/context/MovieDetailsContext';
import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

interface MovieDetailFavoriteButtonProps { }

const MovieDetailFavoriteButton = (props: MovieDetailFavoriteButtonProps) => {
    //need to track where it is favorite from backend set default to false
    const { isFavorite, setIsFavorite } = useMovieDetailsContext()
    const handlePress = async () => {
        setIsFavorite((currentState: boolean) => !currentState)
    }
    return (
        <View
            style={styles.container}
        >
            <TouchableOpacity onPress={handlePress}>
                <Ionicons name="heart" size={24} color={isFavorite ? 'red' : 'white'} />
            </TouchableOpacity>
        </View>
    );
};

export default MovieDetailFavoriteButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2496ff',
        padding: 10,
        borderRadius: 9999,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 45,
        right: 12,
        zIndex: 1
    }
});
