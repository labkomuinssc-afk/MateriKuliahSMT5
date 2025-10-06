import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
  width: 250,
  height: 250,
  backgroundColor: '#ffffffff',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 30,
  margin: 20,
  shadowColor: '#000',
  shadowOffset: {
    width: 2,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
    },
       img: {
      width: 150,
      height: 150,
      borderRadius: 40
   },
   textProduct: {
        fontSize: 20,
        fontWeight: 'bold',
        color : 'black',
        marginTop: 10,
    },
    price :{
        fontSize: 15,
        fontWeight: 'bold',
        color : 'grey',
        fontStyle: 'italic',
    }
  
});
export default styles
