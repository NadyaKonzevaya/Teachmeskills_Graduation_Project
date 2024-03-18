export interface INavItemProps {
  active?: string;
}

export interface INavigationProps {
  type?: string;
  theme?: boolean;
  toggleOpen?: (isOpen: boolean) => void;
}
