import { StackNavigator, StackActions, NavigationActions } from 'react-navigation'

import PeopleScreen from "./src/screens/PeopleScreen"
import PeopleDetailScreen from './src/screens/PeopleDatailScreen'
import { capitalizeFirstLetter } from './src/util';

export default StackNavigator({
  'Main': {
      screen: PeopleScreen
  },
  'PeopleDetail': {
    screen: PeopleDetailScreen,
    navigationOptions: ({ navigation }) => {
      const peopleName = capitalizeFirstLetter(navigation.state.params.people.name.first)
      return ({
        title: peopleName
      })
    }
  }
}, {
  navigationOptions: {
    title: 'Pessoas!',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#6ca2f7'
    },
    headerTitleStyle: {
      color: 'white'
    }
  }
})