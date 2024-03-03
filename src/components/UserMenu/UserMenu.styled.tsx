import styled from '@emotion/styled';
import { MdKeyboardArrowDown } from "react-icons/md";

import colors from '../../constants/colorConstants';

export const UserMenuWrap = styled.div`
    margin-left: 41px;
     display: flex;
  /* height: 84px; */
  /* gap: 16px; */
  /* padding: 0 31px; */
  /* color: #ffffff; */
  align-items: center;
  /* background-color: #2231aa; */
  /* border-top: 1px solid #5360cd; */
  /* box-sizing: border-box; */
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
  /* margin: 0; */
  border-radius: 10px;
  color: ${colors.contextualColors.white};
`;

export const Name = styled.p`
    font-weight: 600;
    margin-left: 20px;
    margin-right: 51px;
`;

export const MdKeyboardArrowDownElement = styled(MdKeyboardArrowDown)`
    width: 20px;
    height: 20px;
    /* height: 10px; */
    fill: ${colors.contextualColors.light}
`;

export const Button = styled.button`
  background-color: transparent;
 outline: 1px solid transparent;
  border: none;
  &:focus {
    outline: 1px solid transparent;
  }
`;
