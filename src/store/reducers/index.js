import { SUBMIT, CHANGE, CHANGE_CLASS, CHANGE_BOOK_FULL_INFO, RESET_BOOK_FULL_INFO } from '../actions'

const empty = {
    img: '',
    categories: [],
    title: '',
    authors: [],
    description: '',
    opened: false,
};

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
    bookFullInfo: empty,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT:
            return reduceSubmit(state, action);
        case CHANGE:
            return reduceChange(state, action);
        case CHANGE_CLASS:
            return reduceChangeClass(state, action);
        case CHANGE_BOOK_FULL_INFO:
            return reduceBookFullInfo(state, action);
        case RESET_BOOK_FULL_INFO:
            return reduceResetBookFullInfo(state, action);
        default:
            return state;
    }
};

const reduceSubmit = (state, action) => {
    const { queryResponse } = state;
    const { payload: { items, totalItems } } = action;

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

const reduceBookFullInfo = (state, action) => {
    const { bookFullInfo } = state;
    const { payload: { img, categories, title, authors, description, opened } } = action;
    console.log(img, categories, title, authors, description, opened);
    return {
        ...state,
        bookFullInfo: { ...bookFullInfo, img, categories, title, authors, description, opened },
    }
};

const reduceResetBookFullInfo = (state, action) => {

    return {
        ...state,
        bookFullInfo: empty,
    }
};
