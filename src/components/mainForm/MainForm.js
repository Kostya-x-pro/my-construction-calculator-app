import './mainForm.scss';

const MainForm = () => {
  return (
    <div className='form__wrapper'>
      <form className="main__form">
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

      </form>
    </div>
  )
}

export default MainForm;