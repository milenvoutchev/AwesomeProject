import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';

export default class ApartmentDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            apartments: []
        }
    }

    componentWillMount() {
    }

    render() {
        const apartment = this.props.navigation.state.params.apartment;
        console.log(apartment);
        return (
            <Text style={styles.container}>
                {apartment.name}
            </Text>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    margin: 8,
    borderRadius: 6,
  },
  image: {
      height: 200,
  },
  title: {
      fontSize: 18,
      padding: 4,
  }
});
