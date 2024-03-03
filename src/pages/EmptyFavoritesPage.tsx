import empty from '../images/favorites.png';
import { Empty, EmptyWrap, EmptyText } from './Pages.styled';

export default function EmptyFavoritePage() {
  return (
    <EmptyWrap>
          <Empty src={empty} alt="Empty favorites" />
          <EmptyText>Empty state text</EmptyText>
    </EmptyWrap>
  );
}
