// food category --> meals inside category
// food category
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryMealScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The Category Meal Screen!</Text>
            <Button title="Go to Meal Detail!" onPress={() => {
                navigation.navigate({routeName: "MealDetail"})
            }} />
            <Button title="Go back!" onPress={() => {
                navigation.pop()
            }} />
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

export default CategoryMealScreen;