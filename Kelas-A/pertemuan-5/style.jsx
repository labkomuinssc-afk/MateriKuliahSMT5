import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    textProduct: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'green',
        marginTop: 30,
        marginBottom: 10,
        textAlign: 'center',
        fontFamily: 'serif',
    },
    price:{
        fontSize: 20,
        color: 'grey',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        fontFamily: 'serif',
    },
    card: {
        backgroundColor: "white",
        padding: 10,
        margin: 10,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})
export default styles