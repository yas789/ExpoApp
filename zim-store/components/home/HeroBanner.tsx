import React, { useRef, useState } from 'react';
import { Animated, ImageBackground, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { PRIMARY_YELLOW } from '@/constants/colors';
import { FontSize, Spacing } from '@/constants/ui';
import { useRouter } from 'expo-router';
import { PROMOTIONS } from '@/constants/promotions';

type Props = { height?: number; scrollY?: Animated.Value };

export function HeroBanner({ height, scrollY }: Props) {
  const router = useRouter();
  const { height: screenHeight } = useWindowDimensions();
  const heroHeight = height ?? Math.max(360, Math.floor(screenHeight * 0.42));
  const translateY = scrollY
    ? scrollY.interpolate({ inputRange: [-120, 0], outputRange: [10, 0], extrapolate: 'clamp' })
    : (0 as any);
  const scale = scrollY
    ? scrollY.interpolate({ inputRange: [-120, 0], outputRange: [1.06, 1], extrapolate: 'clamp' })
    : (1 as any);
  const { width } = useWindowDimensions();
  const isNarrow = width < 380;
  const scrollX = useRef(new Animated.Value(0)).current;
  const [active, setActive] = useState(0);

  return (
    <Animated.View style={[styles.hero, { height: heroHeight, transform: [{ translateY }, { scale }] }]}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setActive(index);
        }}
        scrollEventThrottle={16}
      >
        {PROMOTIONS.map((promo) => (
          <View key={promo.id} style={{ width, height: heroHeight }}>
            <ImageBackground
              source={{ uri: promo.imageUrl }}
              style={StyleSheet.absoluteFill}
              imageStyle={styles.heroImage}
            >
              <View style={styles.heroOverlay} />
              <View style={styles.heroContent}>
                <Text style={styles.heroTitle}>{promo.title}</Text>
                {promo.subtitle ? <Text style={styles.heroSubtitle}>{promo.subtitle}</Text> : null}
                <View style={[styles.heroButtonsRow, isNarrow && styles.heroButtonsColumn]}>
                  <Pressable style={[styles.heroButtonPrimary, isNarrow && styles.fullWidthBtn]} android_ripple={{ color: 'rgba(0,0,0,0.06)' }} onPress={() => router.push('/trending')}>
                    <Text style={styles.heroButtonPrimaryText}>Shop Now</Text>
                  </Pressable>
                  <Pressable style={[styles.heroButtonSecondaryOutline, isNarrow && styles.fullWidthBtn]} android_ripple={{ color: 'rgba(255,255,255,0.15)' }} onPress={() => router.push('/seller')}>
                    <Text style={styles.heroButtonSecondaryOutlineText}>Become a Seller</Text>
                  </Pressable>
                </View>
              </View>
            </ImageBackground>
          </View>
        ))}
      </Animated.ScrollView>
      <View style={styles.pagerRow}>
        {PROMOTIONS.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          const dotOpacity = scrollX.interpolate({ inputRange, outputRange: [0.3, 1, 0.3], extrapolate: 'clamp' });
          const dotScale = scrollX.interpolate({ inputRange, outputRange: [1, 1.2, 1], extrapolate: 'clamp' });
          return <Animated.View key={i} style={[styles.dot, { opacity: dotOpacity, transform: [{ scale: dotScale }] }]} />;
        })}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  hero: {
    width: '100%',
    justifyContent: 'flex-end',
    borderRadius: 0,
    overflow: 'hidden',
  },
  heroImage: {
    resizeMode: 'cover',
    borderRadius: 0,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  heroContent: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.lg,
  },
  heroTitle: {
    fontSize: FontSize.h1,
    lineHeight: 34,
    letterSpacing: 0.2,
    fontWeight: '900',
    color: '#FFFFFF',
    marginBottom: Spacing.sm,
    textShadowColor: 'rgba(0,0,0,0.25)',
    textShadowRadius: 2,
    textShadowOffset: { width: 0, height: 1 },
  },
  heroSubtitle: {
    color: '#FFFFFF',
    fontSize: FontSize.body,
    fontStyle: 'italic',
    marginBottom: Spacing.md,
  },
  heroButtonsRow: {
    flexDirection: 'row',
    columnGap: Spacing.md,
  },
  heroButtonsColumn: {
    flexDirection: 'column',
    rowGap: Spacing.sm,
  },
  heroButtonPrimary: {
    backgroundColor: PRIMARY_YELLOW,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  heroButtonPrimaryText: {
    color: '#000',
    fontWeight: '700',
  },
  heroButtonSecondaryOutline: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  heroButtonSecondaryOutlineText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  fullWidthBtn: {
    width: '100%',
    alignItems: 'center',
  },
  pagerRow: {
    position: 'absolute',
    bottom: Spacing.md,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 4,
  },
});
