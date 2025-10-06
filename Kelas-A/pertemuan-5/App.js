import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image,  Text, View, ScrollView } from 'react-native';
import CardProd from './components/molecules/Card-Prod';


export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
    
      <CardProd 
      uri='https://img.freepik.com/premium-psd/psd-tshirt-mockup-design_78090-756.jpg?semt=ais_hybrid&w=740&q=80'
      NamaProduct="T-Shirt"
      />
      <CardProd 
      NamaProduct="Kemeja"
      uri='https://image.uniqlo.com/UQ/ST3/id/imagesgoods/464938/item/idgoods_09_464938_3x4.jpg?width=494'
      />
      <CardProd 
      NamaProduct="Pants"
      uri={require('./assets/icon.png')}
      />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
