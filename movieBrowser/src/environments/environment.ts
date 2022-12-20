// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  keyApi: "?api_key=b177f17184ae41c95021d0c7544927cf",
  imageServerMovieDbUrl: "https://image.tmdb.org/t/p/w1280/",
  tredingMovieUrl: "https://api.themoviedb.org/3/trending/movie/day",
  nowPlayingMovieUrl : "https://api.themoviedb.org/3/movie/now_playing?api_key=b177f17184ae41c95021d0c7544927cf&language=en-US&page=1&region=fr",
  movieUrl : "https://api.themoviedb.org/3/movie/",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
