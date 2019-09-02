import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import About from '../screens/About';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
    }
  },
  About: {
    screen: About,
  }
});

export default createAppContainer(AppNavigator);
