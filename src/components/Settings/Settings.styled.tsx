import styled from '@emotion/styled';
import colors from '../../constants/colorConstants';
// import { MainWrapper } from '../MainMovies/MainMovieList.styled';

export const SettingsWrapper = styled.div`
grid-column: 2 / 4;
    /* padding-top: 16px;
    padding-bottom: 64px;
    padding-left: 62px; */
`;
export const Form = styled.form`
    width: 100%;
`;

export const Title = styled.h2`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
    color: ${(props) => props.theme && `${colors.contextualColors.white}`};
`;
export const Text = styled.p`
    padding: 0;
    margin: 0;
    color: ${colors.contextualColors.light}
`;

export const Wrapper = styled.div`
    padding: 24px 40px;
     border: ${(props) => !props.theme && `2px solid ${colors.contextualColors.light}`};
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 40px;
    background-color: ${(props) => props.theme && `${colors.backgroundColors.dark}`};
    &:active {
        background-color: ${(props) => props.theme && `${colors.backgroundColors.dark}`};
    }
`;

export const Label = styled.label`
flex-basis: calc((100% - 40px) / 2);
    display: inline-flex;
    flex-direction: column;
    font-weight: 600;
    color: ${(props) => props.theme && `${colors.contextualColors.white}`};
`;

export const Input = styled.input`
    width: 100%;
    height: 56px;
    margin-top: 8px;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
     border: ${(props) => !props.theme && `2px solid ${colors.contextualColors.light}`};
    border-radius: 10px;
    font-size: 16px;
    background-color: ${(props) => props.theme && `${colors.backgroundColors.graphite}`};
    color: ${(props) => props.theme && `${colors.contextualColors.white}`};
`;

export const LabelBottom = styled(Label)`
    margin-top: 24px;
    margin-left: auto;
    color: ${(props) => props.theme && `${colors.contextualColors.white}`};
`;

export const Switch = styled.div`
    position: relative;
    width:32px;
    height:20px;
    border-radius:40%;
    background:${colors.systemColors.primary};
    
    
`;

export const SwitchLabel = styled.label`
    height: 100%;
    display: block;
    width: 100%;
    cursor: pointer;;
`;
export const SwitchCheck = styled.input`
    position: absolute;
    opacity: 0;
`;
export const SwitchSlider = styled.span`
    &:after {
    position:absolute;
    top:50%;
    left: ${(props) => (props.checked ? '14px' : '2px')};
    width:16px;
    height:16px;
    border-radius:50%;
    background:${colors.contextualColors.white};
    transform: translateY(-50%);
    /* background-color: tomato; */
    /* background:linear-gradient(#D0D0D0, #FDFDFD);
    box-shadow:
        0 0 2px 2px #FFF inset,
        0 0 4px 1px rgba(0, 0, 0, 0.6); */
    content:'';
    }
`;
export const ButtonWrap = styled.div`
    text-align: right;
`;

export const Button = styled.button`
    width: 266px;
    height: 56px;
    font-family: inherit;
    background-color: ${(props) => props.theme ? `${colors.backgroundColors.graphite}` : `${colors.contextualColors.white}`};
    color: ${(props) => props.theme && `${colors.contextualColors.white}`};
    border: ${(props) => !props.theme && `2px solid ${colors.contextualColors.light}`};
    margin-left: 40px;
    &:hover, &:active {
        background-color: ${colors.systemColors.primary};
        
      }
      outline: none;
`;
