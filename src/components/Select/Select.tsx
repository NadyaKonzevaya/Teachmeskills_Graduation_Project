import { useContext } from 'react';
import TEXTNODES from '../../constants/textConstants';
import { selectValue } from '../../utils/constants';
import { SelectWrap } from './Select.styled';

interface ISelectParams {
  onChange: () => void,
  value: string,
  setValue: (value: string) => void;
}
export default function Select({ onChange, value, setValue }: ISelectParams) {
  const handleSelectChange = (e) => {
    const selectedCountry = e.target.value;
    setValue(selectedCountry); // Обновление выбранной страны
    onChange(); // Вызов функции onChange для оповещения родительского компонента об изменении
  };
  return (
    <SelectWrap
      name={TEXTNODES.COUNTRY}
      id={TEXTNODES.COUNTRY}
      onChange={handleSelectChange}
      value={value}
    >
      {selectValue.map((country) => (
        <option key={country[0]} value={country[0]}>
          {country[1]}
        </option>
      ))}
    </SelectWrap>
  );
}
