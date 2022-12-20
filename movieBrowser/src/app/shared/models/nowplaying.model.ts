export interface DatesNowPlaying {
  maximum: string;
  minimum: string;
}

export interface MovieNowPlaying {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface NowPlaying {
  dates: DatesNowPlaying;
  page: number;
  results: MovieNowPlaying[];
  total_pages: number;
  total_results: number;
}
