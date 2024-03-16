import styled from '@emotion/styled';
import colors from '../../constants/colorConstants';
import IRadioLabelLeftProps from '../Filters/Filters.types';

export const SettingsWrapper = styled.div`
grid-column: 2 / 4;
padding-bottom: 48px;
 /* padding-left: 24px;
    padding-right: 24px; */
`;

export const Form = styled.form`
    width: 100%;
   
`;

export const Title = styled.h2`
    font-size: 24px;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 16px;
    color: ${({ theme }) => theme && `${colors.contextualColors.white}`};
`;

export const Text = styled.p`
    padding: 0;
    margin: 0;
    color: ${colors.contextualColors.light};
`;

export const Wrapper = styled.div`
    padding: 24px;
    /* padding: 24px 40px; */
    border: ${({ theme }) => !theme && `2px solid ${colors.contextualColors.light}`};
    border-radius: 10px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 40px;
    background-color: ${({ theme }) => theme && `${colors.backgroundColors.dark}`};
    &:active {
        background-color: ${({ theme }) => theme && `${colors.backgroundColors.dark}`};
    }
`;

export const Label = styled.label`
/* flex-basis: calc((100% - 40px) / 2); */
width: 100%;
    display: inline-flex;
    flex-direction: column;
    font-weight: 600;
    color: ${({ theme }) => theme && `${colors.contextualColors.white}`};
`;

export const Input = styled.input`
    width: 100%;
    height: 56px;
    margin-top: 8px;
    padding-left: 20px;
    padding-right: 20px;
    /* box-sizing: border-box; */
     border: ${({ theme }) => !theme && `2px solid ${colors.contextualColors.light}`};
    border-radius: 10px;
    font-size: 16px;
    background-color: ${({ theme }) => theme && `${colors.backgroundColors.graphite}`};
    color: ${({ theme }) => theme && `${colors.contextualColors.white}`};
`;

export const LabelBottom = styled(Label)`
    /* margin-top: 24px; */
    /* margin-left: auto; */
    color: ${({ theme }) => theme && `${colors.contextualColors.white}`};
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

export const SwitchSlider = styled.span<IRadioLabelLeftProps>`
    &:after {
    position:absolute;
    top:50%;
    left: ${({ checked }) => (checked ? '14px' : '2px')};
    width:16px;
    height:16px;
    border-radius:50%;
    background:${colors.contextualColors.white};
    transform: translateY(-50%);
    content:'';
    }
`;
export const ButtonWrap = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
    /* text-align: right; */
`;

export const Button = styled.button`
margin: 0 auto;
    /* width: 266px; */
    width: 270px;
    height: 56px;
    font-family: inherit;
    background-color: ${({ theme }) => (theme ? `${colors.backgroundColors.graphite}` : `${colors.contextualColors.white}`)};
    color: ${({ theme }) => theme && `${colors.contextualColors.white}`};
    border: ${({ theme }) => !theme && `2px solid ${colors.contextualColors.light}`};
    /* margin-left: 40px; */
    &:hover, &:active {
        background-color: ${colors.systemColors.primary};
    }
    outline: none;
`;

export const WrapperTheme = styled(Wrapper)`
    flex-direction: row;
`