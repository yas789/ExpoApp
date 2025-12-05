import React from 'react';
import { Pressable, StyleSheet, Text, View, type GestureResponderEvent } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Spacing, Radius, Shadows, FontSize } from '@/constants/ui';
import { TEXT_PRIMARY, TEXT_SECONDARY } from '@/constants/colors';

export type ViewMode = 'list' | 'map';

type Props = {
  value: ViewMode;
  onChange: (mode: ViewMode) => void;
};

export function ViewModeToggle({ value, onChange }: Props) {
  const isList = value === 'list';
  const isMap = value === 'map';

  const handlePress = (mode: ViewMode) => (_e: GestureResponderEvent) => {
    if (mode !== value) onChange(mode);
  };

  return (
    <View style={styles.container}>
      <View style={styles.pill}>
        <Pressable
          onPress={handlePress('list')}
          accessibilityRole="button"
          accessibilityState={{ selected: isList }}
          accessibilityLabel="List view"
          style={({ pressed }) => [
            styles.option,
            isList && styles.optionActive,
            pressed && styles.optionPressed,
          ]}
        >
          <Ionicons
            name="list"
            size={16}
            color={isList ? TEXT_PRIMARY : TEXT_SECONDARY}
            style={styles.icon}
          />
          <Text style={[styles.label, isList ? styles.labelActive : styles.labelInactive]}>List</Text>
        </Pressable>

        <Pressable
          onPress={handlePress('map')}
          accessibilityRole="button"
          accessibilityState={{ selected: isMap }}
          accessibilityLabel="Map view"
          style={({ pressed }) => [
            styles.option,
            isMap && styles.optionActive,
            pressed && styles.optionPressed,
          ]}
        >
          <Ionicons
            name="map"
            size={16}
            color={isMap ? TEXT_PRIMARY : TEXT_SECONDARY}
            style={styles.icon}
          />
          <Text style={[styles.label, isMap ? styles.labelActive : styles.labelInactive]}>Map</Text>
        </Pressable>
      </View>
    </View>
  );
}

const LIGHT_GREY = '#EEEEEE';
const WHITE = '#FFFFFF';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: LIGHT_GREY,
    borderRadius: 999,
    paddingHorizontal: 6,
    paddingVertical: 6,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 999,
    paddingHorizontal: 16, // 14–16px
    paddingVertical: 8,
  },
  optionActive: {
    backgroundColor: WHITE,
    ...(Shadows?.md ?? {}),
  },
  optionPressed: {
    opacity: 0.9,
  },
  icon: {
    marginRight: 6,
  },
  label: {
    fontSize: FontSize.body,
    fontWeight: '600',
  },
  labelActive: {
    color: TEXT_PRIMARY,
  },
  labelInactive: {
    color: TEXT_SECONDARY,
  },
});

export default ViewModeToggle;

