import './mainForm.scss';

const MainForm = () => {
  return (
    <div className='form__wrapper'>
      <form className="main__form">
      {/* Rooms */}
       <div className="main__form_top">
       <div className="form__field">
          <label htmlFor="heightCeilingApartment">Высота потолка в квартире:</label>
          <div>
            <input 
              id='heightCeilingApartment' 
              type="text"
              placeholder='0.0' 
              name='height Ceiling'/>
              <span>м<sup>2</sup></span>
          </div>
        </div>

        <div className="main__form_description">
        Площадь отдельных комнат:
        </div>
       </div>

       <div className="main__form_bottom">
       <div className="form__field">
          <label htmlFor="livingRoom">Гостинная</label>
          <div>
            <input 
              id='livingRoom' 
              type="text"
              placeholder='0.0' 
              name='living Room'/>
              <span>м<sup>2</sup></span>
          </div>
        </div>

        <div className="form__field">
          <label htmlFor="corridor2">Коридор 2</label>
         <div>
          <input 
              id='corridor2' 
              type="text"
              placeholder='0.0' 
              name='corridor2'/>
              <span>м<sup>2</sup></span>
         </div>
        </div>

        <div className="form__field">
          <label htmlFor="livingRoomWithKitchen-studio">Гостинная с кухней (студия)</label>
          <div>
            <input 
              id='livingRoomWithKitchen-studio' 
              type="text"
              placeholder='0.0' 
              name='livingRoomWithKitchen-studio'/>
              <span>м<sup>2</sup></span>
          </div>
        </div>

        <div className="form__field">
          <label htmlFor="Kitchen">Кухня</label>
          <div>
          <input 
            id='Kitchen' 
            type="text"
            placeholder='0.0' 
            name='Kitchen'/>
            <span>м<sup>2</sup></span>
          </div>
        </div>

        <div className="form__field">
          <label htmlFor="Bedroom1">Спальня 1</label>
          <div>
            <input 
              id='Bedroom1' 
              type="text"
              placeholder='0.0' 
              name='Bedroom1'/>
              <span>м<sup>2</sup></span>
          </div>
        </div>

        <div className="form__field">
          <label htmlFor="Pantry">Кладовая</label>
          <div>
            <input 
                id='Pantry' 
                type="text"
                placeholder='0.0' 
                name='Pantry'/>
                <span>м<sup>2</sup></span>
          </div>
        </div>

        <div className="form__field">
          <label htmlFor="Bedroom2">Спальня 2</label>
         <div>
          <input 
              id='Bedroom2' 
              type="text"
              placeholder='0.0' 
              name='Bedroom2'/>
              <span>м<sup>2</sup></span>
         </div>
        </div>

        <div className="form__field">
          <label htmlFor="Balcony1">Балкон 1</label>
          <div>
            <input 
              id='Balcony1' 
              type="text"
              placeholder='0.0' 
              name='Balcony1'/>
              <span>м<sup>2</sup></span>
          </div>
        </div>

        <div className="form__field">
          <label htmlFor="Childrens">Детская 1</label>
         <div>
          <input 
              id='Childrens' 
              type="text"
              placeholder='0.0' 
              name='Childrens'/>
              <span>м<sup>2</sup></span>
         </div>
        </div>

        <div className="form__field">
          <label htmlFor="Balcony2">Балкон 2</label>
          <div>
            <input 
              id='Balcony2' 
              type="text"
              placeholder='0.0' 
              name='Balcony2'/>
              <span>м<sup>2</sup></span>
          </div>
        </div>

        <div className="form__field">
          <label htmlFor="Childrens2">Детская 2</label>
          <div>
            <input 
              id='Childrens2' 
              type="text"
              placeholder='0.0' 
              name='Childrens2'/>
              <span>м<sup>2</sup></span>
          </div>
        </div>

        <div className="form__field">
          <label htmlFor="Loggia">Лоджия</label>
         <div>
          <input 
              id='Loggia' 
              type="text"
              placeholder='0.0' 
              name='Loggia'/>
              <span>м<sup>2</sup></span>
         </div>
        </div>

        <div className="form__field">
          <label htmlFor="Cabinet">Кабинет</label>
         <div>
          <input 
              id='Cabinet' 
              type="text"
              placeholder='0.0' 
              name='Cabinet'/>
              <span>м<sup>2</sup></span>
         </div>
        </div>

        <div className="form__field">
          <label htmlFor="Bathroom-custom">Санузел (ванная или душ)</label>
          <div>
          <input 
            id='Bathroom-custom' 
            type="text"
            placeholder='0.0' 
            name='Bathroom-custom'/>
            <span>м<sup>2</sup></span>
          </div>
        </div>

        <div className="form__field">
          <label htmlFor="Corridor1">Коридор 1</label>
         <div>
          <input 
              id='Corridor1' 
              type="text"
              placeholder='0.0' 
              name='Corridor1'/>
              <span>м<sup>2</sup></span>
         </div>
        </div>

        <div className="form__field">
          <label htmlFor="Bathroom-toilet">Санузел (туалет)</label>
          <div>
            <input 
              id='Bathroom-toilet' 
              type="text"
              placeholder='0.0' 
              name='Bathroom-toilet'/>
              <span>м<sup>2</sup></span>
          </div>
        </div>
       </div>

       {/* works */}
       {/* <div className="main__form_top">
        <div className="main__form_description">
        Название необходимых работ:
        </div>
       </div>

       <div className="main__form_bottom">
       
        <div className="form__field_job">
            <label htmlFor="Dismantling">Демонтаж, зачистка старой отделки <span>20грн/м<sup>2</sup></span></label>
              <input 
                id='Dismantling' 
                type="checkbox" 
                name='Dismantling'/>
          </div>

          <div className="form__field_job">
            <label htmlFor="Slopes">Откосы оконные  <span>20грн/м<sup>2</sup></span></label>
              <input 
                id='Slopes' 
                type="checkbox" 
                name='Slopes'/>
          </div>

          <div className="form__field_job">
            <label htmlFor="Plastering-walls">Штукатурка стен  <span>20грн/м<sup>2</sup></span></label>
              <input 
                id='Plastering-walls' 
                type="checkbox" 
                name='Plastering-walls'/>
          </div>

          <div className="form__field_job">
            <label htmlFor="Floor-screed">Стяжка пола <span>20грн/м<sup>2</sup></span></label>
              <input 
                id='Floor-screed' 
                type="checkbox" 
                name='Floor-screed'/>
          </div>

          <div className="form__field_job">
            <label htmlFor="Wall-putty">Шпатлевка стен<span>20грн/м<sup>2</sup></span></label>
              <input 
                id='Wall-putty' 
                type="checkbox" 
                name='Wall-putty'/>
          </div>

          <div className="form__field_job">
            <label htmlFor="Laying-laminate">Укладка ламината<span>20грн/м<sup>2</sup></span></label>
              <input 
                id='Laying-laminate' 
                type="checkbox" 
                name='Laying-laminate'/>
          </div>

          <div className="form__field_job">
            <label htmlFor="Wallpapering">Поклейка обоев<span>20грн/м<sup>2</sup></span></label>
              <input 
                id='Wallpapering' 
                type="checkbox" 
                name='Wallpapering'/>
          </div>

          <div className="form__field_job">
            <label htmlFor="Installing-skirting">Установка плинтуса на пол<span>20грн/м<sup>2</sup></span></label>
              <input 
                id='Installing-skirting' 
                type="checkbox" 
                name='Installing-skirting'/>
          </div>

          <div className="form__field_job">
            <label htmlFor="Painting-walls">Покраска стен<span>20грн/м<sup>2</sup></span></label>
              <input 
                id='Painting-walls' 
                type="checkbox" 
                name='Painting-walls'/>
          </div>
          
          <div className="form__field_job">
            <label htmlFor="Tile-bathrooms">Плитка санузлы, пол кухни, коридор<span>20грн/м<sup>2</sup></span></label>
              <input 
                id='Tile-bathrooms' 
                type="checkbox" 
                name='Tile-bathrooms'/>
          </div>
          
          <div className="form__field_job">
            <label htmlFor="Stretch-plast-ceiling">Натяжной / гипсокартонный потолок<span>20грн/м<sup>2</sup></span></label>
              <input 
                id='Stretch-plast-ceiling' 
                type="checkbox" 
                name='Stretch-plast-ceiling'/>
          </div>
          
          <div className="form__field_job">
            <label htmlFor="Wiring">Разводка, установка сантехники <span>30000грн</span></label>
              <input 
                id='Wiring' 
                type="checkbox" 
                name='Wiring'/>
          </div>

          <div className="form__field_job">
            <label htmlFor="Painting-ceiling">Покраска потолка<span>20грн/м<sup>2</sup></span></label>
              <input 
                id="Painting-ceiling" 
                type="checkbox" 
                name='Painting-ceiling'/>
          </div>

          <div className="form__field_job">
            <label htmlFor="Electrics">Электрика: розетки, выключ., свет <span>40000грн</span></label>
              <input 
                id='Electrics' 
                type="checkbox" 
                name='Electrics'/>
          </div>

          <div className="form__field_job">
            <label htmlFor="Ceiling-putty">Шпаклевка потолка<span>20грн/м<sup>2</sup></span></label>
              <input 
                id="Ceiling-putty" 
                type="checkbox" 
                name='Ceiling-putty'/>
          </div>
          
          <div className="form__field_job">
            <label htmlFor="Inserting-doors">Вставка межкомнатных дверей <span>10000грн</span></label>
              <input 
                id='Inserting-doors' 
                type="checkbox" 
                name='Inserting-doors'/>
          </div>
          
          <div className="form__field_job">
            <label htmlFor="Ceiling-plinth">Плинтус потолочный<span>10грн/м<sup>2</sup></span></label>
              <input 
                id="Ceiling-plinth" 
                type="checkbox" 
                name='Ceiling-plinth'/>
          </div>
          
          <div className="form__field_job">
            <label htmlFor="Entrance-door">Вставка входной двери <span>10000грн</span></label>
              <input 
                id='Entrance-door' 
                type="checkbox" 
                name='Entrance-door'/>
          </div>
        </div> */}

      </form>
    </div>
  )
}

export default MainForm;