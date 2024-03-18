export interface INavItemProps {
  active: string;
}

export interface INavigationProps {
  type: string;
  theme: boolean;
  toogleOpen: (isOpen: boolean) => void;
}
