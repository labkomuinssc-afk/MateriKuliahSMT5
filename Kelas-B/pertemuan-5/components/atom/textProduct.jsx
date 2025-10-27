import { Text } from "react-native";
import styles from "../../GlobalCSS";
export default function TextProd({NamaProduct, type = 'textProduct'}) {
    return(
        <Text style={styles[type]}>{NamaProduct}</Text>   
     )
}