import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'red', width: 100, height: 100 }}>

      </View>
      <Text style={styles.welcomeText}>Welcome to RNCourses</Text>
      <Text style={{ margin: 16, borderWidth: 2, borderColor: 'green', padding: 15 }}>Another Welcome Message</Text>
      <Button title='Open the new test' />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcomeText: {
    margin: 16,
    borderWidth: 2,
    borderColor: 'red',
    padding: 15
  }
});
