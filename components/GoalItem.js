import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.text}</Text>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5E0ACC',
    },
    goalText: {
        color: '#ffffff',
    }
})