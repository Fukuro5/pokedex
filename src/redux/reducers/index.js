import '../types/index.js'
import { combineReducers } from 'redux'
import { PAGE_INCREMENT,
         PAGE_DECREMENT, 
         IS_PAGE_CLICK_TRUE, 
         IS_PAGE_CLICK_FALSE, 
         TYPE_CHANGE, 
         IS_TYPE_CLICK_TRUE,
         IS_TYPE_CLICK_FALSE,
         INPUT_CHANGE,
         IS_INPUT_CLICK_TRUE,
         IS_INPUT_CLICK_FALSE
        } from '../types/index.js'

function pageReducer(state = 1, action) {
  switch(action.type) {
    case PAGE_INCREMENT: return state + 1

    case PAGE_DECREMENT: return state - 1

    default: return state
  }
}

function isPageClickReducer(state = false, action) {
  switch(action.type) {
    case IS_PAGE_CLICK_TRUE: {
      state = true
      return state
    }

    case IS_PAGE_CLICK_FALSE: {
      state = false
      return state
    }

    default: return state
  }
}

function isTypeClickReducer(state = false, action) {
  switch(action.type) {
    case IS_TYPE_CLICK_TRUE: {
      state = true
      return state
    }

    case IS_TYPE_CLICK_FALSE: {
      state = false
      return state
    }

    default: return state
  }
}

function typeReducer(state = '', action) {
  switch(action.type) {
    case TYPE_CHANGE: {
      state = action.value
      return state
    }

    default: return state
  }
}

function inputReducer(state = null, action) {
  switch(action.type) {
    case INPUT_CHANGE: {
      state = action.value
      return state
    }

    default: return state
  }
}

function isInputClickReducer(state = false, action) {
  switch(action.type) {
    case IS_INPUT_CLICK_TRUE: {
      state = true
      return state
    }
    case IS_INPUT_CLICK_FALSE: {
      state = false
      return state
    }

    default: return state
  }
}

export const reducer = combineReducers({
  page: pageReducer,
  isPageClick: isPageClickReducer,
  type: typeReducer,
  isTypeClick: isTypeClickReducer,
  input: inputReducer,
  isInputClick: isInputClickReducer
})