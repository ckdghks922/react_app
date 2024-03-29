import { Routes, Route } from 'react-router-dom';
import { PAGE_URL } from '@/configs';
import * as Page from '@/pages';
import * as Compt from '@/components';
import * as S from './styled';

export const MainPage: React.FC = () => {
  // TODO: <Compt.LoginRoute> 추가
  return (
    <>
      <Compt.Header />
      <S.Wrapper>
        <Compt.LeftSide />
        <S.MainSide>
          <Routes>
            <Route path={PAGE_URL.TODO} element={<Compt.Todo />} />
            <Route path={PAGE_URL.DRAWING} element={<Compt.Canvas />} />
            <Route path={`${PAGE_URL.COIN}/*`} element={<Page.Coin />} />
            <Route path="*" element={<div>Wrong Path</div>} />
          </Routes>
        </S.MainSide>
      </S.Wrapper>
    </>
  );
};
