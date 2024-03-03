import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import IBackDropProps from '../Backdrop/Backdrop.types';
import {
  Container, Form, Title, Label, LabelTitle, Wrap, RadioInput, RadioLabelLeft,
  RadioLabelRight, InputWrap, Input, GenresWrap, Genre, CrossButton, InputFromTo, FromToWrap,
  Select, FormButton, TitleWrap,
} from './Filters.styled';

const genres = ['Adventure', 'Dramma', 'Documental', 'Thriller'];

export default function Filters({ isOpen, handleIsOpen }: IBackDropProps) {
  const [sortIsChecked, setSortIsChecked] = useState('year');
  // console.log("useState", sortIsChecked);

  const setCheckedInput = (e) => {
    // console.log(e.target.value);

    setSortIsChecked(e.target.value);
  };
  return (
    <Container>
      <Form>
        <TitleWrap>
          <Title>Filters</Title>
          <CrossButton type='button'><IoMdClose /></CrossButton>
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
          <Input type="text" id="title" placeholder="Your text" />
        </InputWrap>
        <Label htmlFor="genres">Genres</Label>
        <GenresWrap>
          { genres.map((genre) => (
            <Genre key={genre}>
              {genre}
              <CrossButton type="button"><IoMdClose /></CrossButton>
            </Genre>
          ))}
        </GenresWrap>
        <InputWrap>
          <Label htmlFor="years">Years</Label>
          <FromToWrap>
            <InputFromTo type="number" id="years" placeholder="From" />
            <InputFromTo type="number" id="years" placeholder="To" />
          </FromToWrap>
        </InputWrap>
        <InputWrap>
          <Label htmlFor="rating2">Rating</Label>
          <FromToWrap>
            <InputFromTo type="number" id="rating2" placeholder="From" />
            <InputFromTo type="number" id="rating2" placeholder="To" />
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
          <FormButton type="submit">Show results</FormButton>
        </FromToWrap>

      </Form>
    </Container>
  );
}
