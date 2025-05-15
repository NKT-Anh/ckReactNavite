import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import ScreensNavigation from './ScreensNavigation';
import {UserProvider} from '../Firebase/UserContext';

const RootNavigation = () => {
  return (
    <UserProvider>
    <NavigationContainer>
    <ScreensNavigation/>
  </NavigationContainer>
  </UserProvider>
  )
}

export default RootNavigation