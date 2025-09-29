import { Text, StyleSheet } from "react-native";
export default function TextProd({NamaProduct}) {
    return(
        <Text style={styles.textProduct}>{NamaProduct}</Text>   
     )
}
const styles = StyleSheet.create({
    textProduct: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
    }
})