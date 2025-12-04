import React from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { PRIMARY_YELLOW, SECONDARY_GREEN } from '@/constants/colors';
import { useRouter } from 'expo-router';

export function HeroBanner() {
  const router = useRouter();
  const { height } = useWindowDimensions();
  const heroHeight = Math.max(360, Math.floor(height * 0.42));
  return (
    <ImageBackground
      source={{
        uri: 'https://images.pexels.com/photos/5945900/pexels-photo-5945900.jpeg?auto=compress&cs=tinysrgb&w=1200',
      }}
      style={[styles.hero, { height: heroHeight }]}
      imageStyle={styles.heroImage}
    >
      <View style={styles.heroOverlay} />
      <View style={styles.heroContent}>
        <Text style={styles.heroTitle}>Shop Local, Support Zimbabwe</Text>
        <Text style={styles.heroSubtitle}>by zims for zims</Text>
        <View style={styles.heroButtonsRow}>
          <Pressable style={styles.heroButtonPrimary} android_ripple={{ color: 'rgba(0,0,0,0.06)' }} onPress={() => router.push('/trending')}>
            <Text style={styles.heroButtonPrimaryText}>Shop Now</Text>
          </Pressable>
          <Pressable style={styles.heroButtonSecondary} android_ripple={{ color: 'rgba(0,0,0,0.06)' }} onPress={() => router.push('/seller')}>
            <Text style={styles.heroButtonSecondaryText}>Become a Seller</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  hero: {
    width: '100%',
    height: 420,
    marginTop: 0,
    marginHorizontal: 0,
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
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  heroContent: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  heroTitle: {
    fontSize: 36,
    lineHeight: 42,
    letterSpacing: 0.2,
    fontWeight: '900',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  heroSubtitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 12,
  },
  heroButtonsRow: {
    flexDirection: 'row',
    columnGap: 10,
  },
  heroButtonPrimary: {
    backgroundColor: PRIMARY_YELLOW,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 999,
  },
  heroButtonPrimaryText: {
    color: '#000',
    fontWeight: '700',
  },
  heroButtonSecondary: {
    backgroundColor: SECONDARY_GREEN,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 999,
  },
  heroButtonSecondaryText: {
    color: '#FFF',
    fontWeight: '600',
  },
});
