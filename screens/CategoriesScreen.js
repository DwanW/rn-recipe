// food category
import React from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity, Platform } from 'react-native';
import { CATEGORIES } from '../data/category-data';
import colors from '../constants/colors';
import { color } from 'react-native-reanimated';

const CategoriesScreen = ({ navigation }) => {

    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('CategoryMeals')} style={styles.gridItem} >
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    )
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? colors.primaryColor : ''
    },
    headerTintColor:Platform.OS === 'android' ? 'white' : colors.primaryColor
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 10,
        height: 120,
    }
})

export default CategoriesScreen;