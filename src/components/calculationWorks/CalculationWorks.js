import { useState, useEffect } from 'react';
import { useHttp } from '../../hooks/http.hook';

import './calculationWorks.scss';

const CalculationWorks = () => {
  const [operations, setOperations] = useState([]);
  const {request} = useHttp();

  useEffect(() => {
    request("http://localhost:3001/operations")
    .then(data => setOperations(renderItems(data)))
    .catch(error => console.log(error))
  }, [])

  const renderItems = (arr) => {
    if (arr.length === 0) {
      return <div>Данных пока что нет...</div>
    }

    return arr.map(item => {
      return (
        <div 
          className="calculator__field_job"
          key={item.id}>
          <label htmlFor="Dismantling">{item.name} <span>{item.count}{item.unit}</span></label>
            <input 
              id={item.id} 
              type="checkbox" 
              name={item.id}/>
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
       {operations}
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