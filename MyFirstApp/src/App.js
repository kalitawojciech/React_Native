import React from 'react';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated'
])

const navigate = createStackNavigator({
    list: {
        screen: EventList,
        navigationOptions: () => ({
            title: 'Your events',
        }),
    },
    form: {
        screen: EventForm,
        navigationOptions: () => ({
            title: 'Add an event',
        }),
    }
});

const App = createAppContainer(navigate);

export default App;