import React, { Component } from 'react';
import {
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';
import ApartmentCell from './ApartmentCell';

export default class SearchView extends Component {
    static navigationOptions = {
        title: 'apartments'
    }

    constructor(props) {
        super(props);
        this.state = {
            apartments: [],
            isLoading: true,
            errorMessage: null,
        }
    }

    componentWillMount() {
        this.fetchApartments()
    }

    fetchApartments() {
        fetch('https://www.nestpick.com/en/search/api?city=berlin')
            .then(response => response.json())
            .then(json => this.setState({
                apartments: json.items,
                isLoading: false,
                errorMessage: null,
            }))
            .catch(error => this.setState({
                errorMessage: error.message,
            }))
    }

    renderItem = ({ item }) => {
        return (
            <ApartmentCell apartment={item} onPress={() => this.props.navigation.navigate('Details', { apartment: item })}></ApartmentCell>
        );
    }

    render() {
        const { isLoading, errorMessage } = this.state;
        if (isLoading) {
            return <ActivityIndicator style={styles.activityIndicator} />
        }
        if (errorMessage) {
            return (
                <View><Text>{errorMessage}</Text></View>
            )
        }
        return (
            <FlatList
                data={this.state.apartments}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
             />
        )
    }
}

const styles = StyleSheet.create({
    activityIndicator: {
        flex: 1,
        alignSelf: 'center',
    }
});
