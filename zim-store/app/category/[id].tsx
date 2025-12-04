import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { BACKGROUND, TEXT_PRIMARY, TEXT_SECONDARY } from '@/constants/colors';

export default function CategoryDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category</Text>
      <Text style={styles.subtitle}>{id}</Text>
      <Text style={styles.body}>Coming soon: products in this category.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: TEXT_PRIMARY,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: TEXT_SECONDARY,
    marginBottom: 16,
  },
  body: {
    fontSize: 14,
    color: TEXT_SECONDARY,
  },
});

