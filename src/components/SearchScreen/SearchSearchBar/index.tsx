import * as React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRef } from 'react';
import { SEARCH_PLACEHOLDER } from '@/src/constants/constants';
import { useMovieSearchContext } from '@/src/context/MovieSearchContext';



const SearchBar = () => {
    const {  handleTextDebounce } = useMovieSearchContext()

    const textInputRef = useRef<TextInput>(null);

    const clearTextInput = () => {
        if (textInputRef.current) {
            textInputRef.current.clear();
        }
    }; 
    
    
    return (<View style={styles.textInputContainer}>
        <TextInput
            onChangeText={(text) => handleTextDebounce(text)}
            placeholder={SEARCH_PLACEHOLDER}
            placeholderTextColor="gray"
            style={[styles.textInput, Platform.OS === "web" && { outline: 'none' }]}
            ref={textInputRef}

        />
        <TouchableOpacity onPress={clearTextInput}>
            <Ionicons name="close-outline" size={25} color="gray" />
        </TouchableOpacity>
    </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({

    textInputContainer: {
        marginHorizontal: 16,
        marginBottom: 12,
        marginTop: 48,
        flexDirection: 'row',
        padding: 12,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        width: Platform.OS == 'web' ? '90%' : 'auto'

    },
    textInput: {
        paddingBottom: 4,
        paddingLeft: 24,
        flex: 1,
        fontWeight: '500',
        color: 'black',
        letterSpacing: 0.5,
        justifyContent: 'center',
        lineHeight: 22,

    },


})