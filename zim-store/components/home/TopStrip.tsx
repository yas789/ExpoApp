import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HEADER_YELLOW } from '@/constants/colors';

export function TopStrip() {
  return (
    <View style={styles.topStrip}>
      <Text style={styles.topStripText}>by zims for zims</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topStrip: {
    backgroundColor: HEADER_YELLOW,
    paddingVertical: 6,
    alignItems: 'center',
  },
  topStripText: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#222',
  },
});

