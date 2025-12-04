import { Platform } from 'react-native';

export const Radius = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
} as const;

export const Shadows = Platform.select({
  ios: {
    sm: {
      shadowColor: '#000',
      shadowOpacity: 0.06,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 3 },
    },
    md: {
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 6 },
    },
  },
  android: {
    sm: { elevation: 2 },
    md: { elevation: 4 },
  },
  default: {
    sm: {},
    md: {},
  },
});

