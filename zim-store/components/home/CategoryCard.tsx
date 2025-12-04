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
import { Radius, Spacing, Shadows, FontSize } from '@/constants/ui';

type Props = {
  category: Category;
  style?: StyleProp<ViewStyle>;
  onPress?: (category: Category) => void;
};

export function CategoryCard({ category, style, onPress }: Props) {
  const scale = useRef(new Animated.Value(1)).current;
  const chevronScale = useRef(new Animated.Value(1)).current;

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
  const onChevronIn = () => {
    Animated.spring(chevronScale, { toValue: 0.92, useNativeDriver: true, speed: 20, bounciness: 6 }).start();
  };
  const onChevronOut = () => {
    Animated.spring(chevronScale, { toValue: 1, useNativeDriver: true, speed: 20, bounciness: 6 }).start();
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

        <Pressable onPressIn={onChevronIn} onPressOut={onChevronOut} onPress={handlePress} style={{ position: 'absolute', right: Spacing.sm, bottom: Spacing.sm }} hitSlop={6}>
          <Animated.View style={[styles.chevronBadge, { transform: [{ scale: chevronScale }] }]}>
            <Ionicons name="chevron-forward" size={14} color="#111" />
          </Animated.View>
        </Pressable>

        <View style={styles.categoryContent}>
          <Text style={styles.categoryName}>{category.name}</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  categoryCard: {
    borderRadius: Radius.lg,
    overflow: 'hidden',
    aspectRatio: 7 / 5,
    marginBottom: Spacing.md,
    ...Platform.select({
      ios: Shadows?.md ?? {},
      android: Shadows?.md ?? {},
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
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  categoryContent: {
    position: 'absolute',
    left: Spacing.lg,
    bottom: Spacing.lg,
  },
  categoryName: {
    fontSize: FontSize.lg,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  countBadge: {
    position: 'absolute',
    top: Spacing.sm,
    left: Spacing.sm,
    paddingHorizontal: Spacing.xs,
    paddingVertical: Spacing.xs,
    borderRadius: Radius.sm,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  countText: {
    fontSize: FontSize.caption,
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
