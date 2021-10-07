import React from 'react';
import './SearchForm.css';
import { submit, change } from '../../store/actions';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

function SearchForm() {
    const dispatch = useDispatch();
    const queryParameters = useSelector((state) => state.queryParameters, shallowEqual);
    
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        // console.log(name, value)
        dispatch(change(name, value));
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(submit());
    };

    return (
        <form className="Search-form" onSubmit={handleSubmit}>

            <div className="Form-row input-group">
                <input 
                    type="text" 
                    className="form-control search-input" 
                    name="volume" 
                    required
                    onChange={handleChange}
                    value={queryParameters.volume}
                    placeholder="type here"></input>

                <button type="submit" className="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </button>
            </div>

            <div className="Form-row input-group">
                <label htmlFor="categories">Categories</label>
                <select 
                    onChange={handleChange} 
                    id="categories" 
                    className="form-select categories-select" 
                    name="subject" 
                    value={queryParameters.subject}>
                        <option value="all">all</option>
                        <option value="art">art</option>
                        <option value="biography">biography</option>
                        <option value="computers">computers</option>
                        <option value="history">history</option>
                        <option value="medical">medical</option>
                        <option value="poetry">poetry</option>
                </select>
                <label htmlFor="sorting">Sorting by</label>
                <select 
                    onChange={handleChange} 
                    id="sorting" 
                    className="form-select sorting-select" 
                    name="orderBy" 
                    value={queryParameters.orderBy}>
                        <option value="relevance">relevance</option>
                        <option value="newest">newest</option>
                </select>
            </div>
            
        </form>
    )
}

export default SearchForm
