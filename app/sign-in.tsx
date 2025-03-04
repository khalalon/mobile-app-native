import {View, Text, ScrollView, Image, TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import {login} from "@/lib/appwrite";
import {useGlobalContext} from "@/lib/global-provider";
import {Redirect} from "expo-router";

const SignIn = () => {
    const {refetch,loading,isLoggedIn} = useGlobalContext();
    if (loading && !isLoggedIn) { return <Redirect href="/" /> }
    const handleLogin = async ()=> {
        const result = await login();
        if(result) {
            refetch();
        } else {
            return Alert.alert("Error", "Failed to login !! ");
        }

    }

    return (
        //Safe area view ensures every thing fits properly in the screen
        <View>
            <SafeAreaView className="bg-white">
                <ScrollView contentContainerClassName="h-full">
                    <Image
                        source={images.onboarding}
                        className="w-full h-4/6"
                        resizeMode="contain"
                    />
                    <View >
                        <Text className="text-base text-center uppercase font-rubik text-black-200">
                            Welcome Home
                        </Text>
                        <Text className= "text-3xl font-rubik-bold text-black-300 text-center mt-2">
                            Hello My friend !
                            <Text className="text-primary-300" >Your Application </Text>
                        </Text>
                        <Text className="text-lg font-rubik text-black-200 text-center mt-12">
                            Login With Google !
                        </Text>
                        <TouchableOpacity className="bg-white shadow-md shadow-zinc-300 rounded-full py-4 mt-5" onPress={handleLogin}>
                            <View className="flex flex-row items-center justify-center">
                                <Image source={icons.google}
                                       className="w-5 h-5"
                                       resizeMode="contain"/>
                                <Text className="text-lg font-rubik-medium text-black-300 ml-2">Continue with Google </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
export default SignIn
