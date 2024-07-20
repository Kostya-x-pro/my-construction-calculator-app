import './calculationWorks.scss';

const CalculationWorks = () => {
  return (
<div className="calculator__wrapper">
        {/* works */}
        <div className="main__calculator_top">
          <div className="main__calculator_description">
          Название необходимых работ:
          </div>
        </div>

      <div className="main__calculator_grid">
        <div className="calculator__field_job">
            <label htmlFor="Dismantling">Демонтаж, зачистка старой отделки <span>20грн/м<sup>2</sup></span></label>
              <input 
                id='Dismantling' 
                type="checkbox" 
                name='Dismantling'/>
          </div>

          <div className="calculator__field_job">
            <label htmlFor="Slopes">Откосы оконные  <span>20грн/м<sup>2</sup></span></label>
              <input 
                id='Slopes' 
                type="checkbox" 
                name='Slopes'/>
          </div>

          <div className="calculator__field_job">
            <label htmlFor="Plastering-walls">Штукатурка стен  <span>20грн/м<sup>2</sup></span></label>
              <input 
                id='Plastering-walls' 
                type="checkbox" 
                name='Plastering-walls'/>
          </div>

          <div className="calculator__field_job">
            <label htmlFor="Floor-screed">Стяжка пола <span>20грн/м<sup>2</sup></span></label>
              <input 
                id='Floor-screed' 
                type="checkbox" 
                name='Floor-screed'/>
          </div>

          <div className="calculator__field_job">
            <label htmlFor="Wall-putty">Шпатлевка стен<span>20грн/м<sup>2</sup></span></label>
              <input 
                id='Wall-putty' 
                type="checkbox" 
                name='Wall-putty'/>
          </div>

          <div className="calculator__field_job">
            <label htmlFor="Laying-laminate">Укладка ламината<span>20грн/м<sup>2</sup></span></label>
              <input 
                id='Laying-laminate' 
                type="checkbox" 
                name='Laying-laminate'/>
          </div>

          <div className="calculator__field_job">
            <label htmlFor="Wallpapering">Поклейка обоев<span>20грн/м<sup>2</sup></span></label>
              <input 
                id='Wallpapering' 
                type="checkbox" 
                name='Wallpapering'/>
          </div>

          <div className="calculator__field_job">
            <label htmlFor="Installing-skirting">Установка плинтуса на пол<span>20грн/м<sup>2</sup></span></label>
              <input 
                id='Installing-skirting' 
                type="checkbox" 
                name='Installing-skirting'/>
          </div>

          <div className="calculator__field_job">
            <label htmlFor="Painting-walls">Покраска стен<span>20грн/м<sup>2</sup></span></label>
              <input 
                id='Painting-walls' 
                type="checkbox" 
                name='Painting-walls'/>
          </div>
          
          <div className="calculator__field_job">
            <label htmlFor="Tile-bathrooms">Плитка санузлы, пол кухни, коридор<span>20грн/м<sup>2</sup></span></label>
              <input 
                id='Tile-bathrooms' 
                type="checkbox" 
                name='Tile-bathrooms'/>
          </div>
          
          <div className="calculator__field_job">
            <label htmlFor="Stretch-plast-ceiling">Натяжной / гипсокартонный потолок<span>20грн/м<sup>2</sup></span></label>
              <input 
                id='Stretch-plast-ceiling' 
                type="checkbox" 
                name='Stretch-plast-ceiling'/>
          </div>
          
          <div className="calculator__field_job">
            <label htmlFor="Wiring">Разводка, установка сантехники <span>30000грн</span></label>
              <input 
                id='Wiring' 
                type="checkbox" 
                name='Wiring'/>
          </div>

          <div className="calculator__field_job">
            <label htmlFor="Painting-ceiling">Покраска потолка<span>20грн/м<sup>2</sup></span></label>
              <input 
                id="Painting-ceiling" 
                type="checkbox" 
                name='Painting-ceiling'/>
          </div>

          <div className="calculator__field_job">
            <label htmlFor="Electrics">Электрика: розетки, выключ., свет <span>40000грн</span></label>
              <input 
                id='Electrics' 
                type="checkbox" 
                name='Electrics'/>
          </div>

          <div className="calculator__field_job">
            <label htmlFor="Ceiling-putty">Шпаклевка потолка<span>20грн/м<sup>2</sup></span></label>
              <input 
                id="Ceiling-putty" 
                type="checkbox" 
                name='Ceiling-putty'/>
          </div>
          
          <div className="calculator__field_job">
            <label htmlFor="Inserting-doors">Вставка межкомнатных дверей <span>10000грн</span></label>
              <input 
                id='Inserting-doors' 
                type="checkbox" 
                name='Inserting-doors'/>
          </div>
          
          <div className="calculator__field_job">
            <label htmlFor="Ceiling-plinth">Плинтус потолочный<span>10грн/м<sup>2</sup></span></label>
              <input 
                id="Ceiling-plinth" 
                type="checkbox" 
                name='Ceiling-plinth'/>
          </div>
          
          <div className="calculator__field_job">
            <label htmlFor="Entrance-door">Вставка входной двери <span>10000грн</span></label>
              <input 
                id='Entrance-door' 
                type="checkbox" 
                name='Entrance-door'/>
          </div>
        </div>

        <div className="main__calculator-notes">
          <div className="notes__dots-wrapper">
            <span></span>
            <span></span>
          </div>
          <textarea name="calculator-notes" rows="3"></textarea>
        </div>

    </div>
  )
}
export default CalculationWorks;