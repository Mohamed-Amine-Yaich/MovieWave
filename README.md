# Welcome to your Movie Wave app 👋

This project is a React Native Expo app that allows users to search for movies and view movie details. It uses a Context API for managing the global state, including authentication, movie details, and movie search. The app is structured using a clear and simple file-based navigation with Expo Router.

1. Clone the repository

https://github.com/Mohamed-Amine-Yaich/MovieWave.git
and
cd MovieWave

2. Install dependencies

   ```bash
   yarn install
   or 
   npm install
   ```

3. Start the app

   ```bash
   npx expo start
   or 
   yarn start
   ```


## Features

1. Authentication Context
   Manages user authentication state.

2. Movie Search Context
   Manages movie search results and pagination state.

3. Movie Details Context
   Manages state for displaying movie details.

3. Reusable Components
 .MovieCard: Displays movie information.
 .SearchBar: Input for searching movies.
 .ErrorToast: Displays error messages.

5. Custom Hooks
 .useAuth: Manages authentication logic.
 .useMovieDetails: Fetches and manages movie details state.
 .useMovieSearch: Handles movie search logic including pagination and debouncing input.

7. API Handling
   Handles API calls and manages generic errors.

8. Pagination
Implements pagination in the movie search context to fetch more movies as the user scrolls.

9. favorite movie 
implements favorite system related to nest js backend API 

