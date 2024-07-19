import './price-window.scss';

const PriceWindow = () => {
  return (
    <div className="price__wrapper">
      <div className="price__UAH">0 грн</div>
      <div className="price__total-description">Примерная 
      общая стоимость работ</div>
      <div className="price__USD">0 $</div>
      <div className="price__usd-decription">Сумма в долларах США
      по текущему курсу</div>
    </div>
  )
}

export default PriceWindow;