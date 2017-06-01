/* eslint-disable */
import {fooboard as reducer, initialState} from 'reducers/fooboard'
import * as actions from 'actions'


const GET_FOO_SUCCESS = {
    type: actions.GET_FOO_SUCCESS,
    result: ["hello"]
}

const GET_FOO_FAIL = {
    type: actions.GET_FOO_FAIL
}

const LOCATION_CHANGE = {
    type: actions.LOCATION_CHANGE,
    payload: {
        pathname: '/'
    }
}

describe('FOOBOARD REDUCER', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {x:'string'})).toEqual(initialState)
    })

    it('should handle GET_FOO_SUCCESS', () => {
        expect(reducer(initialState, GET_FOO_SUCCESS)).toEqual({
            ...initialState,
            statistics: ["hello"]
        })
    })

    it('should handle GET_FOO_FAIL', () => {
        expect(reducer(initialState, GET_FOO_FAIL)).toEqual(initialState)
    })

    it('should handle LOCATION_CHANGE to own path', () => {
        let customState = {
            ...initialState,
            lol: 3
        }
        expect(reducer(customState, LOCATION_CHANGE)).toEqual(customState)
    })
})
