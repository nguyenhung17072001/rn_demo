import { createActions, handleActions } from 'redux-actions';
const defaultState = {mainCity: null, cityList: [], error: null, isLoading: false };


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

export const { addCityStart, addCitySuccess, addCityFail } = createActions({
    ADD_CITY_START: (data: any) => { return (data) },
    ADD_CITY_SUCCESS: (data: any) => ({ data }),
    ADD_CITY_FAIL: (error: Error) => ({ error }),
   
});

const addCityAction = {
    [addCityStart]: (state: any) => { return { ...state, error: null, isLoading: true, type: "addCityStart" } },
    [addCitySuccess]: (state: any, { payload: { data } }) => {
        const { cityList } = state;
        const updatedCityList = [...cityList, data];
        return ({
            ...state,
            error: null,
            isLoading: false,
            cityList: updatedCityList,
            type: 'addCitySuccess'
        });
    },
    [addCityFail]: (state: any, { payload: { error } }) => ({ ...state, error, isLoading: false, type: "addCityFail" }),
};



/* export const { updateStart, addCitySuccess, addCityFail } = createActions({
    ADD_CITY_START: (data: any) => { return (data) },
    ADD_CITY_SUCCESS: (data: any) => ({ data }),
    ADD_CITY_FAIL: (error: Error) => ({ error }),
   
});

const addCityAction = {
    [addCityStart]: (state: any) => { return { ...state, error: null, isLoading: true, type: "addCityStart" } },
    [addCitySuccess]: (state: any, { payload: { data } }) => {
        const { cityList } = state;
        const updatedCityList = [...cityList, data];
        return ({
            ...state,
            error: null,
            isLoading: false,
            cityList: updatedCityList,
            type: 'addCitySuccess'
        });
    },
    [addCityFail]: (state: any, { payload: { error } }) => ({ ...state, error, isLoading: false, type: "addCityFail" }),
}; */



export const reducer = handleActions(
    {
        ...addMainCityAction,
        ...addCityAction,
    },

    defaultState
);