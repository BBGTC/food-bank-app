import {
  NewsFeed,
  Profile
} from '../screens'
import HomeNavigator from './HomeNavigator'
import { Icon, useTheme } from '@rneui/themed'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { getDynamicTabBarIconProps } from './utils'

const PrivateNavigator = (): JSX.Element => {
  const Tab = createBottomTabNavigator()
  const { theme } = useTheme()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          const { iconName, iconType } = getDynamicTabBarIconProps(route.name, focused)
          return <Icon name={iconName} type={iconType} color={color} size={size}/>
        },
        tabBarActiveTintColor: theme.colors.red,
        tabBarInactiveTintColor: theme.colors.gray.A
      })}
        initialRouteName="Inicio"
    >
        <Tab.Screen name="Comunidad" component={NewsFeed}/>
        <Tab.Screen name="Inicio" component={HomeNavigator} />
        <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  )
}

export { PrivateNavigator }
