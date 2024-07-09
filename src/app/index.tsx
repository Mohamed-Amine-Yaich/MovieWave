
import * as React from 'react';
import { View, StyleSheet } from 'react-native';


import { Stack } from 'expo-router';
import SearchImageBg from '@/src/components/SearchScreen/SearchImageBg';
import SearchBar from '@/src/components/SearchScreen/SearchSearchBar';
import SearchContent from '@/src/components/SearchScreen/SearchContent';
import { useAuthContext } from '../context/AuthContext';

interface SearchScreenProps { }

const SearchScreen = (props: SearchScreenProps) => {
  useAuthContext()
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <SearchImageBg />

      <SearchBar  />

      <SearchContent />

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