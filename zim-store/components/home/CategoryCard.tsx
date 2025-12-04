import React, { useRef } from 'react';
import {
  Animated,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import type { CategoryCard as Category } from '@/types/shop';
import { Radius, Spacing, Shadows } from '@/constants/ui';

type Props = {
  category: Category;
  style?: StyleProp<ViewStyle>;
  onPress?: (category: Category) => void;
};

export function CategoryCard({ category, style, onPress }: Props) {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.97,
      useNativeDriver: true,
      speed: 20,
      bounciness: 6,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 20,
      bounciness: 6,
    }).start();
  };

  const handlePress = () => {
    Haptics.selectionAsync().catch(() => {});
    onPress?.(category);
  };

  return (
    <Animated.View style={[styles.categoryCard, style, { transform: [{ scale }] }]}>
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handlePress}
        android_ripple={{ color: 'rgba(0,0,0,0.06)' }}
        accessibilityRole="button"
        accessibilityLabel={`${category.name}, ${category.itemsCount} items`}
        style={styles.pressable}
      >
        <Image source={{ uri: category.imageUrl }} style={styles.categoryImage} />
        <View style={styles.categoryOverlay} />

        <View style={styles.countBadge}>
          <Text style={styles.countText}>{category.itemsCount} items</Text>
        </View>

        <View style={styles.chevronBadge}>
          <Ionicons name="chevron-forward" size={14} color="#111" />
        </View>

        <View style={styles.categoryContent}>
          <Text style={styles.categoryName}>{category.name}</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  categoryCard: {
    borderRadius: Radius.md,
    overflow: 'hidden',
    height: 160,
    ...Platform.select({
      ios: Shadows?.sm ?? {},
      android: Shadows?.sm ?? {},
    }),
  },
  pressable: {
    flex: 1,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  categoryOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  categoryContent: {
    position: 'absolute',
    left: Spacing.lg,
    bottom: Spacing.lg,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  countBadge: {
    position: 'absolute',
    top: Spacing.sm,
    left: Spacing.sm,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  countText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#222',
  },
  chevronBadge: {
    position: 'absolute',
    right: Spacing.sm,
    bottom: Spacing.sm,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.95)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
