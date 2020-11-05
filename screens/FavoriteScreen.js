// favorite food item screen
// food category
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavoriteScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The Favorite Screen!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavoriteScreen;