import React from 'react';
import EventList from './components/EventList';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
    // eslint-disable-next-line class-methods-use-this
    render() {
        return (
            <EventList />
        );
    }
}