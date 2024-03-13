import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';

export default function ClockScreen({ navigation }) {
  const [iconColor, setIconColor] = useState('#25D421');
  const [buttonText, setButtonText] = useState('Clock In');

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Time Worked</Text>
        <Text style={styles.text}>
          Today: 00:00 {"\n"}
          Week: 00:00 {"\n"}
          </Text>
      </View>
      <View style={styles.buttonContainter}>
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setIconColor(iconColor === '#25D421' ? '#ED0D08' : '#25D421');
            setButtonText(buttonText === 'Clock In' ? 'Clock Out' : 'Clock In');
          }}>
          <MaterialIcons name="timer" size={60} color={iconColor} />
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 30,
  },
  text: {
    fontSize: 24,
    fontWeight: 'light',
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'medium',
    marginBottom: 16,
  },
  buttonContainter: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'medium',
    marginBottom: 16,
    display: 'flex',
  }
});
