// App.js

import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  // State to keep track of the counter value
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const increment = () => setCount(count + 1);

  // Function to decrement the counter
  const decrement = () => setCount(count - 1);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.counterContainer}>
        <Text style={styles.counter}>{count} hi</Text>
        <View style={styles.buttonContainer}>
          <Button title="Increaser" onPress={increment} />
          <Button title="Decreaser" onPress={decrement} />

        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    alignItems: 'center',
  },
  counter: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});

export default App;
