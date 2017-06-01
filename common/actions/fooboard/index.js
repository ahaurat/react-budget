import { getFooAPI } from 'api/FooSvc'
import { resultOK } from 'api/utils'

// define action types
export const GET_FOO_SUCCESS = 'GET_FOO_SUCCESS'
export const GET_FOO_FAIL = 'GET_FOO_FAIL'

export const GET_FOO = async () => {
  let result = await getFooAPI()
  if (!resultOK(result)) {
    return { type: GET_FOO_FAIL, error: result.data }
  }
  return { type: GET_FOO_SUCCESS, result: result.data }
}
