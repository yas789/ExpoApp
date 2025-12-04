import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TEXT_PRIMARY, TEXT_SECONDARY } from '@/constants/colors';

export function SupportSection() {
  return (
    <View style={styles.supportSection}>
      <Text style={styles.supportTitle}>Support Local Sellers</Text>
      <Text style={styles.supportText}>
        Every purchase you make supports local Zimbabwean businesses and helps grow our
        community.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  supportSection: {
    marginTop: 28,
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: '#F0F0F0',
  },
  supportTitle: {
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 8,
    color: TEXT_PRIMARY,
  },
  supportText: {
    fontSize: 14,
    color: TEXT_SECONDARY,
    textAlign: 'center',
  },
});
