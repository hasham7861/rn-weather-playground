# Weather App — Learning Playground Spec

## Purpose

A small React Native / Expo app built to learn the framework hands-on before
starting as a React Native developer. Optimized for learning, not production
polish — prefer explicit/manual approaches first, then refactor to more
idiomatic patterns once the manual version is understood.

## Tech Stack

| Piece | Choice | Why |
|---|---|---|
| Framework | Expo (managed workflow) + TypeScript | Fast start, no native config needed for now |
| Routing | Expo Router (file-based, `app/` directory) | Built on React Navigation; file conventions are familiar from Next.js |
| Data source | [Open-Meteo](https://open-meteo.com/) — geocoding + forecast APIs | Free, no API key/signup, keeps focus on RN instead of secrets management |
| Fetching | Plain `fetch` + `useState`/`useEffect` (v1) | Learn what a query library actually solves before reaching for one |
| Styling | `StyleSheet.create` | No abstraction between us and RN's native styling model |
| Persistence | `@react-native-async-storage/async-storage` | Remember the last searched city between app launches |

### Planned follow-up refactors (stretch goals, not v1)

- Swap `fetch`/`useState` data fetching for **TanStack Query** once the manual
  loading/error/caching pain is felt firsthand.
- Swap `StyleSheet` for **NativeWind** once core styling concepts are solid.
- Swap Open-Meteo for **OpenWeatherMap** as a deliberate exercise in handling
  API keys/secrets in an Expo app (`.env` + `expo-constants`).

## App Shape

Two screens:

1. **Search screen** — `app/index.tsx`
   Text input + button to search a city name, hits Open-Meteo's geocoding
   endpoint, renders matching cities in a list. Tapping a city navigates to
   the detail screen with that city's id/coordinates.

2. **City detail screen** — `app/city/[id].tsx`
   Dynamic route. Reads the city id (or lat/lon) from the route params via
   `useLocalSearchParams()`, fetches current conditions + forecast from
   Open-Meteo, and renders them in a list.

Navigation is a single `Stack` (`app/_layout.tsx`) — no tabs, no drawers.

## Concepts This Project Is Meant to Exercise

- Expo Router: root layout as navigator, file-based routes, dynamic segments,
  `Link`/`router.push` for navigation
- Controlled inputs (`TextInput` + state)
- Lists (`FlatList`)
- Async data fetching with explicit loading/error states
- Passing data between screens via route params
- Local persistence (`AsyncStorage`)

## Status

- [x] Expo project scaffolded (blank TS template)
- [x] Expo Router wired up manually (`expo-router/entry`, root `_layout.tsx`)
- [x] Placeholder search screen renders and boots in iOS Simulator
- [ ] `app/city/[id].tsx` dynamic route + `Link` from search screen
- [ ] Open-Meteo geocoding search wired into search screen
- [ ] Open-Meteo forecast fetch wired into city detail screen
- [ ] AsyncStorage persistence of last-searched city
