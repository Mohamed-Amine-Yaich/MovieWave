import { fetchMovies } from '@/services/moviesService';
import { useLocalSearchParams } from 'expo-router';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface DetailScreenProps { }

const DetailScreen = (props: DetailScreenProps) => {
  const params = useLocalSearchParams();
  console.log(params)
  return (
    <View style={styles.container}>
      <Text>DetailScreen {params?.movieId} </Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },

})