import { useState } from 'react';
import AppHeader from '../../appHeader/App-header';
import CalculationBoard from '../../calculationBoard/CalculationBoard';
import PriceWindow from '../../priceWindow/PriceWindow';
import CalculationWorks from '../../calculationWorks/CalculationWorks';

import './main-page.scss';

const MainPage = () => {
  const [tabNum, setTabNum] = useState(0);
  // const [area, setArea] = useState(0);
  // // Получаю общую площадь из компонента CalculationBoard
  // const calcArea = (obj) => {
  //   let total = 0;
  //   const arr = Object.values(obj);
  //   if (arr.length > 0) {
  //     total = arr.reduce((acc, curr) => acc + curr);
  //   }
  //   setArea(total)
  // }

  const tabsComponents = [
    <CalculationBoard/>,   
    <CalculationWorks/> 
  ]
  let activTab = tabsComponents[tabNum];
  const activTabClass = ' tabs__active'

  const handleChangeTab = (i = 0) => {
    setTabNum(i)
    activTab = tabsComponents[i]
  }

  return (
    <>
      <AppHeader/>
      <div className="tabs">
        <a 
          href="#"
          onClick={() => handleChangeTab(0)}
          className={tabNum === 0 ? 'tabs__link' + activTabClass : 'tabs__link'}>Площадь помещения</a>
        <a 
          href="#"
          onClick={() => handleChangeTab(1)}
          className={tabNum === 1 ? 'tabs__link' + activTabClass : 'tabs__link'}>Необходимые работы</a>
       </div>
      <div className='mainpage__content'>
        {activTab}
        <PriceWindow/> 
      </div>
      <button className='main__btn'>Войти как администратор</button>
    </>
  )

}

export default MainPage;