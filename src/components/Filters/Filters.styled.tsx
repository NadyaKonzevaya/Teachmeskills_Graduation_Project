import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import colors from '../../constants/colorConstants';
import { IFromToWrapProps, IRadioLabelLeftProps } from './Filters.types';

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  overflow: auto;
  height: 100%;
  background-color: ${({ theme }) => (theme ? `${colors.backgroundColors.dark}` : `${colors.contextualColors.white}`)};

  @media screen and (min-width: 520px) {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    width: 518px;
  }
`;

export const Form = styled.form`
  height: auto;
  padding: 32px 24px 48px 24px;

  @media screen and (min-width: 520px) {
    padding: 48px 40px;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme && `${colors.contextualColors.white}`};

  @media screen and (min-width: 520px) {
    font-size: 24px;
  }
`;

export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({ theme }) => theme && `${colors.contextualColors.white}`};
`;

export const LabelTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({ theme }) => theme && `${colors.contextualColors.white}`};
`;

export const Wrap = styled.div`
  width: 100%;
  margin-bottom: 25px;
  padding-bottom: 32px;
  border-bottom: 1px solid ${colors.contextualColors.light};
`;

export const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
`;

export const RadioLabelLeft = styled.label<IRadioLabelLeftProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 48%;
  color: ${({ theme }) => theme && `${colors.contextualColors.white}`};
  height: 45px;
  border: ${({ theme }) => (theme ? `2px solid ${colors.backgroundColors.graphite}` : `2px solid ${colors.contextualColors.light}`)} ;
  border-radius: 10px 0 0 10px;
  background-color: ${({ checked, theme }) => {
    if (checked && theme) {
      return `${colors.backgroundColors.graphite}`;
    } if (checked && !theme) {
      return `${colors.contextualColors.light}`;
    } if (!checked && theme) {
      return `${colors.backgroundColors.dark}`;
    }
    return `${colors.contextualColors.white}`;
  }};
  cursor: pointer;
`;

export const RadioLabelRight = styled(RadioLabelLeft)`
  border-radius: 0 10px 10px 0;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 22px;
`;

export const Input = styled.input`
  height: 45px;
  border: ${({ theme }) => !theme && `2px solid ${colors.contextualColors.light}`};
  background-color: ${({ theme }) => (theme ? `${colors.backgroundColors.graphite}` : `${colors.contextualColors.white}`)};
  color: ${({ theme }) => theme && `${colors.systemColors.secondary}`};
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const GenresWrap = styled.ul`
  max-height: 100px; 
  overflow-y: auto; 
  background-color: ${({ theme }) => theme && `${colors.backgroundColors.graphite}`};
  padding: 12px;
  border: 2px solid ${colors.contextualColors.light};
  border-radius: 10px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 19px;
`;

export const Genre = styled.li`
  height: auto;
  display: flex;
  border: ${({ theme }) => !theme && `2px solid ${colors.contextualColors.light}`};
  border-radius: 6px;
  padding: 2px;
  background-color: ${({ theme }) => (theme ? `${colors.backgroundColors.dark}` : `${colors.contextualColors.light}`)};
  color: ${({ theme }) => theme && `${colors.contextualColors.white}`};
`;

export const CrossButton = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  color: ${({ theme }) => theme && `${colors.contextualColors.light}`};
  &:focus {
    outline: none;
  }
`;

export const FromToWrap = styled.div<IFromToWrapProps>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ type }) => type === 'mobileMenu' && 'column'};
  gap: 16px;
  
  @media screen and (min-width: 520px) {
    gap: 40px;
    flex-direction: row;
  }
`;

export const InputFromTo = styled(Input)`
  width: 45%;
`;

export const FormButton = styled.button`
  width: 270px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: ${({ theme }) => (theme ? `${colors.backgroundColors.graphite}` : `${colors.contextualColors.light}`)};
  color: ${colors.contextualColors.white};
  &:hover, &:focus, &:active {
    background-color: ${colors.systemColors.primary};
  }
  
  @media screen and (min-width: 520px) {
    width: 199px;
  }
`;

export const StyledLink = styled(Link)`
  color: ${colors.contextualColors.white};
`;
