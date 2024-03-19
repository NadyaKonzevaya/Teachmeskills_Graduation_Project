import { THEME } from '../utils/Context';

export interface IAuthState {
  isLoggedIn?: boolean;
  user: {
    id: number, username: string, email: string, course_group?: number } | null;
  tokens: { access: string, refresh: string } | null;
  isRefreshing: boolean;
  error: string | null;
  emailForReset: string;
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

export interface IProduction {
  id: number, logo_path: string | null, name: string, origin_country: string,
}
export interface IMovie {
  id: number,
  poster_path: string,
  title: string,
  genre_ids?: [number, string][],
  vote_average: number,
  overview?: string,
  actors?: string[],
  recommendations?: IMovie[],
  isFavorite?: boolean,
  genres?: { id: number, name: string }[],
  runtime?: number,
  release_date?: string,
  budget?: number,
  production_countries?: IProduction[],
  production_companies?: IProduction[],
  genreNames?: [number, string][],
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

export type IGenres = [number, string][];

export interface IResetPasswordParams {
  'uid': string,
  'token': string,
  'new_password': string
}
