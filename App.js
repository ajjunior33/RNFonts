import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello,world</Text>
      <Text style={styles.text}>Hi, André</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 24,
    fontFamily: 'Inter',
  },
  text: {
    color: '#666',
    fontSize: 16,
    fontWeight: '400',
  },
});

export default App;
