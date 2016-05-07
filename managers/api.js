import * as Axios from 'axios'

const SERVER_URL = 'http://82.130.26.6:8000/'
const MODULES_URL = 'modules/'
const ACTION_URL = 'action/'
const API_KEY = '48d3a8b27e3c4c30'

var get_modules = () => {
  return Axios.get(SERVER_URL + MODULES_URL, {
    headers:{"X-Api-Key": API_KEY}
  }).then((r) => { return r.data.map((m) => [m]);})
}

var run_action = (action) => {
  // console.log(action);
  action_path = action.replace('.', '/')
  path = SERVER_URL + ACTION_URL + action_path
  // console.log(path);
  return Axios.post(path, {}, {
    headers:{"X-Api-Key": API_KEY}
  }).then((r) => {
    // console.log(r);
    return r
  })
  .catch((r) => {
    // console.log(r);
  })
}

export {
  get_modules,
  run_action
}
