import { useContext, useState } from 'react';
import {
  UserMenuWrap, Letters, Name, MdKeyboardArrowDownElement, Button,
} from './UserMenu.styled';
import Backdrop from '../Backdrop/Backdrop';
import ThemeContext from '../../utils/Context';
import { useAppSelector } from '../../redux/hooks';
import { getUserSelector } from '../../redux/selectors';

export default function UserMenu() {
  const { theme } = useContext(ThemeContext);
  const user = useAppSelector(getUserSelector);
  const letters = user?.slice(0, 2).toUpperCase();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const handleClick = () => {
    setIsFiltersOpen(true);
  };

  return (
    <UserMenuWrap>
      <Letters>{letters}</Letters>
      <Name theme={theme === 'dark'}>{user}</Name>
      <Button type="button" onClick={handleClick} aria-label="Filters">
        <MdKeyboardArrowDownElement />
      </Button>
      {isFiltersOpen && (<Backdrop isOpen={isFiltersOpen} handleIsOpen={setIsFiltersOpen} />)}
    </UserMenuWrap>
  );
}

// export default function UserName() {
//   const username = useAppSelector(getUserNameSelector);
//   const firstLetters = `${username.slice(0, 2).toUpperCase()}`;
//   return (
//     <div className={styles.name_wrap}>
//       <p className={styles.letters}>{ firstLetters }</p>
//       <p className={styles.name}>{ username }</p>
//     </div>
//   );
// }
