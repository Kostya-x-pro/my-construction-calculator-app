export const squaresFetching = () => {
  return {
    type: 'SQUARES_FETCHING'
  }
}

export const squaresFetched = (squares) => {
  return {
    type: 'SQUARES_FETCHED',
    payload: squares
  }
}

export const squaresFetchedError = () => {
  return {
    type: 'SQUARES_FETCHING_ERROR'
  }
}

export const setSquaresValues = (name, value) => {
  return {
    type: 'SETSQUARESVALUES',
    payload: {
      name: name,
      value: value,
      // error: value < 0 ? 'error' : ''
    }
  }
}