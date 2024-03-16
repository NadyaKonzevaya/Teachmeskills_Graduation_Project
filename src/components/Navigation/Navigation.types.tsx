export interface INavItemProps {
  active: string;
}

export interface INavigationProps {
  type: string;
  toogleOpen: (isOpen: boolean) => void;
}
