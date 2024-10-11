import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../pages/HomeScreen';
import SearchScreen from '../../pages/SearchScreen';
import LikesScreen from '../../pages/LikesScreen';
import NotificationsScreen from '../../pages/NotificationsScreen';
import ProfileScreen from '../../pages/ProfileScreen';
import TabIcon from '../atoms/TabIcon';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let title;
          
          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              title = 'Home';
              break;
            case 'Search':
              iconName = 'search-outline';
              title = 'Search';
              break;
            case 'Likes':
              iconName = 'heart-outline';
              title = 'Likes';
              break;
            case 'Notifications':
              iconName = 'notifications-outline';
              title = 'Notifications';
              break;
            case 'Profile':
              iconName = 'person-outline';
              title = 'Profile';
              break;
          }

          return <TabIcon iconName={iconName} title={title} isFocused={focused} />;
        },
        tabBarShowLabel: false, // Disable default label
        tabBarStyle: {
          height: 60,
          backgroundColor: '#ffffff',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          elevation: 5,
          shadowOpacity: 0.1,
          position: 'absolute',
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Likes" component={LikesScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
