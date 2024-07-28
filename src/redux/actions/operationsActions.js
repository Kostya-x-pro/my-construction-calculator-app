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