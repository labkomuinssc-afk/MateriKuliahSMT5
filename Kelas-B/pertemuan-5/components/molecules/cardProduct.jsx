import {View} from 'react-native';
import styles from '../../GlobalCSS';
import TextProduct from '../atom/textProduct';
import ImgProduct from '../atom/imgProduct';
export default function CardProduct({uri, NamaProduct, HargaProduct}) {
    return(
        <View style={styles.card}>
            <ImgProduct uri={uri} />
            <TextProduct NamaProduct={NamaProduct} type='textProduct'/>
            <TextProduct NamaProduct={HargaProduct} type='price'/>
        </View>
    )
}