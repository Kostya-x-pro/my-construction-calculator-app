import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHttp } from '../../hooks/http.hook';

import { operationsFetching, operationsFetched, operationsFetchedError } from '../../redux/actions';

import './calculationWorks.scss';

const CalculationWorks = () => {
  const {operations, operationsLoadingStatus} = useSelector(state => state);
  const dispatch = useDispatch();
  const {request} = useHttp();

  useEffect(() => {
    dispatch(operationsFetching());
    request("http://localhost:3001/operations")
    .then(data => dispatch(operationsFetched(data)))
    .catch(() => dispatch(operationsFetchedError()))
  }, [])

  if (operationsLoadingStatus === 'loading') {
    return <div>Компронент спинера пока идёт загрузка</div>
  } else if (operationsLoadingStatus === 'error') {
    return <div>При загрузке данных произошла ошибка.</div>
  }

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




// import { useState, useEffect } from 'react';
// import { useHttp } from '../../hooks/http.hook';

// import './calculationWorks.scss';

// const CalculationWorks = ({totalArea}) => {
//   const [operations, setOperations] = useState([]);
//   const [typeWorks, setTypeWorks] = useState([]);
//   const [price, setTotalPrice] = useState(0);

//   const {request} = useHttp();

//   useEffect(() => {
//     request("http://localhost:3001/operations")
//     .then(data => setOperations(renderItems(data)))
//     .catch(error => console.log(error))
//   }, [])

//   const calcCoustWork = (typeWork) => {
//     switch(typeWork) {
//       case "dismantling":
//       case 'stretch_plast_ceiling': 
//       case 'painting_ceiling':
//       case 'ceiling_putty':
//       case 'floor_screed':
//       case 'laying_laminate':
//         setTotalPrice(totalArea * 20)
//         break
//       default: 
//       setTotalPrice(0)
//     }
//   }


//   const renderItems = (arr) => {
//     if (arr.length === 0) {
//       return <div>Данных пока что нет...</div>
//     }

//     return arr.map(item => {
//       // setTypeWorks(typeWorks => ([...typeWorks, [item.id, item.name, item.count]]))
//       return (
//         <div 
//           className="calculator__field_job"
//           key={item.id}>
//           <label htmlFor="Dismantling">{item.name} <span>{item.count}{item.unit}</span></label>
//             <input
//               onClick={() => calcCoustWork(item.id)} 
//               id={item.id} 
//               type="checkbox" 
//               name={item.id}/>
//               {/* <span className="checkmark"></span> */}
//         </div>
//       )
//     })

//   }

//   return (
//     <div className="calculator__wrapper">
//         {/* works */}
//         <div className="main__calculator_top">
//           <div className="main__calculator_description">
//           Название необходимых работ:
//           </div>
//         </div>

//       <div className="main__calculator_grid">
//        {operations}
//       </div>

//         <div className="main__calculator-notes">
//           <div className="notes__dots-wrapper">
//             <span></span>
//             <span></span>
//           </div>
//           <textarea name="calculator-notes" rows="3"></textarea>
//         </div>

//     </div>
//   )
// }
// export default CalculationWorks;