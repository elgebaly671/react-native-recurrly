import "@/global.css"
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from 'nativewind'

const SafeAreaView = styled(RNSafeAreaView);
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
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
    </SafeAreaView>
  );
}