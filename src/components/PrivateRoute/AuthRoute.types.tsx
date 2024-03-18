export default interface IAuthRoute {
  component: React.FC;
  redirectTo: string;
  isPrivate?: boolean;
}
