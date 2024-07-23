import { useHttp } from "../../hooks/http.hook";
import { useState, useEffect } from "react";
import "./calculationBoard.scss";

const CalculationBoard = () => {
  const [state, setState] = useState([]);
  const {request} = useHttp();

  useEffect(() => {
    request("http://localhost:3001/squares")
      .then(data => {
        setState(rederItems(data));
      })
      .catch(error => console.log(error))
  }, [])

  const rederItems = (arr) => {
    if (arr.length === 0) {
      return <div>Данных пока что нет.</div>
    }

    return arr.map(({id, name}) => {
      return (
        <div 
          className="calculator__field"
          key={id}>
            <label htmlFor={id}>{name}</label>
            <div>
              <input
                id={id}
                type="number"
                placeholder="0.0"
                name={id}
              />
              <span>
                м<sup>2</sup>
              </span>
            </div>
          </div>

      )
    })

  }

  return (
    <div className="calculator__wrapper">
        {/* Rooms */}
        <div className="main__calculator_top">
          <div className="calculator__field">
            <label htmlFor="heightCeilingApartment">
              Высота потолка в квартире:
            </label>
            <div>
              <input
                id="heightCeilingApartment"
                type="number"
                placeholder="0.0"
                name="height Ceiling"
              />
              <span>
                м<sup>2</sup>
              </span>
            </div>
          </div>

          <div className="main__calculator_description">
            Площадь отдельных комнат:
          </div>
        </div>

        <div className="main__calculator_grid">
          
        {state}

        </div>

        <div className="main__calculator-notes">
          <div className="notes__dots-wrapper">
            <span></span>
            <span></span>
          </div>
          <textarea name="calculator-notes" rows="3"></textarea>
        </div>

    </div>
  );
};

export default CalculationBoard;