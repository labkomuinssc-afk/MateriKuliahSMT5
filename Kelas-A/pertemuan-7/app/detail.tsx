import { View } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { Link } from "expo-router";

export default function Detail() {
    return (
         <View style=
{{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ThemedText>ini halamanDetail</ThemedText>
            <Link href="/moreDetail">
            <ThemedText type="link">Halaman More Detail
            </ThemedText>
            </Link>
        </View>
    );
}