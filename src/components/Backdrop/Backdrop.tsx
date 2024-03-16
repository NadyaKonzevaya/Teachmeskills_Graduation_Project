import { Filters } from '../Filters';
import Overlay from './Backdrop.styled';
import IBackDropProps from './Backdrop.types';

export default function Backdrop({ isOpen, handleIsOpen }: IBackDropProps) {
  return (
    <Overlay>
      <Filters isOpen={isOpen} handleIsOpen={handleIsOpen} type="mobileMenu" />
    </Overlay>
  );
}
