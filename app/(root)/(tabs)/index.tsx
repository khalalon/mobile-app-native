import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text style={{ fontSize: 24, fontWeight: "bold", marginVertical: 10 }}>
                Welcome to Mobile Application
            </Text>

            <Link href="/sign-in">
                <Text style={{ color: "blue", fontSize: 18 }}>Sign in</Text>
            </Link>
            <Link href="/explore">
                <Text style={{ color: "blue", fontSize: 18 }}>Explore</Text>
            </Link>
            <Link href="/profile">
                <Text style={{ color: "blue", fontSize: 18 }}>Profile</Text>
            </Link>
            <Link href="/properties/1">
                <Text style={{ color: "blue", fontSize: 18 }}>Property</Text>
            </Link>
        </View>
    );
}
