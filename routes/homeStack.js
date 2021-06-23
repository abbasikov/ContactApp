import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Home from '../screens/Home';
import ContactsList from '../screens/ContactsList';
import ContactDetail from '../screens/ContactDetail';

const screens = {
    Contacts: {
        screen: Home
    },
    ContactList: {
        screen: ContactsList
    },
    Detail: {
        screen: ContactDetail
    }
}

const homeStack = createStackNavigator(screens)
export default createAppContainer(homeStack)