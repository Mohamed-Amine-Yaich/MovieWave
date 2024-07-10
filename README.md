# Welcome to  Movie Wave app 👋

This project is a React Native Expo app that allows users to search for movies and view movie details. It uses a Context API for managing the global state, including authentication, movie details, and movie search. The app is structured using a clear and simple file-based navigation with Expo Router.

1. Clone the repository
   ```bash
   
   https://github.com/Mohamed-Amine-Yaich/MovieWave.git
   
   ```
   and
   
   ```bash
   
   cd MovieWave
   
   ```
   

2. Install dependencies

   ```bash
   
   yarn install
   
    ```
   or
   
   ```bash
   
   npm install
   
   ```
3. Create a .env file based on .env.example file
 
4. Start the app

   ```bash
   
   npx expo start
   
    ```
   or
   
   ```bash
   
   yarn start
   
   ```
   
## Features

1. Authentication Context

   Manages user authentication state.

2. Movie Search Context

   Manages movie search results and pagination state.

3. Movie Details Context

   Manages state for displaying movie details.

4. Reusable Components

      MovieCard: Displays movie information.
   
      SearchBar: Input for searching movies.
     
      ErrorToast: Displays error messages.

5. Custom Hooks
 
      useAuth: Manages authentication logic.
     
      useMovieDetails: Fetches and manages movie details state.
     
      useMovieSearch: Handles movie search logic including pagination and debouncing input.

6. API Handling

   Handles API calls and manages generic errors.

7. Pagination

   Implements pagination in the movie search context to fetch more movies as the user scrolls.

8. favorite movie 

   implements favorite system related to nest js backend API 

