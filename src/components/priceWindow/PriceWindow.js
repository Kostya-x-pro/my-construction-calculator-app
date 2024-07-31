import { useSelector } from 'react-redux';
import './price-window.scss';

const PriceWindow = () => {
  const {operationsResult} = useSelector(state => state);
  
  return (
    <div className="price__wrapper">
      <div className="price__UAH">{operationsResult} грн</div>
      <div className="price__total-description">Примерная 
      общая стоимость работ</div>
      <div className="price__USD">0 $</div>
      <div className="price__usd-decription">Сумма в долларах США
      по текущему курсу</div>
    </div>
  )
}

export default PriceWindow;