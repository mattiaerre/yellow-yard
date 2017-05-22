import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  welcome: {
    fontSize: 30,
    margin: 10
  },
  flip: {
    fontSize: 20,
    margin: 10
  },
  menlo: {
    fontFamily: 'Menlo'
  },
  'menlo-bold': {
    fontFamily: 'Menlo-Bold'
  }
});

// see: https://medium.freecodecamp.com/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb
const reverseString = input => ((input === '') ? '' : reverseString(input.substr(1)) + input.charAt(0));

class App extends Component {
  constructor(props) {
    super(props);
    const { name, data: { loading } } = props;
    this.state = { name, loading };

    this.handlePress = this.handlePress.bind(this);
  }

  componentWillReceiveProps({ data: { loading, registry } }) {
    this.setState({ loading, registry });
  }

  handlePress() {
    this.setState({ name: reverseString(this.state.name) });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles['menlo-bold'], styles.welcome]}>{this.state.name}</Text>
        <TouchableOpacity onPress={this.handlePress}>
          <Text style={[styles['menlo-bold'], styles.flip]}>Flip!</Text>
        </TouchableOpacity>
        <View>
          {
            this.state.loading
              ? <Text style={[styles.menlo]}>Loading ...</Text>
              : <Text style={[styles.menlo]}>{this.state.registry.ocVersion}</Text>
          }
        </View>
      </View >
    );
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

App.defaultProps = {
  data: { registry: {} }
};

export default graphql(gql`
  query registry {
    registry {
      href
      ocVersion
      type
    }
  }
`)(App);
