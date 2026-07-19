import { Stack } from 'expo-router';

export default function RootLayout() {
  return <Stack>
      <Stack.Screen name="city/[id]" options={{ title: "Weather" }} />
    </Stack>
}
