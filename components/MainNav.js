import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import LogIn from '../screens/LogIn';
import ProDucts from '../screens/ProDucts';
import Welcome from '../screens/Welcome';
import MyTabs from '../screens/BottomTab/MyTabs';
import Register from '../screens/Register';
import Checkcode from '../screens/Checkcode';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={MyTabs} />
      <Stack.Screen name="Login" component={LogIn} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Checkcode" component={Checkcode} />
      <Stack.Screen name="Products" component={ProDucts} />
    </Stack.Navigator>
  );
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator>
      </StackNavigator>
    </NavigationContainer>
  )
}
export default MainNavigator;