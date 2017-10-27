import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

export default class ApartmentCell extends Component {

    constructor(props) {
        super(props);
        this.state = {
            apartments: []
        }
    }

    componentWillMount() {
    }

    render() {
        const {
            name,
            photos,
        } = this.props.apartment;
        let photo = {};
        if (photos.length > 0) {
            photo = {
                uri: photos[0].thumbnail
            };
        }

        return (
            <TouchableHighlight
                style={styles.container}
                onPress={this.props.onPress}
                underlayColor='#ccc'
                >
                <View>
                    <Image style={styles.image} source={photo} />
                    <Text style={styles.title}>
                        {name}
                    </Text>
                </View>
            </TouchableHighlight>
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
