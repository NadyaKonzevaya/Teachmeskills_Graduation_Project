import { useContext, useState } from 'react';
import {
  UserMenuWrap, Letters, Name, MdKeyboardArrowDownElement, Button,
} from './UserMenu.styled';
import Backdrop from '../Backdrop/Backdrop';
import ThemeContext from '../../utils/Context';

export default function UserMenu() {
  const { theme } = useContext(ThemeContext);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const handleClick = () => {
    setIsFiltersOpen(true);
  };

  return (
    <UserMenuWrap>
      <Letters>NK</Letters>
      <Name theme={theme === 'dark'}>Nadya Konzevaya</Name>
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
