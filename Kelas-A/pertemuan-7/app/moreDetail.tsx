import { View } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { Stack, Link } from "expo-router";

export default function moreDetail() {
    return (
         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {/* untuk melakukan modifikasi pada header */}
            <Stack.Screen options={{ title: 'More Detail',
             headerTitleAlign: 'center'
             }} />

            <ThemedText>ini halaman More Detail</ThemedText>
            <Link href="/" >
            <ThemedText type="link">Beranda
            </ThemedText>
            </Link>
        </View>
    );
}