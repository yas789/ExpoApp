import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BACKGROUND, TEXT_PRIMARY } from '@/constants/colors';
import { CATEGORY_CARDS } from '@/constants/shopData';
import { CategoryCard } from '@/components/home/CategoryCard';
import { useRouter } from 'expo-router';

export default function CategoriesScreen() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>All Categories</Text>
      <View style={styles.grid}>
        {CATEGORY_CARDS.map((c) => (
          <CategoryCard key={c.id} category={c} style={styles.gridItem} onPress={() => router.push(`/category/${c.id}`)} />
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
