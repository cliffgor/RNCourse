import { Button, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'

function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText);
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Your Course Goal' onChangeText={goalInputHandler} />
            <Button title='Add Goal' onPress={props.onAddGoal} />
        </View>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderColor: '#cccccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 10,
        padding: 10
    },
})