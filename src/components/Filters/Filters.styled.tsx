import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import colors from '../../constants/colorConstants';

export const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 518px;
    height: 100%;
    background-color: ${(props) => (props.theme ? `${colors.backgroundColors.dark}` : `${colors.contextualColors.white}`)};
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
`;

export const Form = styled.form`
    /* width: 100%; */
    height: 100%;
    padding: 35px 40px;
`;

export const TitleWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme && `${colors.contextualColors.white}`};
`;

export const Label = styled.label`
    font-weight: 600;
    margin-bottom: 8px;
    color: ${(props) => props.theme && `${colors.contextualColors.white}`};
`;

export const LabelTitle = styled.h2`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
    color: ${(props) => props.theme && `${colors.contextualColors.white}`};
`;

export const Wrap = styled.div`
width: 100%;
/* width: 443px; */
margin-bottom: 25px;
   padding-bottom: 32px;
   border-bottom: 1px solid ${colors.backgroundColors.graphite};
`;

export const RadioInput = styled.input`
    position: absolute;
    opacity: 0;
`;

export const RadioLabelLeft = styled.label`
display: inline-flex;
justify-content: center;
align-items: center;
width: 49%;
color: ${(props) => props.theme && `${colors.contextualColors.white}`};
    /* width: 219px; */
    height: 45px;
     border: 2px solid ${colors.backgroundColors.graphite};
     border-radius: 10px 0 0 10px;
     background-color: ${(props) => {
    if (props.checked && props.theme) {
      return `${colors.backgroundColors.graphite}`;
    } if (props.checked && !props.theme) {
      return `${colors.contextualColors.light}`;
    } if (!props.checked && props.theme) {
      return `${colors.backgroundColors.dark}`;
    }
    return `${colors.contextualColors.white}`;
  }};
     cursor: pointer;
`;

export const RadioLabelRight = styled(RadioLabelLeft)`
      border-radius: 0 10px 10px 0;
      color: ${(props) => props.theme && `${colors.contextualColors.white}`};
`;

export const InputWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 22px;
`;

export const Input = styled.input`
    height: 45px;
    /* width: 100%; */
    border: ${(props) => !props.theme && `2px solid ${colors.contextualColors.light}`};
    background-color: ${(props) => props.theme && `${colors.backgroundColors.graphite}`};
    color: ${(props) => props.theme && `${colors.systemColors.secondary}`};
    border-radius: 10px;
    padding-left: 20px;
    padding-right: 20px;
    
`;

export const GenresWrap = styled.ul`
  max-height: 100px; 
  overflow-y: auto; 
  background-color: ${(props) => props.theme && `${colors.backgroundColors.graphite}`};
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
    border: ${(props) => !props.theme && `2px solid ${colors.contextualColors.light}`};
    border-radius: 6px;
    padding: 3px;
    background-color: ${(props) => props.theme ? `${colors.backgroundColors.dark}` : `${colors.contextualColors.light}`};
    color: ${(props) => props.theme && `${colors.contextualColors.white}`};
   `;

export const CrossButton = styled.button`
    background-color: transparent;
    /* margin-left: 8px; */
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    color: ${(props) => props.theme && `${colors.contextualColors.light}`};
    &:focus {
        outline: none;
    }
   `;

export const InputFromTo = styled(Input)`
  flex-basis: auto((100% - 40px) / 2);

`;

export const FromToWrap = styled.div`
    display: flex;
    justify-content: space-between;
   `;

export const FormButton = styled.button`
     flex-basis: auto((100% - 40px) / 2);
    padding: 15px 60px;
    background-color: ${(props) => props.theme ? `${colors.backgroundColors.graphite}` : `${colors.contextualColors.light}`};
    color: ${colors.contextualColors.white};
    &:hover, &:focus, &:active {
        background-color: ${colors.systemColors.primary};
    }

`;

export const StyledLink = styled(Link)`
     color: ${colors.contextualColors.white};
`;
