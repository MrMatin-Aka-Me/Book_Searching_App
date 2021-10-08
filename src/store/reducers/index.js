import { SUBMIT, CHANGE, CHANGE_CLASS } from '../actions'


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
    classNameState: 'DisplayNone',
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT:
            return reduceSubmit(state, action);
        case CHANGE:
            return reduceChange(state, action);
        case CHANGE_CLASS:
            return reduceChangeClass(state, action);
        default:
            return state;
    }
};

const reduceSubmit = (state, action) => {
    const { queryResponse } = state;
    const { payload: { items, totalItems } } = action;
    // const newBook = {id: `totalItems: ${totalItems}, items2: ${items}`};

    return {
        ...state,
        queryResponse: { ...queryResponse, totalItems: totalItems, items: items }
    }
};

const reduceChange = (state, action) => {
    const { queryParameters } = state;
    const { payload: { name, value } } = action;

    return {
        ...state,
        queryParameters: { ...queryParameters, [name]: value },
    }
};

const reduceChangeClass = (state, action) => {
    const { classNameState } = state;
    const className = classNameState === 'DisplayNone' ? 'Loader' : 'DisplayNone';

    return {
        ...state,
        classNameState: className,
    }
};