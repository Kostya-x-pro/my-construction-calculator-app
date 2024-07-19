import AppHeader from '../../appHeader/App-header';
import Tabs from '../../tabs/Tabs';
import MainForm from '../../mainForm/MainForm';
import PriceWindow from '../../priceWindow/PriceWindow';

import './main-page.scss';

const MainPage = () => {
  return (
    <>
      <AppHeader/>
      <Tabs/>
      <div className='mainpage__conten'>
        <MainForm/>
        <PriceWindow/>
      </div>
      <button className='main__btn'>Войти как администратор</button>
    </>
  )

}

export default MainPage;