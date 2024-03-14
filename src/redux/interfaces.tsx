import { THEME } from "../utils/Context";

export interface IAuthState {
  isLoggedIn?: boolean;
  user: {
    id: number, username: string, email: string, course_group?: number } | null;
  tokens: { access: string, refresh: string } | null;
  isRefreshing: boolean;
  error: string | null;
}
export interface IMoviesState {
  items: IMovie[];
  favorites: IMovie[];
  isLoading: boolean;
  error: string | null;
  currentMovie: IMovie | null;
}

export interface IState {
  movies: IMoviesState;
  auth: IAuthState;
}

export interface IRegisterPayload {
  id: number,
  username: string,
  email: string,
  course_group: number,
}

export interface RegistrationPayload {
  username: string,
  email: string,
  password: string,
  course_group: number,
}

export interface ISignInPayload {
  access: string,
  refresh: string,
}

export interface SignInPayload {
  id?: number,
  email: string,
  password: string,
}

export interface IMovie {
  id: number,
  poster_path: string,
  title: string,
  genre_ids: number[],
  vote_average: number,
  overview?: string,
  actors?: string[],
  recommendations?: IMovie[],
  isFavorite?: boolean,
  genres?: [][],
  runtime?: number,
  release_date?: string,
  budget?: number,
  production_countries?: { name: string }[],
  production_companies?: { name: string }[],
}

export interface IActor {
  adult: boolean,
  gender: number,
  id: number,
  known_for_department: string,
  name: string,
  original_name: string,
  popularity: number,
  profile_path: string,
  cast_id: number,
  character: string,
  credit_id: string,
  order: number,
}

export interface IParams {
  sortingBy?: string,
  minVotes?: number,
  page?: number,
  query?: string,
  title?: string,
  genres?: string,
  year?: string,
  country?: string,
}

export interface IThemeContext {
  theme: THEME;
  setTheme: (theme: THEME) => void;
}
