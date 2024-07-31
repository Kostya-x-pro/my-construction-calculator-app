export const operationsFetching = () => {
  return {
    type: 'OPERATIONS_FETCHING'
  }
}

export const operationsFetched = (operations) => {
  return {
    type: 'OPERATIONS_FETCHED',
    payload: operations
  }
}

export const operationsFetchedError = () => {
  return {
    type: 'OPERATIONS_FETCHING_ERROR'
  }
}

export const addOperation = (term) => {
  return {
    type: 'ADD_OPERTION',
    payload: term
  }
}
export const removeOperation = (term) => {
  return {
    type: 'REMOVE_OPERTION',
    payload: term
  }
}





// export const addOperation = (term) => {
//   return {
//     type: 'ADD_OPERTION',
//     payload: term
//   }
// }
// export const removeOperation = (term) => {
//   return {
//     type: 'REMOVE_OPERTION',
//     payload: term
//   }
// }