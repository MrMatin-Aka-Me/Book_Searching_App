import React from 'react';
import './BookList.css';
import { shallowEqual, useSelector } from 'react-redux';
import BookCard from '../BookCard/BookCard';

function BookList() {
    const queryResponse = useSelector((state) => state.queryResponse, shallowEqual);
    const {items} = queryResponse;
    const {totalItems} = queryResponse;
    return (
        <div>
            <span>Found {totalItems} results</span>
            {items.map(o => <BookCard key={o.id} bookCard={o}/>)}
        </div>
    )
}

export default BookList
