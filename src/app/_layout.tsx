import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/src/hooks/useColorScheme';
import { MovieSearchProvider } from '../context/MovieSearchContext';
import { MovieDetailsProvider } from '../context/MovieDetailsContext';
import { AuthProvider } from '../context/AuthContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <MovieSearchProvider>
          <MovieDetailsProvider>
            <Stack
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="index" />
              <Stack.Screen name="detail" />
              <Stack.Screen name="+not-found" />
            </Stack>
          </MovieDetailsProvider>
        </MovieSearchProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: 'search',
};
