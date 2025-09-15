import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{uri:'https://media.tenor.com/Yj4grvIBitkAAAAM/jake-is.gif'}}
       style={{width: 200, height: 200}}/>
      <Text style={{fontSize:20}}>Selamat Datang 
        <Text style={{fontWeight:'bold', 
          color:'blue',
        }}> Kelas B</Text>
      </Text>
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
