import React from 'react';
import TabNavigator from './navigation/TabNavigator.js'
import reducer from './reducers/index.js'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducers);


export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <TabNavigator />
      </Provider>
    );
  }
}

