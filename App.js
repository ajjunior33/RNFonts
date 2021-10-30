import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lorem ipsum</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex temporibus,
        minus ratione delectus dolore incidunt voluptas accusamus facilis vitae
        quo est nesciunt atque similique hic eius, sint, recusandae animi quam!
      </Text>
      <View style={styles.row}>
        <Text style={styles.noFont}>André Souza</Text>
        <Text style={styles.noFont}>21/10/2021</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    color: '#222',
    fontSize: 24,
    fontFamily: 'Inter Black',
  },
  text: {
    color: '#666',
    fontSize: 18,
    fontFamily: 'Inter Medium',
    textAlign: 'justify',
    marginVertical: 30,
  },
  noFont: {
    color: '#666',
    fontSize: 18,
    fontFamily: 'Inter',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});

export default App;
