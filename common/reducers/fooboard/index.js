import { GET_FOO_SUCCESS, GET_FOO_FAIL } from 'actions/fooboard'
import { LOCATION_CHANGE } from 'actions/common'

export const initialState = {
  foo: []
}

export function fooboard (state = initialState, action) {
  switch (action.type) {
    case GET_FOO_SUCCESS:
      return {
        ...state,
        foo: action.result
      }
    case GET_FOO_FAIL:
      return state
    case LOCATION_CHANGE: {
      if (action.payload.pathname !== '/') {
        return initialState
      }
      return state
    }
    default:
      return state
  }
}
