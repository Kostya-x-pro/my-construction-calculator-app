import "./setPricesBoard.scss";

const SetPricesBoard = () => {
  return (
    <div className="prices__wrapper">
      <div className="prices__wrapper-title">
        Установите средний ценник каждой работы:
      </div>
      <div className="prices__board">
      
          <div className="prices__field">
          <label htmlFor="Dismantling">Демонтаж, зачистка старой отделки </label>
            <div>
              <input
                id="livingRoom"
                type="text"
                value="20"
                name="living Room"
              />
              <span>
                грн/м<sup>2</sup>
              </span>
            </div>
          </div>

          <div className="prices__field">
          <label htmlFor="Slopes">Откосы оконные  </label>
            <div>
              <input
                id="corridor2"
                type="text"
                value="20"
                name="corridor2"
              />
              <span>
                грн/м<sup>2</sup>
              </span>
            </div>
          </div>

          <div className="prices__field">
          <label htmlFor="Plastering-walls">Штукатурка стен  </label>
            <div>
              <input
                id="livingRoomWithKitchen-studio"
                type="text"
                value="20"
                name="livingRoomWithKitchen-studio"
              />
              <span>
                грн/м<sup>2</sup>
              </span>
            </div>
          </div>

          <div className="prices__field">
          <label htmlFor="Floor-screed">Стяжка пола </label>
            <div>
              <input
                id="Kitchen"
                type="text"
                value="20"
                name="Kitchen"
              />
              <span>
                грн/м<sup>2</sup>
              </span>
            </div>
          </div>

          <div className="prices__field">
          <label htmlFor="Wall-putty">Шпатлевка стен</label>
            <div>
              <input
                id="Bedroom1"
                type="text"
                value="20"
                name="Bedroom1"
              />
              <span>
                грн/м<sup>2</sup>
              </span>
            </div>
          </div>

          <div className="prices__field">
          <label htmlFor="Laying-laminate">Укладка ламината</label>
            <div>
              <input id="Pantry" type="text" value="20" name="Pantry" />
              <span>
                грн/м<sup>2</sup>
              </span>
            </div>
          </div>

          <div className="prices__field">
          <label htmlFor="Wallpapering">Поклейка обоев</label>
            <div>
              <input
                id="Bedroom2"
                type="text"
                value="20"
                name="Bedroom2"
              />
              <span>
                грн/м<sup>2</sup>
              </span>
            </div>
          </div>

          <div className="prices__field">
          <label htmlFor="Installing-skirting">Установка плинтуса на пол</label>
            <div>
              <input
                id="Balcony1"
                type="text"
                value="20"
                name="Balcony1"
              />
              <span>
                грн/м<sup>2</sup>
              </span>
            </div>
          </div>

          <div className="prices__field">
          <label htmlFor="Painting-walls">Покраска стен</label>
            <div>
              <input
                id="Childrens"
                type="text"
                value="20"
                name="Childrens"
              />
              <span>
                грн/м<sup>2</sup>
              </span>
            </div>
          </div>

          <div className="prices__field">
          <label htmlFor="Tile-bathrooms">Плитка санузлы, пол кухни, коридор</label>
            <div>
              <input
                id="Balcony2"
                type="text"
                value="20"
                name="Balcony2"
              />
              <span>
              грн/м<sup>2</sup>
              </span>
            </div>
          </div>

          <div className="prices__field">
          <label htmlFor="Stretch-plast-ceiling">Натяжной / гипсокартонный потолок</label>
            <div>
              <input
                id="Childrens2"
                type="text"
                value="20"
                name="Childrens2"
              />
              <span>
              грн/м<sup>2</sup>
              </span>
            </div>
          </div>

          <div className="prices__field">
          <label htmlFor="Wiring">Разводка, установка сантехники</label>
            <div>
              <input id="Loggia" type="text" value="30000" name="Loggia" />
              <span>
              грн
              </span>
            </div>
          </div>

          <div className="prices__field">
          <label htmlFor="Painting-ceiling">Покраска потолка
          </label>
            <div>
              <input
                id="Cabinet"
                type="text"
                value="20"
                name="Cabinet"
              />
              <span>
              грн/м<sup>2</sup>
              </span>
            </div>
          </div>

          <div className="prices__field">
          <label htmlFor="Electrics">Электрика: розетки, выключ., свет </label>
            <div>
              <input
                id="Bathroom-custom"
                type="text"
                value="40000"
                name="Bathroom-custom"
              />
              <span>
              грн
              </span>
            </div>
          </div>

          <div className="prices__field">
          <label htmlFor="Ceiling-putty">Шпаклевка потолка
          </label>
            <div>
              <input
                id="Corridor1"
                type="text"
                value="20"
                name="Corridor1"
              />
              <span>
              грн/м<sup>2</sup>
              </span>
            </div>
          </div>

          <div className="prices__field">
            <label htmlFor="Inserting-doors">Вставка межкомнатных дверей</label>
            <div>
              <input
                id="Bathroom-toilet"
                type="text"
                value="10000"
                name="Bathroom-toilet"
              />
              <span>
              грн/шт/25м<sup>2</sup>
              </span>
            </div>
          </div>

          <div className="prices__field">
          <label htmlFor="Ceiling-plinth">Плинтус потолочный</label>
            <div>
              <input
                id="Bathroom-toilet"
                type="text"
                value='10'
                name="Bathroom-toilet"
              />
              <span>
                грн/м
              </span>
            </div>
          </div>

          <div className="prices__field">
          <label htmlFor="Entrance-door">Вставка входной двери</label>
            <div>
              <input
                id="Bathroom-toilet"
                type="text"
                value="10000"
                name="Bathroom-toilet"
              />
              <span>
              грн/шт
              </span>
            </div>
          </div>
        </div>

        <div className="prices__board-notes">
          <div className="notes__dots-wrapper">
            <span></span>
          </div>
          <textarea name="form-notes" rows="3"></textarea>
          <button className='entru__btn'>Выйти</button>
        </div>

    </div>
  );
};

export default SetPricesBoard;
