import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from './pace-converter';

describe('<App />', () => {
  test('expect to match snapshot', () => {
    const tree = renderer.create(
      <App />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
