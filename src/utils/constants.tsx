import {
  BookmarkElement, HomeElement, SettingsElement, TrendsElement, LogOutElement,
} from '../components/Navigation/Navigation.styled';
import TEXTNODES from '../constants/textConstants';

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
export const BASE_URL = 'https://api.themoviedb.org';
export const API_KEY = '35b67d916044ed61f84d01dde3676d84';

export const genres = [
  [28, 'Action'],
  [37, 'Western'],
  [10752, 'War'],
  [9648, 'Mystery'],
  [99, 'Documentary'],
  [18, 'Drama'],
  [36, 'History'],
  [35, 'Comedy'],
  [80, 'Crime'],
  [10749, 'Romance'],
  [10402, 'Music'],
  [16, 'Animation'],
  [12, 'Adventure'],
  [10751, 'Family'],
  [10770, 'TV Show'],
  [53, 'Thriller'],
  [27, 'Horror'],
  [878, 'Science Fiction'],
  [14, 'Fantasy'],
];

export const selectValue = [
  ['Select country', 'Select country'],
  ['AU', 'Australia'],
  ['CA', 'Canada'],
  ['CN', 'China'],
  ['FR', 'France'],
  ['DE', 'Germany'],
  ['IN', 'India'],
  ['IT', 'Italy'],
  ['IE', 'Ireland'],
  ['JP', 'Japan'],
  ['PL', 'Poland'],
  ['KR', 'South Korea'],
  ['ES', 'Spain'],
  ['TW', 'Taiwan'],
  ['GB', 'United Kingdom'],
  ['US', 'United States of America'],
];

export const NavItems = [
  [HomeElement, TEXTNODES.HOME, '/movies'],
  [TrendsElement, TEXTNODES.TRENDS, '/movies/trends'],
  [BookmarkElement, TEXTNODES.FAVORITES, '/movies/favorites'],
  [SettingsElement, TEXTNODES.SETTINGS, '/movies/settings'],
  // [LogOutElement, TEXTNODES.LOG_OUT, '/'],
];
