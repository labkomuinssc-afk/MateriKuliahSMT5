import { Text, StyleSheet } from "react-native";
export default function TextProd({NamaProduct, type = 'textProduct'}) {
    return(
        <Text style={styles[type]}>{NamaProduct}</Text>   
     )
}
const styles = StyleSheet.create({
    textProduct: {
        fontSize: 20,
        fontWeight: 'bold',
        color : 'black',
        marginTop: 10,
    },
    price :{
        fontSize: 15,
        fontWeight: 'bold',
        color : 'red',
        fontStyle: 'italic',
    }

})