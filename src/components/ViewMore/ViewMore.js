import React from 'react';
import './ViewMore.css';
import { submit, changeClass } from '../../store/actions';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

function ViewMore() {
    const dispatch = useDispatch();
    const queryResponse = useSelector((state) => state.queryResponse, shallowEqual);
    const queryParameters = useSelector((state) => state.queryParameters, shallowEqual);
    const classNameState = useSelector((state) => state.classNameState, shallowEqual);
    
    const {volume, subject, orderBy} = queryParameters;
    const {totalItems} = queryResponse;

    const items = [];

    for (const iterator of queryResponse.items) {
        items.push(iterator);
    }
    
    const startIndex = items.length;

    let viewBtnClassName = (totalItems === 0 || items.length >= totalItems) ? 'btnDisplayNone' : 'btnDisplayBlock'; 
    
    let trimVolume = '';
        volume.split(' ').forEach((o) => {
            if (o !== ''){
              trimVolume += o + ' ';
            }
          });

    function getMoreRequest(volume, subject, orderBy, startIndex) {
        dispatch(changeClass());
        console.log(startIndex);
        const apiKey = '';
        let apiUrl = new URL('https://www.googleapis.com/books/v1/volumes');
        apiUrl.searchParams.set('q', `${volume}subject%3A${subject}`);
        apiUrl.searchParams.set('orderBy', `${orderBy}`);
        apiUrl.searchParams.set('startIndex', `${startIndex}`);
        apiUrl.searchParams.set('maxResults', `30`);
        apiUrl.searchParams.set('key', `${apiKey}`);

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
                console.log(data, totalItems);
                dispatch(submit([], totalItems));
                return;
            }

            const nextItems = data.items;
            for (const iterator of nextItems) {
                items.push(iterator);
            }
            // console.log(nextItems);
            // console.log(data, totalItems);
            dispatch(submit(items, totalItems));
        };
        
        xhr.onerror = evt => {
            console.log(evt);
        };
    
        xhr.onloadend = evt => {
            dispatch(changeClass());
            console.log('onloadend');
        };

        xhr.onprogress = evt => {
            console.log('onProgress');
        };
    
        xhr.send();
    }
    
    const handleClick = () => { 
        getMoreRequest(trimVolume, subject, orderBy, startIndex);
    }

    if (classNameState === 'DisplayNone') {

    }
    return (
        <span className={viewBtnClassName}>
            {classNameState === 'DisplayNone' 
            ? 
            <button className="btn btn-outline-primary" onClick={handleClick}>View more</button> 
            : 
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
        </span>
    )
}

export default ViewMore
