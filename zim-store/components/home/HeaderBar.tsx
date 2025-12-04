import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PRIMARY_YELLOW } from '@/constants/colors';
import { Radius, Spacing } from '@/constants/ui';

export function HeaderBar() {
  return (
    <View style={styles.header}>
      <View style={styles.headerInner}>
        <Text style={styles.logo}>Amazin</Text>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="#888" style={styles.searchIcon} />
          <TextInput
            placeholder="Search for products..."
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
        </View>

        <View style={styles.iconsRow}>
          <TouchableOpacity style={styles.iconButton} accessibilityRole="button" accessibilityLabel="Account">
            <Ionicons name="person-outline" size={22} color="#333" />
          </TouchableOpacity>
          <View style={styles.cartWrapper}>
            <TouchableOpacity style={styles.iconButton} accessibilityRole="button" accessibilityLabel="Cart">
              <Ionicons name="cart-outline" size={22} color="#333" />
            </TouchableOpacity>
            <View style={styles.cartDot} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.sm,
  },
  headerInner: {
    maxWidth: 1024,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.xl,
    width: '100%',
  },
  logo: {
    fontSize: 20,
    fontWeight: '800',
  },
  iconsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Spacing.sm,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius: Radius.lg,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginHorizontal: Spacing.lg,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 1 },
      },
      android: {
        elevation: 1,
      },
    }),
  },
  searchIcon: {
    marginRight: Spacing.sm,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
  },
  iconButton: {
    paddingHorizontal: Spacing.sm,
  },
  cartWrapper: {
    position: 'relative',
  },
  cartDot: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: PRIMARY_YELLOW,
  },
});
