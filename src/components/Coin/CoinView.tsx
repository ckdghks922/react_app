import { Link } from 'react-router-dom';
import * as S from './styled';

export const CoinTitleView: React.FC = () => {
  return <S.Title>Top 20 Coin List</S.Title>;
};

interface CoinItemProps {
  id: string;
  symbol: string;
}
export const CoinItemView: React.FC<CoinItemProps> = ({ id, symbol }) => {
  return (
    <S.CoinWrapper>
      <S.CoinImg
        alt="symbol"
        src={`https://coinicons-api.vercel.app/api/icon/${symbol.toLowerCase()}`}
      />
      <Link to={id}>{id}</Link>
    </S.CoinWrapper>
  );
};
