import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Menlo-Bold'
  }
});

const App = ({ name }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>{name}</Text>
  </View>
);

App.propTypes = {
  name: PropTypes.string.isRequired
};

export default App;
