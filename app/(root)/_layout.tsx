import {useGlobalContext} from "@/lib/global-provider";
import {SafeAreaView} from "react-native-safe-area-context";
import {ActivityIndicator} from "react-native";
import {Navigator, Redirect} from "expo-router";
import Slot = Navigator.Slot;

export default function AppLayout() {
    const {loading, isLoggedIn} = useGlobalContext();
    if (loading) {
        if (loading) return
        <SafeAreaView>
            <ActivityIndicator className="text-primary-300" size="large"/>
        </SafeAreaView>;
    }
    if (!isLoggedIn) {
        return <Redirect href="/sign-in"/>;

    }
    return <Slot/>
}