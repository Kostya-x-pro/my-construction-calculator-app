const initialState = {
  squares: [],
  squaresLoadingStatus: 'idle',
  operations: [],
  operationsLoadingStatus: 'idle',
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
    default: return state 
  }
}

export default reducer;