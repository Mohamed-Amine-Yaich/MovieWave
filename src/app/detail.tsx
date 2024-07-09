import * as React from "react";
import ErrorToast from "@/src/components/DetailScreen/ErrorToast";
import MovieDetailBackButton from "@/src/components/DetailScreen/MovieDetailBackButton";
import MovieDetailContent from "@/src/components/DetailScreen/MovieDetailContent";
import MovieDetailPoster from "@/src/components/DetailScreen/MovieDetailsPoster";
import Loading from "@/src/components/SearchScreen/Loading";
import useMovieDetails from "@/src/hooks/useMovieDetails";
import { StyleSheet, ImageBackground } from "react-native";
import MovieDetailFavoriteButton from "@/src/components/DetailScreen/MovieDetailFavoriteButton";

interface DetailScreenProps { }

const DetailScreen = (props: DetailScreenProps) => {
  const { movie, apiError, error, hideErrorToast, loading } = useMovieDetails();
  console.log('movie :', movie)
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
          <MovieDetailPoster loading={loading} movie={movie} />
          < MovieDetailFavoriteButton />
          <MovieDetailContent movie={movie} />

          {(error || apiError) && (
            <ErrorToast
              isVisible={!!(error || apiError)}
              message={
                error
                  ? "An error has occurred. Please try later."
                  : apiError &&
                  "Movie could not be loaded. Please try again later."
              }
              onClose={hideErrorToast}
            />
          )}
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
