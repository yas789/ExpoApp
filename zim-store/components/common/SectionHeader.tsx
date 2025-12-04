import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Spacing, FontSize } from '@/constants/ui';
import { TEXT_PRIMARY, TEXT_SECONDARY } from '@/constants/colors';

type Props = {
  title: string;
  onPressAction?: () => void;
  actionLabel?: string;
  titleStyle?: any;
  containerStyle?: any;
};

export function SectionHeader({ title, onPressAction, actionLabel = 'See all', titleStyle, containerStyle }: Props) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {onPressAction ? (
        <Pressable android_ripple={{ color: 'rgba(0,0,0,0.06)' }} hitSlop={8} onPress={onPressAction}>
          <Text style={styles.action}>{actionLabel}</Text>
        </Pressable>
      ) : (
        <Text style={styles.action}>{actionLabel}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: FontSize.h2,
    fontWeight: '800',
    marginBottom: Spacing.sm,
    color: TEXT_PRIMARY,
  },
  action: {
    fontSize: 12,
    fontWeight: '700',
    color: TEXT_SECONDARY,
  },
});
