import React, { useRef } from 'react';
import { Animated, ScrollView, StyleSheet, View } from 'react-native';
import { BACKGROUND } from '@/constants/colors';
import { CATEGORY_CARDS, NAV_CATEGORIES, TRENDING_PRODUCTS } from '@/constants/shopData';
import { TopStrip } from '@/components/home/TopStrip';
import { HeaderBar } from '@/components/home/HeaderBar';
import { NavCategories } from '@/components/home/NavCategories';
import { HeroBanner } from '@/components/home/HeroBanner';
import { CategoryCard } from '@/components/home/CategoryCard';
import { ProductCard } from '@/components/home/ProductCard';
import { SupportSection } from '@/components/home/SupportSection';
import { Footer } from '@/components/home/Footer';
import { SectionHeader } from '@/components/common/SectionHeader';
import { useRouter } from 'expo-router';
import { CollapsingHeader } from '@/components/home/CollapsingHeader';

export default function HomeScreen() {
  const router = useRouter();
  const scrollY = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <CollapsingHeader scrollY={scrollY} />
      <Animated.ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
      <TopStrip />
      <HeaderBar />
      <NavCategories categories={NAV_CATEGORIES} />
      <Animated.View
        style={{
          transform: [
            {
              translateY: scrollY.interpolate({ inputRange: [0, 200], outputRange: [0, -80], extrapolate: 'clamp' }),
            },
          ],
          opacity: scrollY.interpolate({ inputRange: [0, 160], outputRange: [1, 0.8], extrapolate: 'clamp' }),
        }}
      >
        <HeroBanner />
      </Animated.View>

      <View style={styles.section}>
        <SectionHeader title="Shop by Category" onPressAction={() => router.push('/category')} />
        <View style={styles.categoryGrid}>
          {CATEGORY_CARDS.map((cat) => (
            <CategoryCard key={cat.id} category={cat} style={styles.gridItem} onPress={(c) => router.push(`/category/${c.id}`)} />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <SectionHeader title="Trending Products" onPressAction={() => router.push('/trending')} />
        <View style={styles.productGrid}>
          {TRENDING_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} style={styles.gridItem} onPress={(p) => router.push(`/product/${p.id}`)} />
          ))}
        </View>
      </View>

      <SupportSection />
      <Footer />
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  section: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  
  categoryGrid: {
    marginTop: 4,
    rowGap: 12,
    columnGap: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  productGrid: {
    marginTop: 8,
    rowGap: 12,
    columnGap: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridItem: {
    width: '48%',
  },
});
