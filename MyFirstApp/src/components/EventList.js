/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable class-methods-use-this */

import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import EventCard from './EventCard'
class EventList extends Component {
    state={
        events: []
    }

    componentDidMount() {
        const events = require('../../db.json').events;
        this.setState({ events });
    }

    render () {
        return (
            <FlatList 
            data={this.state.events}
            renderItem={({ item }) => <EventCard event={ item }/>}
            keyExtractor={item => item.id}
            />
        );
    }
}

export default EventList;