import React, { useRef } from 'react';
import { Animated, Platform, Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import { Spacing, Shadows } from '@/constants/ui';


type Props = {
  categories: string[];
};

export function NavCategories({ categories }: Props) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.navRow}>
      {categories.map((label) => (
        <CategoryPill key={label} label={label} />
      ))}
    </ScrollView>
  );
}

function CategoryPill({ label }: { label: string }) {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(scale, { toValue: 0.96, useNativeDriver: true, speed: 20, bounciness: 6 }).start();
  };
  const onPressOut = () => {
    Animated.spring(scale, { toValue: 1, useNativeDriver: true, speed: 20, bounciness: 6 }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable
        style={styles.navItem}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        android_ripple={{ color: 'rgba(0,0,0,0.06)' }}
        accessibilityRole="button"
        accessibilityLabel={`Category ${label}`}
      >
        <Text style={styles.navItemText}>{label}</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  navRow: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    columnGap: Spacing.sm,
  },
  navItem: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
    ...Platform.select({ ios: Shadows?.sm ?? {}, android: Shadows?.sm ?? {} }),
  },
  navItemText: {
    fontSize: 12,
    color: '#444',
    fontWeight: '600',
  },
});
