import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable, Button, TouchableOpacity } from 'react-native';
import { IMovie } from '@/src/interfaces/interfaces';
import { height, width } from '@/src/constants/constants';
import { Link } from 'expo-router';
import { useMovieDetailsContext } from '@/src/context/MovieDetailsContext';

interface IMovieCard {
    item: IMovie
}

const MovieCard = ({ item }: IMovieCard) => {

    const { setMovieId } = useMovieDetailsContext()
    function handlePress() {
        setMovieId(item.imdbID)
    }

    return (
        <Link href={{ pathname: 'detail', params: { movieId: item.imdbID } }} onPress={handlePress}>


            <View style={styles.movieItem}>
                <Image
                    source={item?.Poster && item.Poster != 'N/A' ? { uri: item?.Poster } : require('../../../assets/images/noPosterImage.png')}
                    style={styles.posterImage}
                />
                <Text style={[styles.posterText, item?.Title?.length > 17 ? { maxWidth: width * 0.37 } : {}]}>
                    {item.Title}
                </Text>
            </View>
        </Link>
    );
};

export default MovieCard;

const styles = StyleSheet.create({

    movieItem: {
        padding: 10,
    },
    posterImage: {
        width: width * 0.43,
        height: height * 0.3,
        borderRadius: 24,
    },
    posterText: {
        color: '#D1D5DB',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 4,
        textAlign: 'center',
    },
});
