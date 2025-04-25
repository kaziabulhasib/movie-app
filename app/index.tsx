import { Text, View } from "react-native";
import "./global.css";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className=' flex-1 justify-center items-center '>
      <Text className='  text-3xl font-bold text-dark-200'>
        Welcome to my app
      </Text>
      <Link href='/Onboarding'>onboarding</Link>
      <Link href='/movies/squidgames'>details</Link>
    </View>
  );
}
