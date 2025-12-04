import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.footerColumn}>
        <Text style={styles.footerBrand}>Amazin</Text>
        <Text style={styles.footerSub}>by zims for zims</Text>
      </View>

      <View style={styles.footerRowColumns}>
        <View style={styles.footerColumn}>
          <Text style={styles.footerHeading}>Shop</Text>
          <Text style={styles.footerLink}>Confectionery</Text>
          <Text style={styles.footerLink}>Butchery</Text>
          <Text style={styles.footerLink}>Catering & Events</Text>
          <Text style={styles.footerLink}>Household Goods</Text>
        </View>

        <View style={styles.footerColumn}>
          <Text style={styles.footerHeading}>Customer Service</Text>
          <Text style={styles.footerLink}>Contact Us</Text>
          <Text style={styles.footerLink}>FAQ</Text>
          <Text style={styles.footerLink}>Shipping & Delivery</Text>
        </View>

        <View style={styles.footerColumn}>
          <Text style={styles.footerHeading}>Seller Resources</Text>
          <Text style={styles.footerLink}>Start Selling</Text>
          <Text style={styles.footerLink}>Seller Guide</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  footerRowColumns: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 32,
    rowGap: 16,
    marginTop: 16,
  },
  footerColumn: {
    minWidth: 120,
  },
  footerBrand: {
    fontSize: 18,
    fontWeight: '800',
  },
  footerSub: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#777',
    marginTop: 4,
  },
  footerHeading: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 6,
  },
  footerLink: {
    fontSize: 12,
    color: '#555',
    marginBottom: 3,
  },
});

