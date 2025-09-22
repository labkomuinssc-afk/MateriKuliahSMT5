import { StatusBar } from 'expo-status-bar';
import { Image, TextInput,Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
export default function App() {
  const [name, setName] = React.useState('');
  const [alamat, setAlamat] = React.useState('');

  const handlePress = () => {
    //kode untuk save ke db

    // menampilkan alert
    alert(`Data dengan nama ${name} dan alamat ${alamat} 
    sudah tersimpan!`);
    
  }
  return (
     <View style={styles.container}>
      <Image source={{uri: 
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Logo-UINSSC-696x858.png/250px-Logo-UINSSC-696x858.png'}} 
      style={{width: 100, height: 100 }} />
     <Text style={styles.text}>FORM BIODATA MAHASISWA</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.input}
      placeholder='Masukkan Nama' 
      value={name} 
      onChangeText={setName}
      />
      <TextInput style={styles.input}
      placeholder='masukan alamat'
      multiline={true}
      numberOfLines={4}
      textAlignVertical='top'
      value={alamat}
      onChangeText={setAlamat}
      />
      <Button title='Simpan' onPress={handlePress} />
      {/* <Text>Haloo {name}</Text> */}
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
  text: {
    color: 'green',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 'auto',
    margin : 12,
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    width: '70%',
  },
});
