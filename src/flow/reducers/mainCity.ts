import { createActions, handleActions } from 'redux-actions';
const defaultState = { mainCity: null, error: null, isLoading: false };


export const { addMainCityStart, addMainCitySuccess, addMainCityFail } = createActions({
    ADD_MAIN_CITY_START: (data: any) => { return (data) },
    ADD_MAIN_CITY_SUCCESS: (data: any) => ({ data }),
    ADD_MAIN_CITY_FAIL: (error: Error) => ({ error }),
   
});

const addMainCityAction = {
    [addMainCityStart]: (state: any) => { return { ...state, error: null, isLoading: true, type: "addMainCityStart" } },
    [addMainCitySuccess]: (state: any, { payload: { data } }) => {
        return ({
            ...state,
            error: null,
            isLoading: false,
            mainCity: data,
            type: 'addMainCitySuccess'
        });
    },
    [addMainCityFail]: (state: any, { payload: { error } }) => ({ ...state, error, isLoading: false, type: "addMainCityFail" }),
};


export const reducer = handleActions(
    {
        ...addMainCityAction,
    },

    defaultState
);