import { StatusBar } from 'expo-status-bar';
import styles from './GlobalCSS';
import { ScrollView, View} from 'react-native';
import CardProduct from './components/molecules/cardProduct';
export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <CardProduct
      uri={require('./assets/thsirt.jpg')}
      NamaProduct="T-SHIRT"
      HargaProduct="Rp. 150.000"
      />
      <CardProduct
      uri={require('./assets/pants.jpg')}
      NamaProduct="PANTS"
      HargaProduct="Rp. 100.000"
      />
      <CardProduct
      uri={require('./assets/socks.jpg')}
      NamaProduct="SOCKS"
      HargaProduct="Rp. 80.000"
      />
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

