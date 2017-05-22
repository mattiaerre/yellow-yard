import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
  },
  flip: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Menlo-Bold'
  }
});

// see: https://medium.freecodecamp.com/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb
const reverseString = str => ((str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name };
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    const name = reverseString(this.state.name);
    this.setState({ name });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.state.name}</Text>
        <TouchableOpacity onPress={this.handlePress}>
          <Text style={styles.flip}>Flip!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired
};

export default App;
