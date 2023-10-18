import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View >
      <View style={styles.appContainer}>
        <TextInput placeholder='Your Course Goal' />
        <Button title='Add Goal' />
      </View>
      <View>
        <Text>Course Goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  },
});
