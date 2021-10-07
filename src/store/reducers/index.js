import { SUBMIT, CHANGE } from '../actions'


export const initialState = {
    queryResponse: {
        totalItems: 0,
        items: [],
    },
    queryParameters: {
        volume: '',
        subject: 'all',
        orderBy: 'relevance',
    },
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT:
            return reduceSubmit(state, action);
        case CHANGE:
            return reduceChange(state, action);
        default:
            return state;
    }
};

const reduceSubmit = (state, action) => {
    // const {queryResponse, queryParameters} = state;
    // const {items} = queryResponse
    // const newBook = {id: `volume: ${queryParameters.volume}, subject: ${queryParameters.subject}, orderBy: ${queryParameters.orderBy}`};

    // return {
    //     ...state,
    //     queryResponse: {...queryResponse, items: [...items, {...newBook}]}
    // }
};

const reduceChange = (state, action) => {
    const { queryParameters } = state;
    const { payload: { name, value } } = action;

    return {
        ...state,
        queryParameters: { ...queryParameters, [name]: value },
    }
};
