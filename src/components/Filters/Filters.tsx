import {
  useCallback, useContext, useEffect, useState,
} from 'react';
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
import ThemeContext from '../../utils/Context';
import { IGenres } from '../../redux/interfaces';

export default function Filters({ isOpen, handleIsOpen, type }: IBackDropProps) {
  const { theme } = useContext(ThemeContext);
  const [filterState, setFilterState] = useState({
    params: {},
    query: '',
    years: { start: '', end: '' },
    rating: { start: '', end: '' },
  });
  console.log(filterState);
  console.log(isOpen);
  
  const [sortIsChecked, setSortIsChecked] = useState('Year');
  const [genresInFilter, setGenresInFilter] = useState<IGenres>(genres);
  const dispatch = useAppDispatch();

  const createYearQuery = useCallback(() => {
    const yearsQuery = [];
    for (let i = Number(filterState.years.start); i <= Number(filterState.years.end); i += 1) {
      yearsQuery.push(i);
    }
    return yearsQuery.join('|');
  }, [filterState.years.end, filterState.years.start]);

  useEffect(() => {
    const yearsQueryToString = createYearQuery();
    if (yearsQueryToString === '0') {
      return;
    }
    setFilterState({ ...filterState, params: { ...filterState.params, year: yearsQueryToString } });
  }, [createYearQuery, filterState.years]);

  const setCheckedInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSortIsChecked(e.target.value);
    if (e.target.value === 'Rating') {
      setFilterState({ ...filterState, params: { ...filterState.params, sortingBy: 'vote_average.desc', minVotes: 1000 } });
    } else if (e.target.value === 'Year') {
      setFilterState({ ...filterState, params: { ...filterState.params, sortingBy: 'primary_release_date.desc' } });
    }
  };
  const handleClose = () => {
    handleIsOpen(false);
  };

  const setTitleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterState({ ...filterState, query: e.target.value });
  };

  const closeGenre = (genre: [number, string]) => {
    const genresUpdated = genresInFilter.filter(
      (genreInFilter) => genreInFilter[0] !== genre[0],
    );
    setGenresInFilter(genresUpdated);
    const genresIds = genresUpdated.map((genreInFilter) => genreInFilter[0]);
    const genresIdsToString = genresIds.join(' | ');
    setFilterState({
      ...filterState,
      params: { ...filterState.params, genres: genresIdsToString },
    });
  };

  const setYearQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'yearStart') {
      setFilterState({ ...filterState, years: { ...filterState.years, start: e.target.value } });
    } else if (e.target.name === 'yearEnd') {
      setFilterState({ ...filterState, years: { ...filterState.years, end: e.target.value } });
    }
  };
  const setRatingValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'ratingStart') {
      setFilterState({ ...filterState, rating: { ...filterState.rating, start: e.target.value } });
    } else if (e.target.name === 'ratingEnd') {
      setFilterState({ ...filterState, rating: { ...filterState.rating, end: e.target.value } });
    }
  };

  const setCountryQuery = (country: string) => {
    setFilterState({
      ...filterState, params: { ...filterState.params, country },
    });
  };

  const clearFilters = () => {
    setFilterState({
      params: {},
      query: '',
      years: { start: '', end: '' },
      rating: { start: '', end: '' },
    });
    setSortIsChecked('Year');
    setGenresInFilter(genres);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchMoviesByParams(filterState.params)).then(() => {
      if (filterState.query) {
        dispatch(fetchMoviesByQuery(filterState.query));
      }
    }).then(() => {
      if (filterState.rating.start !== '' && filterState.rating.end !== '') {
        dispatch(filterMoviesByRating(filterState.rating));
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
            <Input theme={theme === 'dark'} type="text" id="title" placeholder="Your text" onChange={setTitleQuery} value={filterState.query} />
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
              <InputFromTo theme={theme === 'dark'} type="number" id={TEXTNODES.YEARS} placeholder="From" name="yearStart" onChange={setYearQuery} value={filterState.years.start} />
              <InputFromTo theme={theme === 'dark'} type="number" id="years_" placeholder="To" name="yearEnd" onChange={setYearQuery} value={filterState.years.end} />
            </FromToWrap>
          </InputWrap>
          <InputWrap>
            <Label theme={theme === 'dark'} htmlFor="rating2">{TEXTNODES.RATING}</Label>
            <FromToWrap>
              <InputFromTo theme={theme === 'dark'} type="number" id="rating2" placeholder="From" onChange={setRatingValue} name="ratingStart" value={filterState.rating.start} />
              <InputFromTo theme={theme === 'dark'} type="number" id="rating2_" placeholder="To" onChange={setRatingValue} name="ratingEnd" value={filterState.rating.end} />
            </FromToWrap>
          </InputWrap>
          <InputWrap>
            <Label theme={theme === 'dark'} htmlFor={TEXTNODES.COUNTRY}>{TEXTNODES.COUNTRY}</Label>
            <Select onChange={setCountryQuery} />
          </InputWrap>
          <FromToWrap type={type}>
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
