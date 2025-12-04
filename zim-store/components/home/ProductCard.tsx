import React, { useRef } from 'react';
import {
  Animated,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { ProductCard as Product } from '@/types/shop';
import { PRIMARY_YELLOW, SECONDARY_GREEN, TEXT_PRIMARY, TEXT_SECONDARY } from '@/constants/colors';
import { Radius, Spacing, Shadows, FontSize } from '@/constants/ui';

type Props = {
  product: Product;
  style?: StyleProp<ViewStyle>;
  onPress?: (product: Product) => void;
};

export function ProductCard({ product, style, onPress }: Props) {
  const scale = useRef(new Animated.Value(1)).current;
  const imageOpacity = useRef(new Animated.Value(0)).current;

  const onPressIn = () => {
    Animated.spring(scale, { toValue: 0.98, useNativeDriver: true, speed: 20, bounciness: 6 }).start();
  };
  const onPressOut = () => {
    Animated.spring(scale, { toValue: 1, useNativeDriver: true, speed: 20, bounciness: 6 }).start();
  };

  return (
    <Animated.View style={[styles.productCard, style, { transform: [{ scale }] }]}>
      <Pressable
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={() => onPress?.(product)}
        android_ripple={{ color: 'rgba(0,0,0,0.06)' }}
        style={styles.pressable}
      >
        <Animated.Image
          source={{ uri: product.imageUrl }}
          style={[styles.productImage, { opacity: imageOpacity }]}
          onLoad={() => Animated.timing(imageOpacity, { toValue: 1, duration: 180, useNativeDriver: true }).start()}
        />
        <View style={styles.productBody}>
        <Text style={styles.productTitle} numberOfLines={2}>
          {product.title}
        </Text>
          <View style={styles.productMetaRow}>
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={14} color={PRIMARY_YELLOW} />
              <Text style={styles.ratingText}>{product.rating.toFixed(1)}</Text>
            </View>
            <Text style={styles.sellerText} numberOfLines={1}>
              by {product.seller}
            </Text>
            {product.verified && (
              <View style={styles.verifiedBadge}>
                <Text style={styles.verifiedText}>Verified</Text>
              </View>
            )}
            {product.local && (
              <View style={styles.localBadge}>
                <Text style={styles.localText}>Local</Text>
              </View>
            )}
          </View>
          <View style={styles.productFooterRow}>
            <Text style={styles.productPrice}>
              {product.currency}
              {product.price.toFixed(2)}
            </Text>
            <Pressable style={styles.cartButton} android_ripple={{ color: 'rgba(0,0,0,0.06)' }}>
              <Ionicons name="cart-outline" size={18} color="#000" />
            </Pressable>
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: Radius.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    ...Platform.select({ ios: Shadows?.sm ?? {}, android: Shadows?.sm ?? {} }),
  },
  pressable: {
    flex: 1,
  },
  productImage: {
    width: '100%',
    height: 180,
  },
  productBody: {
    padding: Spacing.lg,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: TEXT_PRIMARY,
  },
  productMetaRow: {
    marginTop: Spacing.xs + 2,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: Spacing.xs,
    fontSize: FontSize.caption,
    color: '#444',
  },
  sellerText: {
    fontSize: FontSize.body,
    color: TEXT_SECONDARY,
    marginTop: 2,
  },
  verifiedBadge: {
    alignSelf: 'flex-start',
    marginTop: Spacing.xs,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: 999,
    backgroundColor: '#E6F4EA',
  },
  verifiedText: {
    fontSize: 11,
    fontWeight: '600',
    color: SECONDARY_GREEN,
  },
  localBadge: {
    alignSelf: 'flex-start',
    marginTop: Spacing.xs,
    marginLeft: Spacing.xs,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: SECONDARY_GREEN,
    backgroundColor: 'rgba(46, 125, 50, 0.06)',
  },
  localText: {
    fontSize: 11,
    fontWeight: '700',
    color: SECONDARY_GREEN,
  },
  productFooterRow: {
    marginTop: Spacing.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000',
  },
  cartButton: {
    width: 32,
    height: 32,
    borderRadius: Radius.sm,
    backgroundColor: PRIMARY_YELLOW,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
