import {get} from './utils'

export async function getFooAPI () {
  return get('https://jsonplaceholder.typicode.com/posts?userId=1')
}
