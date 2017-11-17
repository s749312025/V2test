import * as types from './actionsTypes'

import {api, Request} from '../../config/api'

export const getLatest = (rr) => {
  let response = [{content: 'sas'},{content: 'sas'},{content: 'sas'},{content: 'sas'},{content: 'sas'},{content: 'sas'}]
  return {
    type: types.GETLATEST,
    data: rr
  }
}