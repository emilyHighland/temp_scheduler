import { View, Text, StyleSheet, Button } from 'react-native';

export default function NotesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notes</Text>
    </View>
  );
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
