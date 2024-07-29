import { useHttp } from "../../hooks/http.hook";
import {useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  squaresFetching, 
  squaresFetched, 
  squaresFetchedError, 
  setSquaresValues,
} from '../../redux/actions'
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./calculationBoard.scss";

const CalculationBoard = () => {
  const {
    squares, 
    squaresLoadingStatus,
    squaresValue,
  } = useSelector(state => state);
  const dispatch = useDispatch();
  const {request} = useHttp();

  useEffect(() => {
    dispatch(squaresFetching());
    request("http://localhost:3001/squares")
      .then(data => dispatch(squaresFetched(data)))
      .catch(() => dispatch(squaresFetchedError()))
  }, [])

  if (squaresLoadingStatus === 'loading') {
    return <Spinner/>
  } else if (squaresLoadingStatus === 'error') {
    return <ErrorMessage/>
  }

  const onValueChange = (e) => {
    const target = e.target;
    dispatch(setSquaresValues(target.name, target.value));
  }

  const rederItems = (arr) => {
    if (arr.length === 0) {
      return <div>Данных пока что нет...</div>
    }

    return arr.map(({id, name}) => {
      return (
        <div 
          className="calculator__field"
          key={id}>
          <label htmlFor={id}>{name}</label>
          <div>
            <input
              className={squaresValue[id] < 0 ? 'error' : ''}
              onChange={onValueChange}
              id={id}
              type="number"
              placeholder="0.0"
              name={id}
              defaultValue={squaresValue.hasOwnProperty(id) ? squaresValue[id] : null}
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
          {rederItems(squares)}
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