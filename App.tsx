import { View } from 'react-native';
import { CalculadoraScreen } from './src/screens';
import { GlobalStyles } from './src/theme/App-theme';
import CatGame from './src/screens/CatScreenGenerator';

export default function App() {
  return (
    <View style={ GlobalStyles.background }>
      <CalculadoraScreen />
      {/* <CatGame /> */}
    </View>
  );
}