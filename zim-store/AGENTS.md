# Repository Guidelines

## Project Structure & Module Organization
- `app/`: File‑based routes using Expo Router (e.g., `app/_layout.tsx`, `app/(tabs)/index.tsx`).
- `components/`: Reusable UI components in PascalCase (e.g., `ProductCard.tsx`).
- `hooks/`: Shared React hooks in camelCase (e.g., `useCart.ts`).
- `constants/`: App‑wide constants and theme tokens.
- `assets/`: Images, fonts (linked in `app.json`).
- `scripts/`: Maintenance scripts (e.g., `reset-project.js`).
- Root config: `app.json`, `tsconfig.json`, `eslint.config.js`.

## Build, Test, and Development Commands
- `npm install`: Install dependencies.
- `npm run start` (or `npx expo start`): Start the Expo dev server with QR/simulator options.
- `npm run ios` | `npm run android` | `npm run web`: Launch the app on a target platform.
- `npm run lint`: Lint the codebase using `eslint-config-expo`.
- `npm run reset-project`: Reset starter code to a clean `app/` scaffold.

## Coding Style & Naming Conventions
- Language: TypeScript + React Native. Indentation: 2 spaces. Prefer functional components and hooks.
- Files: Components in PascalCase (`ProductList.tsx`); hooks/utilities in camelCase (`useDebounce.ts`, `formatPrice.ts`).
- Routes: Lowercase, directory‑based segments per Expo Router (e.g., `app/(shop)/product/[id].tsx`).
- Constants: UPPER_SNAKE_CASE; avoid magic numbers/strings.
- Linting: Fix issues or run `npm run lint -- --fix` before committing.

## Testing Guidelines
- No test runner is configured yet. If adding tests, use Jest + `@testing-library/react-native`.
- Place tests alongside modules as `*.test.ts(x)` or under `__tests__/`.
- Favor deterministic tests and avoid flakiness with timers/animations.

## Commit & Pull Request Guidelines
- Commits: Follow Conventional Commits (e.g., `feat: add cart badge`, `fix: correct image scaling`).
- PRs: Include a concise description, linked issues, and screenshots/GIFs for UI changes.
- Quality gate: Ensure `npm run lint` passes and the app boots on at least one platform (iOS/Android/Web).

## Security & Configuration Tips
- Do not hardcode secrets. Prefer `app.config.(js|ts)` `extra` fields and access via `expo-constants`.
- Keep large media in `assets/` and import via `require()` to enable bundling.
- Validate third‑party deps; avoid unnecessary native modules that bloat size.
