import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { convert } from 'pace-converter';
import dictionary from './dictionary';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 30,
    margin: 10
  },
  h1: {
    fontSize: 20,
    margin: 10
  },
  'normal-text': {
    fontSize: 15,
    margin: 10
  },
  'small-text': {
    fontSize: 10,
    margin: 10
  },
  menlo: {
    fontFamily: 'Menlo'
  },
  'menlo-bold': {
    fontFamily: 'Menlo-Bold'
  },
  'text-input': {
    height: 40,
    width: 100,
    borderColor: 'gray',
    borderWidth: 1,
    alignSelf: 'center',
    textAlign: 'center'
  }
});

const unit = 'minkm';

class App extends Component {
  constructor() {
    super();
    this.handleonChangeText = this.handleonChangeText.bind(this);
    this.state = { model: convert('4:45', unit) };
  }

  handleonChangeText(text) {
    this.setState({ model: convert(text, unit) });
  }

  render() {
    const { model } = this.state;
    return (
      <View style={styles.container}>
        <Text style={[styles['menlo-bold'], styles.title]}>{dictionary.title}</Text>
        <Text style={[styles.menlo, styles['normal-text']]}>{dictionary.description}</Text>
        <Text style={[styles.menlo, styles.h1]}>min/km</Text>
        <TextInput
          style={[styles.menlo, styles.h1, styles['text-input']]}
          value={this.state.model.minkm}
          onChangeText={this.handleonChangeText}
        />
        <Text style={[styles.menlo, styles.h1]}>km/h {model.kmh}</Text>
        <Text style={[styles.menlo, styles.h1]}>min/mi {model.minmi}</Text>
        <Text style={[styles.menlo, styles.h1]}>mi/h {model.mih}</Text>
        <Text style={[styles.menlo, styles['small-text']]}>{dictionary.version}</Text>
      </View >
    );
  }
}

export default App;
