import styled from '@emotion/styled';
import { MdKeyboardArrowDown } from 'react-icons/md';
import colors from '../../constants/colorConstants';

export const UserMenuWrap = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    margin-left: 41px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Letters = styled.p`
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
`;

export const Name = styled.p`
  font-weight: 600;
  margin-left: 20px;
  margin-right: 51px;
  color: ${({ theme }) => theme && `${colors.contextualColors.white}`};
`;

export const MdKeyboardArrowDownElement = styled(MdKeyboardArrowDown)`
  width: 20px;
  height: 20px;
  fill: ${colors.contextualColors.light};
`;

export const Button = styled.button`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    background-color: transparent;
    outline: 1px solid transparent;
    border: none;
    &:focus {
      outline: 1px solid transparent;
    }
  }
`;
