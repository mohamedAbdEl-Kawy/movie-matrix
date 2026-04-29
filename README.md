
# 🎬 Movie Matrix

A movie browsing and favorites app built with  **React** ,  **Redux Toolkit** , and **Material UI** — developed as a required task for the **Redux & MUI module** during the React course at  **ITI (Information Technology Institute)** .

---

## 📸 Pages

| Page                | Description                                       |
| ------------------- | ------------------------------------------------- |
| 🏠 Home             | Browse popular movies fetched from TMDB API       |
| 🎥 Movie Details    | Full info: poster, rating, release date, overview |
| ❤️ Favorites      | Your saved movies, persisted across sessions      |
| 👤 Profile          | User info + favorites linked in one place         |
| 🔐 Login / Register | Auth flow with localStorage validation            |

---

## 🛠️ Tech Stack

| Layer              | Technology                                            |
| ------------------ | ----------------------------------------------------- |
| UI Framework       | [React 18](https://react.dev/)+[Vite](https://vitejs.dev/)  |
| State Management   | [Redux Toolkit](https://redux-toolkit.js.org/)           |
| Component Library  | [Material UI v5](https://mui.com/)                       |
| Routing            | [React Router v6](https://reactrouter.com/)              |
| HTTP Client        | [Axios](https://axios-http.com/)                         |
| Movie Data         | [TMDB API](https://www.themoviedb.org/documentation/api) |
| Auth & Persistence | localStorage                                          |

---

## ✨ Features

* 🔍 Discover popular movies via TMDB API
* 📄 View detailed info for any movie
* ❤️ Add / remove movies from favorites
* 💾 Favorites persist in localStorage — survive page refresh
* 🔐 Register with name, email & password (stored in localStorage)
* ✅ Login validation — wrong credentials show an error message
* 👤 Profile page shows user info and their favorites
* 🔄 Auth state rehydrates on refresh — no unexpected logouts
* 📱 Responsive layout with MUI Grid

---

## 🗂️ Project Structure

```
src/
├── app/
│   └── store.js                 # Redux store
├── components/
│   ├── NavBar.jsx               # Sticky nav with favorites badge
│   └── MovieCard.jsx            # Movie card with Details & ❤️
├── features/
│   ├── auth/
│   │   └── auth.js              # Auth slice (login / logout)
│   ├── favorites/
│   │   └── favSlice.js          # Favorites slice with localStorage sync
│   └── movies/
│       ├── movieSlice.js        # Movies slice
│       └── movieThunks.js       # Async thunks for TMDB API
└── pages/
    ├── Home.jsx                 # Movie grid
    ├── MovieDetails.jsx         # Single movie view
    ├── Favorites.jsx            # Favorites list
    ├── Profile.jsx              # User profile + favorites
    ├── Login.jsx                # Login with validation
    └── Register.jsx             # Register with empty favorites
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js ≥ 18
* npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/movie-matrix.git
cd movie-matrix

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173/) in your browser.

### Build for Production

```bash
npm run build
```

---

## 🔑 API Key

This project uses the [TMDB API](https://www.themoviedb.org/documentation/api).

The key is currently hardcoded in `movieThunks.js` for demo purposes.

For production, move it to a `.env` file:

```env
VITE_TMDB_API_KEY=your_api_key_here
```

Then use it as:

```js
params: { api_key: import.meta.env.VITE_TMDB_API_KEY }
```

---

## 📦 Redux State Shape

```js
{
  movies: {
    list: [],        // array of movies from TMDB
    selected: null,  // currently viewed movie
    loading: false,
    error: null
  },
  favorites: {
    items: []        // persisted to localStorage
  },
  auth: {
    user: null       // { name, email, favorites } — rehydrated from localStorage
  }
}
```

---

## 🎓 Course Context

> This project was a **required task** for the **Redux & Material UI** module
>
> as part of the **React Track** at  **ITI — Information Technology Institute** .

### Key concepts practiced:

* `createSlice` and `createAsyncThunk` with Redux Toolkit
* Async data fetching with `extraReducers`
* Global state with `useSelector` / `useDispatch`
* MUI components: `AppBar`, `Grid`, `Card`, `Badge`, `Alert`, `Paper`, `Avatar`
* Responsive layouts with MUI's breakpoint system
* Client-side auth with localStorage persistence

---

## 📄 License

This project is for educational purposes. Movie data is provided by [TMDB](https://www.themoviedb.org/).
