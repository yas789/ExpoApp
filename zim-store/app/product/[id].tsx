import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { BACKGROUND, TEXT_PRIMARY, TEXT_SECONDARY } from '@/constants/colors';
import { TRENDING_PRODUCTS } from '@/constants/shopData';

export default function ProductDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const product = TRENDING_PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.title}>Product not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image source={{ uri: product.imageUrl }} style={styles.heroImage} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.subtitle}>by {product.seller}</Text>
      <Text style={styles.price}>
        {product.currency}
        {product.price.toFixed(2)}
      </Text>
      <Text style={styles.body}>More details coming soon.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: BACKGROUND },
  content: { paddingBottom: 24 },
  center: { alignItems: 'center', justifyContent: 'center' },
  heroImage: { width: '100%', height: 320 },
  title: { fontSize: 22, fontWeight: '800', color: TEXT_PRIMARY, marginTop: 12, paddingHorizontal: 16 },
  subtitle: { fontSize: 14, color: TEXT_SECONDARY, paddingHorizontal: 16, marginTop: 4 },
  price: { fontSize: 20, fontWeight: '800', color: TEXT_PRIMARY, paddingHorizontal: 16, marginTop: 8 },
  body: { fontSize: 14, color: TEXT_SECONDARY, paddingHorizontal: 16, marginTop: 12 },
});

