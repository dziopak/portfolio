import menusActionTypes from "./menus.types";

export const menusFetch = () => ({
    type: menusActionTypes.MENUS_FETCH
});
  
export const menusDidFetch = menus => ({
    type: menusActionTypes.MENUS_DID_FETCH,
    payload: menus
});
  
export const menusFetchFail = errorMsg => ({
    type: menusActionTypes.MENUS_FETCH_FAIL,
    payload: errorMsg
});