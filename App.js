import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { useState } from 'react';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoal) {
    setCourseGoals(currentCourseGoals => [...courseGoals, { text: enteredGoal, id: Math.random().toString() }])
  }

  function deleteGoalHandler(id) {
    // console.log('delete');
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    })
  }


  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={itemData => {
          itemData.index
          return <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id} />
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
  goalsContainer: {
    flex: 4,
  },

});
