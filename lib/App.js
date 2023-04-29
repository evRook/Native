import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import style from './styles'
import Counter from './Components/Counter'

export default function App() {
  return (
    <View style={style.container}>
      <View>
        <Counter />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
