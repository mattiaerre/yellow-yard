/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry
} from 'react-native';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import App from './app/index';

const networkInterface = createNetworkInterface({ uri: 'https://pink-pineapple.herokuapp.com/graphql' });
const client = new ApolloClient({ networkInterface });

const YellowYard = () => (
  <ApolloProvider client={client}>
    <App name="OpenComponents" />
  </ApolloProvider>
);

AppRegistry.registerComponent('YellowYard', () => YellowYard);
