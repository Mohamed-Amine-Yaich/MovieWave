import { height, width } from '@/constants/constants';
import * as React from 'react';
import {  StyleSheet, Image } from 'react-native';


const SearchImageBg = () => {
    return (<Image
        source={require("../../../assets/images/searchScreenBg.png")}
        style={styles.backgroundImage}
    />
    );
};

export default SearchImageBg;

const styles = StyleSheet.create({
    backgroundImage: {
        width: width,
        height: height,
        position: 'absolute',
    },
});
