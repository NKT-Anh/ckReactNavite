import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screen/User/Home';
import LogIn from '../Screen/User/LogIn';
import SignUp from '../Screen/User/SignUp';
import ForgetPassword from '../Screen/User/ForgetPassword';
import CartDetail from '../Screen/User/CartDetail';
import Payment from '../Screen/User/Payment';
const Stack = createNativeStackNavigator();
const ScreensNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="CartDetail" component={CartDetail} />
      <Stack.Screen name="Payment" component={Payment} />
    </Stack.Navigator>
  )
}
export default ScreensNavigation;