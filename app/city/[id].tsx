import { View, Text, StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router';

export default function WeatherScreen() {
    const { id } = useLocalSearchParams()

    return (
      <View style={styles.container}>
        <Text>{'Weather for ' + id}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:
    'center',
    justifyContent: 'center',
  },
});