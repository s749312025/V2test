import { StackNavigator } from 'react-navigation';

import NavTab from './navTab'
import Details from './pages/details'

const RootNavigator = StackNavigator({
  Tab: {
    screen: NavTab,
    navigationOptions: {
      header: null
    }
  },
  Details: {
    screen: Details,
  },
});

export default RootNavigator;