import * as React from "react";
import ErrorToast from "@/components/DetailScreen/ErrorToast";
import MovieDetailBackButton from "@/components/DetailScreen/MovieDetailBackButton";
import MovieDetailContent from "@/components/DetailScreen/MovieDetailContent";
import MovieDetailPoster from "@/components/DetailScreen/MovieDetailsPoster";
import Loading from "@/components/SearchScreen/Loading";
import useMovieDetails from "@/hooks/useMovieDetails";
import { StyleSheet, ImageBackground } from "react-native";

interface DetailScreenProps {}

const DetailScreen = (props: DetailScreenProps) => {
  const { movie, apiError, error, hideErrorToast, loading } = useMovieDetails();

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
