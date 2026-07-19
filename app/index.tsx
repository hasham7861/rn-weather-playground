import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text>Weathers for cities</Text>
      <Link href="/city/London" style={styles.link}>London</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:
    'center',
    justifyContent: 'center',
  },
  link: {
    color: '#007bff',
  }
});
