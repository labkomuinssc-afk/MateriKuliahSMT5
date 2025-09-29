import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image,  Text, View } from 'react-native';
import TextProd from './components/atom/text-prod';

export default function App() {
  return (
    <View style={styles.container}>
    <TextProd NamaProduct="T-Shirt"/>
      <Text style={{fontSize:16, color:'grey'}}>
        Rp. 150.000</Text>
        <Image style={{width: 150, height:150 ,borderRadius:40}} 
        source={{uri:'https://img.freepik.com/premium-psd/psd-tshirt-mockup-design_78090-756.jpg?semt=ais_hybrid&w=740&q=80'}} 
        />
      <TextProd NamaProduct="Kemeja"/>
      <Text style={{fontSize:16, color:'grey', topMargin:30}}>
        Rp. 250.000</Text>
        <Image style={{width: 150, height:150 ,borderRadius:40}} 
        source={{uri:'https://image.uniqlo.com/UQ/ST3/id/imagesgoods/464938/item/idgoods_09_464938_3x4.jpg?width=494'}} 
        />
      <StatusBar style="auto" />
    </View>
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
