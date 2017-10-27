/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SearchView from './components/SearchView.js';
import ApartmentDetails from './components/ApartmentDetails.js';

const App = StackNavigator(
    {
        Search: { screen: SearchView },
        Details: { screen: ApartmentDetails },
    }
);

export default App;
