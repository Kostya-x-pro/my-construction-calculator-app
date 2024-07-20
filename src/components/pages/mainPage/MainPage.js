import AppHeader from '../../appHeader/App-header';
import CalculationBoard from '../../calculationBoard/CalculationBoard';
import PriceWindow from '../../priceWindow/PriceWindow';
import CalculationWorks from '../../calculationWorks/CalculationWorks';

import './main-page.scss';

const MainPage = () => {
  return (
    <>
      <AppHeader/>
      <div className="tabs">
        <a href="#" className="tabs__link tabs__active">Площадь помещения</a>
        <a href="#" className="tabs__link">Необходимые работы</a>
       </div>
      <div className='mainpage__content'>
        <CalculationBoard/>
        {/* <CalculationWorks/> */}
        <PriceWindow/> 
      </div>
      <button className='main__btn'>Войти как администратор</button>
    </>
  )

}

export default MainPage;