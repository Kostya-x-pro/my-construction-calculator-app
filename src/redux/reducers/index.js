const initialState = {
  squares: [],
  squaresLoadingStatus: 'idle',
  squaresValue: {},

  operations: [],
  operationsLoadingStatus: 'idle',

  operationsResult: 0,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SQUARES_FETCHING':
      return {
        ...state,
        squaresLoadingStatus: 'loading'
      }
    case 'SQUARES_FETCHED': 
      return {
        ...state,
        squares: action.payload,
        squaresLoadingStatus: 'idle'
      }
    case 'SQUARES_FETCHING_ERROR':
      return {
        ...state,
        squaresLoadingStatus: 'error'
      }
    case 'SETSQUARESVALUES':
      return {
        ...state,
        squaresValue: {
          ...state.squaresValue,
          [action.payload.name]: +action.payload.value,
        }
      }

    case 'OPERATIONS_FETCHING':
      return {
        ...state,
        operationsLoadingStatus: 'idle'
      } 
    case 'OPERATIONS_FETCHED': 
      return {
        ...state,
        operations: action.payload,
        operationsLoadingStatus: 'idle'
      }
    case 'OPERATIONS_FETCHING_ERROR': {
      return {
        ...state,
        operationsLoadingStatus: 'error'
      }
    }

    case 'ADD_OPERTION': {
      const arrAllSquares = Object.values(state.squaresValue).filter(item  => item > 0);
      if (arrAllSquares.length === 0) {
        return state
      }
      const totalSumArea = arrAllSquares.reduce((acc, cur) => acc + cur);
      const selectedWork = state.operations.filter(item => item.id === action.payload)

      return {
        ...state,
        operationsResult: state.operationsResult + (totalSumArea * +selectedWork[0].count)
      }
    }

    case 'REMOVE_OPERTION': {
      const arrAllSquares = Object.values(state.squaresValue).filter(item  => item > 0);
      if (arrAllSquares.length === 0) {
        return state
      }
      const totalSumArea = arrAllSquares.reduce((acc, cur) => acc + cur);
      const selectedWork = state.operations.filter(item => item.id === action.payload)

      return {
        ...state,
        operationsResult: state.operationsResult - (totalSumArea * +selectedWork[0].count)
      }
    }


    default: return state 
  }
}

export default reducer;







// case 'ADD_OPERTION': {
//   const arrAllSquares = Object.values(state.squaresValue).filter(item  => item > 0);
//   if (arrAllSquares.length === 0) {
//     return state
//   }
//   const totalSumArea = arrAllSquares.reduce((acc, cur) => acc + cur);
//   const selectedWork = state.operations.filter(item => item.id === action.payload)

//   return {
//     ...state,
//     operationsResult: state.operationsResult + (totalSumArea * +selectedWork[0].count)
//   }
// }

// case 'REMOVE_OPERTION': {
//   const arrAllSquares = Object.values(state.squaresValue).filter(item  => item > 0);
//   if (arrAllSquares.length === 0) {
//     return state
//   }
//   const totalSumArea = arrAllSquares.reduce((acc, cur) => acc + cur);
//   const selectedWork = state.operations.filter(item => item.id === action.payload)

//   return {
//     ...state,
//     operationsResult: state.operationsResult - (totalSumArea * +selectedWork[0].count)
//   }
// }