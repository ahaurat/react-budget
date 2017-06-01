/* eslint-disable */
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from 'actions'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Foo actions', () => {
  it('creates GET_FOO_SUCCESS when GET_FOO was successful', done => {
    const store = mockStore({})
    return store.dispatch(actions.GET_FOO).then(res => {
      const { result } = res
      const expectedAction = {
        type: actions.GET_FOO_SUCCESS,
        result
      }

      expect(res).toEqual(expectedAction)
      done()
    })
  })
})
