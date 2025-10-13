import {View} from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { Link } from 'expo-router';

export default function Detail() {
    return ( 
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ThemedText>ini halaman Detail</ThemedText>
            <Link href="/">
            <ThemedText type="link">Beranda
            </ThemedText>
            </Link>
        </View>
    );
}