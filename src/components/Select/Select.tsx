import TEXTNODES from '../../constants/textConstants';
import { selectValue } from '../../utils/constants';
import { SelectWrap } from './Select.styled';

export default function Select() {
  return (
    <SelectWrap name={TEXTNODES.COUNTRY} id={TEXTNODES.COUNTRY}>
      {selectValue.map((country) => <option value={country}>{country}</option>)}
    </SelectWrap>
  );
}
