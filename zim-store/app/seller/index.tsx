import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BACKGROUND, TEXT_PRIMARY, TEXT_SECONDARY } from '@/constants/colors';

export default function SellerStart() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Become a Seller</Text>
      <Text style={styles.body}>Coming soon: onboarding for local sellers.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: BACKGROUND, padding: 16 },
  title: { fontSize: 22, fontWeight: '800', color: TEXT_PRIMARY, marginBottom: 8 },
  body: { fontSize: 14, color: TEXT_SECONDARY },
});

