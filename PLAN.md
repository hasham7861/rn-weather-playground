# Weather App — Roadmap

## What You're Building

A two-screen weather app: search for a city, tap it, see the forecast. Simple enough to finish, complex enough to hit real RN patterns.

## Phase 1 — Navigation & Routing

**Goal:** Two screens connected with working navigation.

- Create the city detail screen with a dynamic route
- Navigate from search → city detail (pass data via route params)
- Read params on the detail screen and display them

**You'll figure out:** `useLocalSearchParams`, `Link` or `router.push`, dynamic route segments (`[id]`)

---

## Phase 2 — Data Fetching (Search)

**Goal:** Type a city name, get real results from an API.

- Add a text input + search trigger on the search screen
- Fetch matching cities from Open-Meteo's geocoding API
- Render results in a scrollable list
- Handle loading and error states yourself (no libraries)

**API:** `https://geocoding-api.open-meteo.com/v1/search?name={query}`

**You'll figure out:** `TextInput`, `FlatList`, `fetch` + `useState` + `useEffect`, loading/error patterns

---

## Phase 3 — Data Fetching (Forecast)

**Goal:** Show real weather data on the city detail screen.

- Pass lat/lon from the search result to the detail screen
- Fetch current conditions + daily forecast from Open-Meteo
- Display temperature, weather condition, and a multi-day forecast list

**API:** `https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min`

**You'll figure out:** Passing complex data between screens, rendering nested API responses, date formatting

---

## Phase 4 — Persistence

**Goal:** Remember the last city so the app isn't blank on relaunch.

- Save the last-viewed city to local storage
- On app launch, check for a saved city and auto-navigate or pre-fill

**You'll figure out:** `AsyncStorage`, app lifecycle, conditional navigation

---

## Stretch Goals (after the above is solid)

- Swap manual fetching for **TanStack Query** (feel the difference)
- Swap `StyleSheet` for **NativeWind** (Tailwind in RN)
- Add pull-to-refresh on the forecast screen
- Add a favorites list (multiple saved cities)

---

## Rules of Engagement

- **Try first, ask second.** Write the code yourself; ask me when stuck.
- **I won't give you copy-paste solutions** unless you explicitly ask.
- **Hints on request.** If you want a nudge without the answer, just say "hint."
- **Review on request.** Paste your code and I'll tell you what's off.
