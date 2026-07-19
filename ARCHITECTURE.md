# Architecture

## Project Structure

```
app/                  ← Expo Router file-based routing
  _layout.tsx         ← Root navigator (Stack)
  index.tsx           ← Search screen (home)
  city/
    [id].tsx          ← City detail screen (dynamic route)

```

## Stack

| Layer | Tech |
|-------|------|
| Framework | React Native via Expo (managed) |
| Language | TypeScript |
| Routing | Expo Router (file-based, built on React Navigation) |
| Styling | StyleSheet.create (no abstraction) |
| Data | Open-Meteo API (free, no key needed) |
| Persistence | AsyncStorage |

## Data Flow

```
Search Screen                          City Detail Screen
─────────────                          ──────────────────
TextInput → fetch geocoding API        Read lat/lon from route params
         → render city list            → fetch forecast API
         → tap city                    → render weather data
         → navigate with lat/lon
```

## Key Patterns

- **No state library** — local `useState` per screen
- **No fetch library** — raw `fetch` + `useEffect` (until Phase 5 stretch)
- **Params over global state** — data passed between screens via route params
- **Explicit loading/error states** — no magic, handle it yourself

## APIs

| Endpoint | Purpose |
|----------|---------|
| `geocoding-api.open-meteo.com/v1/search?name=X` | City search by name |
| `api.open-meteo.com/v1/forecast?latitude=X&longitude=Y&...` | Weather forecast |
