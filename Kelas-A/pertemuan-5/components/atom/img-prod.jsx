import { Image, StyleSheet } from "react-native";

export default function ImgProd({uri})
{
const Imgsource =
typeof uri === 'string' ? {uri} : uri;
    return(
    <Image style={styles.img} source={Imgsource} />)
}
const styles = StyleSheet.create({
    img: {
     width: 150,
     height:150,
     borderRadius:40
    },
  });