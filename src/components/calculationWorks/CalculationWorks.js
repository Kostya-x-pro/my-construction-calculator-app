import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHttp } from '../../hooks/http.hook';

import { 
  operationsFetching, 
  operationsFetched, 
  operationsFetchedError,

  addOperation,
  removeOperation,
} from '../../redux/actions';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { notes_2 } from '../../utils/notesDataArrays';
import NotesList from '../notesList/NotesList';

import './calculationWorks.scss';

const CalculationWorks = () => {
  const {
    operations,
    operationsLoadingStatus, 
    squaresValue,
    operationsResult
  } = useSelector(state => state);
  const dispatch = useDispatch();
  const {request} = useHttp();

  useEffect(() => {
    dispatch(operationsFetching());
    request("http://localhost:3001/operations")
    .then(data => dispatch(operationsFetched(data)))
    .catch(() => dispatch(operationsFetchedError()))
  }, [])

  if (operationsLoadingStatus === 'loading') {
    return <Spinner/>
  } else if (operationsLoadingStatus === 'error') {
    return <ErrorMessage/>
  }

  // Функция расчёта стоимости
  const onCalculatePrice = (e) => {
    if (e.target.checked) {
      dispatch(addOperation(e.target.name))
    } else {
      dispatch(removeOperation(e.target.name))
    }

  }
  // console.log(operations);


  // base operations:
  // 'dismantling',
  // 'stretch_plast_ceiling': ,
  // 'painting_ceiling':,
  // 'ceiling_putty':,
  // 'floor_screed':,
  // 'laying_laminate':,


  const renderItems = (arr) => {
    if (arr.length === 0) {
      return <div>Данных пока что нет...</div>
    }

    return arr.map(({name, count, unit, id}) => {
      return (
        <div 
          className="calculator__field_job"
          key={id}>
          <label htmlFor="Dismantling">{name} <span>{count}{unit}</span></label>
            <input
              onClick={onCalculatePrice}
              id={id} 
              type="checkbox" 
              name={id}/>
              {/* <span className="checkmark"></span> */}
        </div>
      )
    })
  }

  return (
    <div className="calculator__wrapper">
        {/* works */}
        <div className="main__calculator_top">
          <div className="main__calculator_description">
          Название необходимых работ:
          </div>
        </div>

      <div className="main__calculator_grid">
       {renderItems(operations)}
      </div>

      <NotesList notes_1={notes_2}/>
    </div>
  )
}
export default CalculationWorks;



//  const onCalculatePrice = (e) => {
//   if (e.target.checked) {
//     dispatch(addOperation(e.target.name))
//   } else {
//     dispatch(removeOperation(e.target.name))
//   }

// }