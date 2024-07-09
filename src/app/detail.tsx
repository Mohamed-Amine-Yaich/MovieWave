import * as React from "react";
import ErrorToast from "@/src/components/DetailScreen/ErrorToast";
import MovieDetailBackButton from "@/src/components/DetailScreen/MovieDetailBackButton";
import MovieDetailContent from "@/src/components/DetailScreen/MovieDetailContent";
import MovieDetailPoster from "@/src/components/DetailScreen/MovieDetailsPoster";
import Loading from "@/src/components/SearchScreen/Loading";
import { StyleSheet, ImageBackground } from "react-native";
import MovieDetailFavoriteButton from "@/src/components/DetailScreen/MovieDetailFavoriteButton";
import { useMovieDetailsContext } from "../context/MovieDetailsContext";
import { useLocalSearchParams } from "expo-router";



const DetailScreen = () => {
  const { loading, } = useMovieDetailsContext();

  return (
    <ImageBackground
      source={require("../assets/images/movieDetailsBg.png")}
      resizeMode="cover"
      style={styles.container}
    >
      {loading ? (
        <Loading />
      ) : (
        <>
          <MovieDetailBackButton />
          <MovieDetailPoster />
          <MovieDetailFavoriteButton />
          <MovieDetailContent />
          <ErrorToast />
        </>
      )}
    </ImageBackground>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
