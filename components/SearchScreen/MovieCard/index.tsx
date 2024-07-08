import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { IMovie } from '@/interfaces/interfaces';
import { height, width } from '@/constants/constants';
import { Link } from 'expo-router';

interface IMovieCard {
    item: IMovie
}

const MovieCard = ({ item }: IMovieCard) => {
    return (
        <Link href={{ pathname: 'detail', params: { movieId: item.imdbID } }}>
            <Pressable>
                <View style={styles.movieItem}>
                    <Image
                        source={item?.Poster && item.Poster != 'N/A' ? { uri: item?.Poster } : require('../../../assets/images/noPosterImage.png')}
                        style={styles.posterImage}
                    />
                    <Text style={[styles.posterText, item?.Title?.length > 17 ? { maxWidth: width * 0.37 } : {}]}>
                        {item.Title}
                    </Text>
                </View>
            </Pressable>
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
