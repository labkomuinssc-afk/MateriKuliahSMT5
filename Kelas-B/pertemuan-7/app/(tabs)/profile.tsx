import {View} from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { Link } from 'expo-router';

export default function profile() {
    return (
        <View style={{flex: 1, justifyContent: 'center',
         alignItems: 'center'}}>
            <ThemedText>ini Halaman Profile</ThemedText>
            <Link href="/detail">
            <ThemedText type="link">Lihat Halaman Details
            </ThemedText>
            </Link>
        </View>
    );
}