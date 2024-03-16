import styled from '@emotion/styled';
import { BsFilterRight } from 'react-icons/bs';
import colors from '../../constants/colorConstants';
import IBurgerMenuProps from './Header.types';

export const HeaderWrapper = styled.div`
margin: 0 auto;
width: 100%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    /* padding: 32px 24px 40px 24px; */
    padding-top: 32px;
    padding-bottom: 40px;

    @media screen and (min-width: 550px) {
      flex-wrap: nowrap;
      padding-top: 40px;
    padding-bottom: 48px;
    }
    

/* grid-area: header; */
    /* padding-left: 62px;
    padding-right: 62px;
     display: grid;
     grid-auto-flow: column;
    align-items: center; */
    /* grid-template: 1fr / minmax(306px, auto) 1fr minmax(306px, auto);
    
    */
    /* grid-template: 1fr / minmax(auto, 246px) 1fr minmax(auto, 305px); */
   
`;

export const Logo = styled.img`
  margin: 0;
  width: 152px;
  height: 39px;
`;

export const BurgerMenu = styled.p<IBurgerMenuProps>`
padding: 15px 18px;
margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  background-color: ${colors.systemColors.primary};
  font-size: 20px;
  font-weight: 700;
  border-radius: 10px;
  color: ${colors.contextualColors.white};
  cursor: pointer;
  @media screen and (min-width: 550px) {
    margin-right: ${({ isOpen }) => isOpen && '248px'};
  }
`;

export const SearchBarWrap = styled.div`
  display: none;
  position: relative;
  height: 56px;
  width: 100%;

  @media screen and (min-width: 550px) {
    display: block;
  }
`;

export const SearchBarWrapMobile = styled.div`
  position: relative;
  height: 56px;
  width: 100%;
  @media screen and (min-width: 550px) {
    display: none;
  }
`;

export const SearchBar = styled.input`
box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    height: 56px;
    width: 100%;
    background-color: ${({ theme }) => theme && `${colors.backgroundColors.graphite}`};
    border:  ${({ theme }) => theme && `2px solid ${colors.contextualColors.light}`};
    border-radius: 10px;
    font-size: 16px;
`;

export const BsFilterRightElement = styled(BsFilterRight)`
    position: absolute;
    top: 16px;
    right: 16px;
    width: 24px;
    height: 24px;
    fill: ${colors.contextualColors.light};
`;

export const Button = styled.button`
/* display: none; */
  background-color: transparent;
 outline: 1px solid transparent;
  border: none;
  &:focus {
    outline: 1px solid transparent;
  }
`;
