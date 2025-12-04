import React from 'react';
import { Animated, Platform, StyleSheet, Text, View } from 'react-native';
import { HEADER_YELLOW, TEXT_PRIMARY } from '@/constants/colors';

type Props = {
  scrollY: Animated.Value;
};

export function CollapsingHeader({ scrollY }: Props) {
  const opacity = scrollY.interpolate({
    inputRange: [0, 120],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const elevation = scrollY.interpolate({
    inputRange: [0, 120],
    outputRange: [0, 4],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.container,
        {
          backgroundColor: HEADER_YELLOW,
          opacity,
          ...(Platform.OS === 'android' ? { elevation } : { shadowOpacity: 0.1, shadowRadius: 8, shadowOffset: { width: 0, height: 4 } }),
        },
      ]}
    >
      <View style={styles.content}> 
        <Text style={styles.brand}>Amazin</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 64,
    zIndex: 100,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.select({ ios: 12, default: 0 }),
  },
  brand: {
    fontSize: 18,
    fontWeight: '800',
    color: TEXT_PRIMARY,
  },
});

