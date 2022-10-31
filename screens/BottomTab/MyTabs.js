import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home';
import ProDucts from '../ProDucts';
import { Octicons } from '@expo/vector-icons';
import { Image, View, StyleSheet, Text } from 'react-native';
import Account from '../Account';
import Explore from '../Explore';
import Cart from '../Cart';
import Favourite from '../Favourite';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarInactiveTintColor: '#000',
                tabBarActiveTintColor: '#53B175',
                tabBarShowLabel: false,
                tabBarStyle: {
                    paddingVertical: 10,
                    paddingBottom: 10,
                    height: 65,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    tabBarBackground: '#fff',
                    shadowOpacity: 0.15,
                    position: 'absolute'

                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View className="items-center">
                            <Image
                                source={require('../../assets/images/home.png')}
                                style={{ width: 16, height: 16, tintColor: focused ? '#53B175' : '#000' }}
                            />
                            <Text style={{
                                fontFamily: 'Gilroy-Light',
                                color: focused ? '#53B175' : '#000',
                                fontSize: 13
                            }}>Shop</Text>
                        </View>
                    ),

                }}
            />
            <Tab.Screen
                name="Explore"
                component={Explore}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View className="items-center">
                            <Image
                                source={require('../../assets/images/Explore.png')}
                                style={{ width: 18, height: 12, tintColor: focused ? '#53B175' : '#000', }}
                            />
                            <Text style={{
                                fontFamily: 'Gilroy-Light',
                                color: focused ? '#53B175' : '#000',
                                fontSize: 13,
                                marginTop: 4
                            }}>Explore</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View className="items-center">
                            <Image
                                source={require('../../assets/images/card.png')}
                                style={{ width: 18, height: 16, tintColor: focused ? '#53B175' : '#000',  }}
                            />
                            <Text style={{
                                fontFamily: 'Gilroy-Light',
                                color: focused ? '#53B175' : '#000',
                                fontSize: 13
                            }}>Cart</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Favourite"
                component={Favourite}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View className="items-center">
                            <Image
                                source={require('../../assets/images/head.png')}
                                style={{ width: 18, height: 15, tintColor: focused ? '#53B175' : '#000',  }}
                            />
                            <Text style={{
                                fontFamily: 'Gilroy-Light',
                                color: focused ? '#53B175' : '#000',
                                fontSize: 13
                            }}>Favourite</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View className="items-center">
                            <Image
                                source={require('../../assets/images/user.png')}
                                style={{ width: 15, height: 18, tintColor: focused ? '#53B175' : '#000',  }}
                            />
                            <Text style={{
                                fontFamily: 'Gilroy-Light',
                                color: focused ? '#53B175' : '#000',
                                fontSize: 13
                            }}>Account</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
export default MyTabs
const styles = StyleSheet.create({

})