import React from 'react';
import './SearchForm.css';
import { submit, change, changeClass, resetBookFullInfo } from '../../store/actions';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';


function SearchForm() {
    const dispatch = useDispatch();
    const queryParameters = useSelector((state) => state.queryParameters, shallowEqual);

    function getRequest(volume, subject, orderBy) {
        dispatch(changeClass());

        const apiKey = 'AIzaSyCkQZLH6tv0IN-lvMswOyma3yR4UmDMess';

        let apiUrl = new URL('https://www.googleapis.com/books/v1/volumes');
        const qParam = subject === 'all' ? volume : `${volume}+subject:${subject}`;
        apiUrl.searchParams.set('q', qParam);
        apiUrl.searchParams.set('orderBy', `${orderBy}`);
        apiUrl.searchParams.set('maxResults', `30`);
        apiUrl.searchParams.set('key', `${apiKey}`);
        console.log(apiUrl);

        const xhr = new XMLHttpRequest();
        xhr.open('GET', apiUrl);
    
        xhr.onload = evt => {
            if (xhr.status < 200 || xhr.status > 299) {
                const error = JSON.parse(xhr.response);
                console.log(error);
                return;
            }
    
            const data = JSON.parse(xhr.response);
            const {totalItems} = data;
            
            if (totalItems === 0) {
                dispatch(submit([], totalItems));
                return;
            }
            const {items} = data;
            dispatch(submit(items, totalItems));
        };
        
        xhr.onerror = evt => {
            console.log(evt);
        };
    
        xhr.onloadend = evt => {
            dispatch(changeClass());
        };
    
        xhr.send();
    };
    
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        dispatch(change(name, value));
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(resetBookFullInfo());
        const volume = evt.target.elements['volume'].value;
        const subject = evt.target.elements['subject'].value;
        const orderBy = evt.target.elements['orderBy'].value;
        
        let trimVolume = '';
        volume.split(' ').forEach((o) => {
            if (o !== ''){
              trimVolume += o + ' ';
            }
          });
        
        const trimVolume2 = trimVolume.substring(0, trimVolume.length - 1); 
        getRequest(trimVolume2, subject, orderBy);
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
