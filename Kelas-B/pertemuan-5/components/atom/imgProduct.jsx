// Import Libraries
import {Image} from 'react-native';
import styles from '../../GlobalCSS';
// Membuat Komponent & Export Komponent
export default function ImgProduct({uri}) {
   return (
      <Image style={styles.img} source={uri} />
   ) 
}
