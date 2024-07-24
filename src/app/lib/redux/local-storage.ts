import type { RootState } from "lib/redux/store";

export const loadStateFromLocalStorage = () => {
  try {
    const stringifiedState = localStorage.getItem("");
    if (!stringifiedState) return undefined;
    return JSON.parse(stringifiedState);
  } catch (e) {
    return undefined;
  }
};

export const saveStateToLocalStorage = (state: RootState) => {
  try {
    const stringifiedState = JSON.stringify(state);
    localStorage.setItem("", stringifiedState);
  } catch (e) {
  }
};

export const getHasUsedAppBefore = () => Boolean(loadStateFromLocalStorage());
