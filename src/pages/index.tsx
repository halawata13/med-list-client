import type { NextPage } from 'next';
import { Header } from '../components/header';
import { Main } from '../components/main';
import { MedicineListInUse } from '../features/medicine-list/medicine-list-in-use';

const Home: NextPage = () => {


  return (
    <>
      <Header />
      <Main>
        <MedicineListInUse medicines={[]} onPlusClicked={} onMinusClicked={} onMoveStockClicked={} />
      </Main>
    </>
  )
};

export default Home;
