import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './src/Component/RootNavigation';
const App = () => {
  return (
    <View style={{ flex: 1 }}>
    <RootNavigation/>

    </View>
  );
};
export default App;
