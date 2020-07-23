import '../types/index.js'
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

export function pageIncrement(page) {
  return {
    type: PAGE_INCREMENT,
    value: page++
  }
}

export function pageDecrement(page) {
  return {
    type: PAGE_DECREMENT
  }
}

export function isPageClickTrue() {
  return {
    type: IS_PAGE_CLICK_TRUE
  }
}

export function isPageClickFalse() {
  return {
    type: IS_PAGE_CLICK_FALSE
  }
}

export function typeChange(type) {
  return {
    type: TYPE_CHANGE,
    value: type
  }
}

export function isTypeClickTrue() {
  return {
    type: IS_TYPE_CLICK_TRUE
  }
}

export function isTypeClickFalse() {
  return {
    type: IS_TYPE_CLICK_FALSE
  }
}

export function inputChange(input) {
  return {
    type: INPUT_CHANGE,
    value: input
  }
}

export function isInputClickTrue() {
  return {
    type: IS_INPUT_CLICK_TRUE
  }
}

export function isInputClickFalse() {
  return {
    type: IS_INPUT_CLICK_FALSE
  }
}