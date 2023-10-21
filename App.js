import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';

import GoalItem from './components/GoalItem';
import { useState } from 'react';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [...courseGoals, { text: enteredGoal, id: Math.random().toString() }])
  }


  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your Course Goal' onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={itemData => {
          itemData.index
          return <GoalItem text={itemData.item.text} />
        }}
          keyExtractor={(item, index) => {
            return item.id
          }}
          alwaysBounceVertical={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 4,
  },

});
