// ACTION / TYPES
import * as types from "./types";

// SHOW TOAST
export function showToastAction(toast) {
  return { type: types.SHOW_TOAST, payload: toast };
}

// HIDE TOAST
export function hideToastAction() {
  return { type: types.HIDE_TOAST };
}
