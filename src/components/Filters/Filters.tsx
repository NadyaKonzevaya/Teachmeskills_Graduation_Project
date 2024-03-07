import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import IBackDropProps from '../Backdrop/Backdrop.types';
import {
  Container, Form, Title, Label, LabelTitle, Wrap, RadioInput, RadioLabelLeft,
  RadioLabelRight, InputWrap, Input, GenresWrap, Genre, CrossButton, InputFromTo, FromToWrap,
  Select, FormButton, TitleWrap, StyledLink,
} from './Filters.styled';
import { useAppDispatch } from '../../redux/hooks';
import { IParams, fetchMoviesByParams, fetchMoviesByQuery } from '../../redux/movies/operations';
import { genres } from '../../utils/constants';

export default function Filters({ isOpen, handleIsOpen }: IBackDropProps) {
  const [sortIsChecked, setSortIsChecked] = useState('year');
  const [params, setParams] = useState<IParams>({ sortingBy: 'primary_release_date.desc', page: 1, minVotes: 1000 });
  const [query, setQuery] = useState<string>('');
  const genresValue = Object.values(genres);
  const [genresInFilter, setGenresInFilter] = useState<string[]>(genresValue);
  const [years, setYears] = useState({ start: '', end: '' });
  const dispatch = useAppDispatch();
  console.log(years);
  console.log(params);
  // console.log(years);
  const setCheckedInput = (e) => {
    setSortIsChecked(e.target.value);
    if (e.target.value === 'rating') {
      setParams({
        ...params, sortingBy: 'vote_average.desc',
      });
    } else if (e.target.value === 'year') {
      setParams({
        ...params, sortingBy: 'primary_release_date.desc',
      });
    }
  };
  const handleClose = () => {
    handleIsOpen(false);
  };

  

  const setTitleQuery = (e) => {
    setQuery(e.target.value);
  };

  const closeGenre = (genre) => {
    const genresUpdated = genresInFilter.filter((genreInFilter) => genreInFilter !== genre);
    setGenresInFilter(genresUpdated);
    const genresCodes = genresInFilter.map((genreInFilter) => Object.keys(genres).find((key) => genres[key] === genreInFilter));
    const genresCodesToString = genresCodes.join(' | ');
    setParams({ ...params, genres: genresCodesToString });
  };

  const setYearQuery = (e) => {
    if (e.target.name === 'yearStart') {
      setYears({ ...years, start: e.target.value });
    } else if (e.target.name === 'yearEnd') {
      setYears({ ...years, end: e.target.value });
    }
    const start = Number(years.start);
    const end = Number(years.end);
    const yearsQuery = [];
    for (let i = start; i <= end; i += 1) {
      yearsQuery.push(i);
    }
    console.log(yearsQuery);
    const yearsQueryToString = yearsQuery.join('|');
    console.log(yearsQueryToString);
    setParams({ ...params, year: yearsQueryToString });
    // setParams({ ...params, year: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(params);
    dispatch(fetchMoviesByParams(params));
    if (query) {
      dispatch(fetchMoviesByQuery(query));
    }
    handleIsOpen(false);
  };

  return (
    isOpen && (
      <Container>
        <Form>
          <TitleWrap>
            <Title>Filters</Title>
            <CrossButton type="button" onClick={handleClose}><IoMdClose /></CrossButton>
          </TitleWrap>
          <Wrap>
            <LabelTitle>Sort by</LabelTitle>
            <RadioLabelLeft htmlFor="rating" checked={sortIsChecked === 'rating'}>Rating</RadioLabelLeft>
            <RadioInput type="radio" name="sorting" value="rating" id="rating" onChange={setCheckedInput} />
            <RadioLabelRight htmlFor="year" checked={sortIsChecked === 'year'}>Year</RadioLabelRight>
            <RadioInput type="radio" name="sorting" value="year" id="year" onChange={setCheckedInput} />
          </Wrap>
          <InputWrap>
            <Label htmlFor="title">Full or short movie name</Label>
            <Input type="text" id="title" placeholder="Your text" onChange={setTitleQuery} />
          </InputWrap>
          <Label htmlFor="genres">Genres</Label>
          <GenresWrap>
            { genresInFilter.map((genre) => (
              <Genre key={genre}>
                {genre}
                <CrossButton type="button" onClick={() => closeGenre(genre)}><IoMdClose /></CrossButton>
              </Genre>
            ))}
          </GenresWrap>
          <InputWrap>
            <Label htmlFor="years">Years</Label>
            <FromToWrap>
              <InputFromTo type="number" id="years" placeholder="From" name="yearStart" onBlur={setYearQuery} />
              <InputFromTo type="number" id="years_" placeholder="To" name="yearEnd" onBlur={setYearQuery} />
            </FromToWrap>
          </InputWrap>
          <InputWrap>
            <Label htmlFor="rating2">Rating</Label>
            <FromToWrap>
              <InputFromTo type="number" id="rating2" placeholder="From" />
              <InputFromTo type="number" id="rating2_" placeholder="To" />
            </FromToWrap>
          </InputWrap>
          <InputWrap>
            <Label htmlFor="country">Country</Label>
            <Select name="country" id="country">
              <option value="Select country">Select country</option>
              <option value="Belarus">Belarus</option>
              <option value="USA">USA</option>
            </Select>
          </InputWrap>
          <FromToWrap>
            <FormButton type="submit">Clear filter</FormButton>
            <FormButton type="submit" onClick={handleSubmit}>
              <StyledLink to="sorting">Show results</StyledLink>
            </FormButton>
          </FromToWrap>

        </Form>
      </Container>
    )
  );
}
