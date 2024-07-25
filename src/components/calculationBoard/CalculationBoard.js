import { useHttp } from "../../hooks/http.hook";
import { useState, useEffect } from "react";
import "./calculationBoard.scss";

const CalculationBoard = () => {
  const [works, setWorks] = useState([]);
  const [calculations, setCalculations] = useState({});
  const [errors, setErrors] = useState({});

  const {request} = useHttp();

  useEffect(() => {
    request("http://localhost:3001/squares")
      .then(data => {
        const initialCalculations = {};
        data.forEach(item => {
          const localStorageData = localStorage.getItem(item.id);
          initialCalculations[item.id] = localStorageData !== null ? +localStorageData : item.value;
        });
        setCalculations(initialCalculations);
        setWorks(data);
      })
      .catch(error => console.log(error))
    }, [request])

  const onValueChange = (e) => {
    const target = e.target;
    const value = +target.value;

    // Устанавливаю данные для дальнейшего расчёта
    setCalculations(calculations => ({
      ...calculations, 
      [target.id]: value
    }))
    setErrors(errors => ({
      ...errors, 
      [target.id]: value < 0
    }))

    // Записываю в LS (Что бы данные остались при переходе по табам)
    localStorage.setItem(target.id, target.value);
  }

  const rederItems = () => {
    if (works.length === 0) {
      return <div>Данных пока что нет.</div>
    }

    return works.map(({id, name}) => {
      return (
        <div 
          className="calculator__field"
          key={id}>
          <label htmlFor={id}>{name}</label>
          <div>
            <input
              className={errors[id] ? 'error' : ''}
              onChange={onValueChange}
              id={id}
              type="number"
              placeholder="0.0"
              name={id}
              value={calculations[id] || ""}
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
                м
              </span>
            </div>
          </div>

          <div className="main__calculator_description">
            Площадь отдельных комнат:
          </div>
        </div>

        <div className="main__calculator_grid">
          {rederItems()}
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