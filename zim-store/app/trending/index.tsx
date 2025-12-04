import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BACKGROUND, TEXT_PRIMARY } from '@/constants/colors';
import { TRENDING_PRODUCTS } from '@/constants/shopData';
import { ProductCard } from '@/components/home/ProductCard';
import { useRouter } from 'expo-router';

export default function TrendingScreen() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Trending Products</Text>
      <View style={styles.grid}>
        {TRENDING_PRODUCTS.map((p) => (
          <ProductCard key={p.id} product={p} style={styles.gridItem} onPress={() => router.push(`/product/${p.id}`)} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: BACKGROUND },
  content: { padding: 16, paddingBottom: 32 },
  title: { fontSize: 22, fontWeight: '800', color: TEXT_PRIMARY, marginBottom: 12 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', columnGap: 12, rowGap: 12 },
  gridItem: { width: '48%' },
});

