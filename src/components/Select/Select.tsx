import { useContext } from 'react';
import TEXTNODES from '../../constants/textConstants';
import { selectValue } from '../../utils/constants';
import { SelectWrap } from './Select.styled';
import ThemeContext from '../../utils/Context';
import ISelectParams from './Select.types';

export default function Select({ onChange }: ISelectParams) {
  const { theme } = useContext(ThemeContext);
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = e.target.value;
    onChange(selectedCountry);
  };
  return (
    <SelectWrap
      theme={theme === 'dark'}
      name={TEXTNODES.COUNTRY}
      id={TEXTNODES.COUNTRY}
      onChange={handleSelectChange}
    >
      {selectValue.map((country) => (
        <option key={country[0]} value={country[0]}>
          {country[1]}
        </option>
      ))}
    </SelectWrap>
  );
}
