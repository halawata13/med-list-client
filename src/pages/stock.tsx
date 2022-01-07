import type { NextPage } from 'next';
import { Header } from '../components/header';
import { Main } from '../components/main';
import { MedicineListStock } from '../features/medicine-list/medicine-list-stock';

const Stock: NextPage = () => {
  return (
    <>
      <Header />
      <Main>
        <MedicineListStock medicines={[]} />
      </Main>
    </>
  )
};

export default Stock;
