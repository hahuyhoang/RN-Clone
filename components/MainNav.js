import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import LogIn from '../screens/LogIn';
import ProDucts from '../screens/ProDucts';
import Welcome from '../screens/Welcome';
import MyTabs from '../screens/BottomTab/MyTabs';
import Register from '../screens/Register';
import Checkcode from '../screens/Checkcode';
import { useContext } from 'react';
import { AuthContext } from '../screens/context/AuthContext';

const Stack = createStackNavigator();

function StackNavigator() {
  const {userInfo} = useContext(AuthContext)
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      {userInfo.token ? (
        <>
      <Stack.Screen name="Home" component={MyTabs} />
      <Stack.Screen name="Products" component={ProDucts} />

      </>) :(
        <>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={LogIn} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Checkcode" component={Checkcode} />
      </>
      )}
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