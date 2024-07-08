import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';



const MovieDetailBackButton = () => {
    return (<View style={styles.backButtonContainer}>
        <Link href={'/'}>
            <Ionicons name="chevron-back" size={24} color="white" />
        </Link>
    </View>
    );
};

export default MovieDetailBackButton;

const styles = StyleSheet.create({
    backButtonContainer: {
        backgroundColor: '#2496ff',
        padding: 10,
        borderRadius: 9999,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 45,
        left: 12,
        zIndex: 1,
    },
});
