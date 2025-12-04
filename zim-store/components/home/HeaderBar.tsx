import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PRIMARY_YELLOW } from '@/constants/colors';

export function HeaderBar() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Amazin</Text>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={16} color="#888" style={styles.searchIcon} />
        <TextInput
          placeholder="Search for products..."
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>
      <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.iconButton} accessibilityRole="button" accessibilityLabel="Account">
          <Ionicons name="person-outline" size={20} color="#333" />
        </TouchableOpacity>
        <View style={styles.cartWrapper}>
          <TouchableOpacity style={styles.iconButton} accessibilityRole="button" accessibilityLabel="Cart">
            <Ionicons name="cart-outline" size={20} color="#333" />
          </TouchableOpacity>
          <View style={styles.cartDot} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    fontSize: 20,
    fontWeight: '800',
    marginRight: 8,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0',
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
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    fontSize: 12,
    paddingVertical: 0,
  },
  headerIcons: {
    flexDirection: 'row',
    marginLeft: 8,
  },
  iconButton: {
    paddingHorizontal: 6,
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
