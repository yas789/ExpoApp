import React, { useMemo, useRef } from 'react';
import { Animated, StyleSheet, View, useWindowDimensions, Platform } from 'react-native';
import { BACKGROUND } from '@/constants/colors';
import { Spacing } from '@/constants/ui';
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
import { Fonts } from '@/constants/theme';
import { useRouter } from 'expo-router';
// Keep top UI (strip, search, tags) sticky while scrolling

export default function HomeScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  // Category grid sizing — responsive by width to avoid tiny cards on phones
  const catPad = width < 480 ? Spacing.lg : Spacing.xl;
  const gap = width < 480 ? Spacing.md : Spacing.lg;
  const minCatWidth = width < 480 ? 170 : 190;
  const maxCatColumns = width >= 1024 ? 4 : 2;
  const catContainerWidth = Math.max(0, width - catPad * 2);
  const possibleCatCols = Math.floor((catContainerWidth + gap) / (minCatWidth + gap));
  const columns = Math.max(1, Math.min(maxCatColumns, possibleCatCols));
  const gridItemWidthPx = Math.floor((catContainerWidth - gap * (columns - 1)) / columns);
  const categoriesToShow = useMemo(() => CATEGORY_CARDS.slice(0, 4), []);
  const stickyHeader = (
    <View style={styles.stickyHeader}>
      <TopStrip />
      <HeaderBar />
      <NavCategories categories={NAV_CATEGORIES} />
    </View>
  );
  const scrollY = useRef(new Animated.Value(0)).current;
  // Trending Products: always 2 cards per row with even gaps and outer padding
  const trendingColumns = 2;
  const trendingHorizontalPadding = Spacing.xl;
  const trendingGap = Spacing.lg;
  const trendingContainerWidth = Math.max(0, width - trendingHorizontalPadding * 2);
  const trendingCardWidthPx = Math.floor((trendingContainerWidth - trendingGap * (trendingColumns - 1)) / trendingColumns);
  return (
    <View style={styles.container}>
      <Animated.ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
      {stickyHeader}
      <HeroBanner scrollY={scrollY} />

      <View style={[styles.section, { paddingHorizontal: catPad }]}>
        <SectionHeader
          title="Shop by Category"
          onPressAction={() => router.push('/category')}
          titleStyle={{ fontSize: 24, fontWeight: '900', fontFamily: Fonts.rounded }}
        />
        <View style={[styles.categoryGrid, { justifyContent: 'center', marginHorizontal: -gap / 2 }]}>
          {categoriesToShow.map((cat) => (
            <View key={cat.id} style={{ width: gridItemWidthPx, paddingHorizontal: gap / 2, marginBottom: gap }}>
              <CategoryCard category={cat} onPress={(c) => router.push(`/category/${c.id}`)} />
            </View>
          ))}
        </View>
      </View>

      <View style={[styles.section, { paddingHorizontal: trendingHorizontalPadding }]}>
        <SectionHeader title="Trending Products" onPressAction={() => router.push('/trending')} />
        {/* Use padding on children + negative margin on container to emulate gaps on native */}
        <View style={[styles.productGrid, { marginHorizontal: -trendingGap / 2 }]}>
          {TRENDING_PRODUCTS.map((product) => (
            <View
              key={product.id}
              style={{ width: trendingCardWidthPx, paddingHorizontal: trendingGap / 2, marginBottom: trendingGap }}
            >
              <ProductCard product={product} onPress={(p) => router.push(`/product/${p.id}`)} />
            </View>
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
  stickyHeader: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E0E0E0',
  },
  scrollContent: {
    paddingBottom: 32,
  },
  section: {
    paddingHorizontal: Spacing.xxl,
    paddingTop: Spacing.xxl,
    paddingBottom: Spacing.xxl,
  },
  
  categoryGrid: {
    marginTop: Spacing.md,
    rowGap: Spacing.xl,
    columnGap: Spacing.xl,
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
