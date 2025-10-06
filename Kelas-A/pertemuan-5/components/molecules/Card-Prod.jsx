import ImgProd from "../atom/img-prod";
import TextProd from "../atom/text-prod";
import {  View } from "react-native";
import styles from "../../style";
export default function CardProd({uri, NamaProduct}) {
    return (
        <View style={styles.card}>
            <TextProd NamaProduct={NamaProduct} />
            <TextProd type='price' NamaProduct="Rp. 200.000" />
            <ImgProd uri={uri} 
            />
        </View>
    );
}

