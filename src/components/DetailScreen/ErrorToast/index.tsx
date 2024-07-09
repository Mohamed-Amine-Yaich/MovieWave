import { useMovieDetailsContext } from '@/src/context/MovieDetailsContext';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';



const ErrorToast = () => {
    const { apiError, error, hideErrorToast } = useMovieDetailsContext();

    return (
        <Modal
            isVisible={!!(error || apiError)}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            backdropOpacity={0.3}
            onBackdropPress={hideErrorToast}
            style={styles.modal}

        >
            <View style={styles.toastContainer}>
                <Text style={styles.toastText}>{error
                    ? "An error has occurred. Please try later!"
                    : apiError &&
                    "Movie could not be loaded. Please try again later."}</Text>
                <TouchableOpacity onPress={hideErrorToast} style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};


/* 
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
            />*/
const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',


    },
    toastContainer: {
        backgroundColor: '#FF6347',
        padding: 16,
        borderRadius: 8,
        margin: 16,
        elevation: 2,
    },
    toastText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
    },
    closeButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#FF4500',
        borderRadius: 5,
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '600',
    },
});

export default ErrorToast;