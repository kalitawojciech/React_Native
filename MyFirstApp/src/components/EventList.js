/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable class-methods-use-this */

import React, { Component } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import EventCard from './EventCard';

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#f3f3f3'
    }
});

class EventList extends Component {
    state={
        events: []
    }

    componentDidMount() {
        const events = require('../../db.json').events.map(e =>({
            ...e,
            date: new Date(e.date),
        }));
        this.setState({ events });
    }

    render () {
        return (
            <FlatList 
            style={styles.list}
            data={this.state.events}
            renderItem={({ item }) => <EventCard event={ item }/>}
            keyExtractor={item => item.id}
            />
        );
    }
}

export default EventList;