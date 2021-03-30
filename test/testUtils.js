import {checkPropTypes} from "prop-types"
import {createStore, applyMiddleware} from "redux"
import rootReducer from "../src/reducers"

import ReduxThunk from "redux-thunk"


export const findByTestAttr = (wrapper,val) =>{
  return  wrapper.find(`[data-test='${val}']`)

}

export function checkProps(component, conformingProps){
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
}


export function storeFactory(initialState){
  const middlewares = [ReduxThunk]
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  )
}
