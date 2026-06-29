import "@/global.css"
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href='/Onboarding' className="bg-primary text-white p-4 rounded mt-4">GO</Link>
      <Link href='/(auth)/Sign-in' className="bg-primary text-white p-4 rounded mt-4">Sign in</Link>
      <Link href='/(auth)/SignUp' className="bg-primary text-white p-4 rounded mt-4">Sign up</Link>
      <Link href="/subscriptions/spotify">Spotify Subscription</Link>
      <Link href={{
        pathname: '/subscriptions/[id]',
        params: { id: "claude" }
      }}>Claude subsctipyion</Link>
    </View>
  );
}