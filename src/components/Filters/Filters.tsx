import { useContext, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import IBackDropProps from '../Backdrop/Backdrop.types';
import {
  Container, Form, Title, Label, LabelTitle, Wrap, RadioInput, RadioLabelLeft,
  RadioLabelRight, InputWrap, Input, GenresWrap, Genre, CrossButton, InputFromTo, FromToWrap,
  FormButton, TitleWrap, StyledLink,
} from './Filters.styled';
import { useAppDispatch } from '../../redux/hooks';
import { fetchMoviesByParams, fetchMoviesByQuery } from '../../redux/movies/operations';
import { genres } from '../../utils/constants';
import TEXTNODES from '../../constants/textConstants';
import { Select } from '../Select';
import { filterMoviesByRating } from '../../redux/movies/MoviesSlice';
import { IParams } from '../../redux/interfaces';
import ThemeContext from '../../utils/Context';

export default function Filters({ isOpen, handleIsOpen }: IBackDropProps) {
  const { theme } = useContext(ThemeContext);
  const [sortIsChecked, setSortIsChecked] = useState('Year');
  const [params, setParams] = useState<IParams>({});
  const [query, setQuery] = useState<string>('');
  const genresValue = Object.values(genres);
  const [genresInFilter, setGenresInFilter] = useState<string[]>(genresValue);
  const [years, setYears] = useState({ start: '', end: '' });
  const [rating, setRating] = useState({ start: '', end: '' });
  const [country, setCountry] = useState('Select country');
  const dispatch = useAppDispatch();

  useEffect(() => {
    const yearsQuery = [];
    for (let i = Number(years.start); i <= Number(years.end); i += 1) {
      yearsQuery.push(i);
    }
    const yearsQueryToString = yearsQuery.join('|');
    if (yearsQueryToString === '0') {
      return;
    }
    setParams({ ...params, year: yearsQueryToString });
  }, [years.start, years.end, params]);

  const setCheckedInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSortIsChecked(e.target.value);
    if (e.target.value === 'Rating') {
      setParams({
        ...params, sortingBy: 'vote_average.desc', minVotes: 1000,
      });
    } else if (e.target.value === 'Year') {
      setParams({
        ...params, sortingBy: 'primary_release_date.desc',
      });
    }
  };
  const handleClose = () => {
    handleIsOpen(false);
  };

  const setTitleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const closeGenre = (genre) => {
    const genresUpdated = genresInFilter.filter((genreInFilter) => genreInFilter !== genre);
    setGenresInFilter(genresUpdated);
    const genresCodes = genresInFilter.map((genreInFilter) => Object.keys(genres).find((key) => genres[key] === genreInFilter));
    const genresCodesToString = genresCodes.join(' | ');
    setParams({ ...params, genres: genresCodesToString });
  };

  const setYearQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'yearStart') {
      setYears({ ...years, start: e.target.value });
    } else if (e.target.name === 'yearEnd') {
      setYears({ ...years, end: e.target.value });
    }
  };
  const setRatingValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'ratingStart') {
      setRating({ ...rating, start: e.target.value });
    } else if (e.target.name === 'ratingEnd') {
      setRating({ ...rating, end: e.target.value });
    }
  };

  const setCountryQuery = () => {
    setParams({ ...params, country });
  };

  const clearFilters = () => {
    setParams({});
    setYears({ start: '', end: '' });
    setSortIsChecked('Year');
    setQuery('');
    setGenresInFilter(genresValue);
    setYears({ start: '', end: '' });
    setCountry('Select country');
    setRating({ start: '', end: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchMoviesByParams(params)).then(() => {
      if (query) {
        dispatch(fetchMoviesByQuery(query));
      }
    }).then(() => {
      if (rating) {
        dispatch(filterMoviesByRating(rating));
      }
    });
    handleIsOpen(false);
  };

  return (
    isOpen && (
      <Container theme={theme === 'dark'}>
        <Form>
          <TitleWrap>
            <Title theme={theme === 'dark'}>{TEXTNODES.FILTERS}</Title>
            <CrossButton theme={theme === 'dark'} type="button" onClick={handleClose}><IoMdClose /></CrossButton>
          </TitleWrap>
          <Wrap>
            <LabelTitle theme={theme === 'dark'}>{TEXTNODES.SORT_BY}</LabelTitle>
            <RadioLabelLeft theme={theme === 'dark'} htmlFor={TEXTNODES.RATING} checked={sortIsChecked === 'Rating'}>{TEXTNODES.RATING}</RadioLabelLeft>
            <RadioInput theme={theme === 'dark'} type="radio" name="sorting" value={TEXTNODES.RATING} id={TEXTNODES.RATING} onChange={setCheckedInput} />
            <RadioLabelRight theme={theme === 'dark'} htmlFor={TEXTNODES.YEAR} checked={sortIsChecked === 'Year'}>{TEXTNODES.YEAR}</RadioLabelRight>
            <RadioInput theme={theme === 'dark'} type="radio" name="sorting" value={TEXTNODES.YEAR} id={TEXTNODES.YEAR} onChange={setCheckedInput} />
          </Wrap>
          <InputWrap>
            <Label theme={theme === 'dark'} htmlFor="title">{TEXTNODES.FULL_OR_SHOT_MOVIE_NAME}</Label>
            <Input theme={theme === 'dark'} type="text" id="title" placeholder="Your text" onChange={setTitleQuery} value={query} />
          </InputWrap>
          <Label theme={theme === 'dark'} htmlFor={TEXTNODES.GENRES}>{TEXTNODES.GENRES}</Label>
          <GenresWrap theme={theme === 'dark'}>
            { genresInFilter.map((genre) => (
              <Genre theme={theme === 'dark'} key={genre[0]}>
                {genre[1]}
                <CrossButton theme={theme === 'dark'} type="button" onClick={() => closeGenre(genre)}><IoMdClose /></CrossButton>
              </Genre>
            ))}
          </GenresWrap>
          <InputWrap>
            <Label theme={theme === 'dark'} htmlFor={TEXTNODES.YEARS}>{TEXTNODES.YEARS}</Label>
            <FromToWrap>
              <InputFromTo theme={theme === 'dark'} type="number" id={TEXTNODES.YEARS} placeholder="From" name="yearStart" onChange={setYearQuery} value={years.start} />
              <InputFromTo theme={theme === 'dark'} type="number" id="years_" placeholder="To" name="yearEnd" onChange={setYearQuery} value={years.end} />
            </FromToWrap>
          </InputWrap>
          <InputWrap>
            <Label theme={theme === 'dark'} htmlFor="rating2">{TEXTNODES.RATING}</Label>
            <FromToWrap>
              <InputFromTo theme={theme === 'dark'} type="number" id="rating2" placeholder="From" onChange={setRatingValue} name="ratingStart" value={rating.start} />
              <InputFromTo theme={theme === 'dark'} type="number" id="rating2_" placeholder="To" onChange={setRatingValue} name="ratingEnd" value={rating.end} />
            </FromToWrap>
          </InputWrap>
          <InputWrap>
            <Label theme={theme === 'dark'} htmlFor={TEXTNODES.COUNTRY}>{TEXTNODES.COUNTRY}</Label>
            <Select onChange={setCountryQuery} value={country} setValue={setCountry} />
          </InputWrap>
          <FromToWrap>
            <FormButton theme={theme === 'dark'} type="button" onClick={clearFilters}>{TEXTNODES.CLEAR_FILTERS}</FormButton>
            <FormButton theme={theme === 'dark'} type="submit" onClick={handleSubmit}>
              <StyledLink to="sorting">{TEXTNODES.SHOW_RESULTS}</StyledLink>
            </FormButton>
          </FromToWrap>
        </Form>
      </Container>
    )
  );
}
