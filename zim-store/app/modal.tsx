import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import { FontSize, Spacing } from '@/constants/ui';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={{ fontSize: FontSize.h1, fontWeight: '800', textAlign: 'center' }}>
        This is a modal
      </ThemedText>
      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">Go to home screen</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.lg,
  },
  link: {
    marginTop: Spacing.md,
    paddingVertical: Spacing.md,
  },
});
