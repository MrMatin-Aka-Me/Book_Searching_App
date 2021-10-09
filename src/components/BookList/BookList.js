import React from 'react';
import './BookList.css';
import { shallowEqual, useSelector } from 'react-redux';
import BookCard from '../BookCard/BookCard';

function BookList() {
    const queryResponse = useSelector((state) => state.queryResponse, shallowEqual);
    const classNameState = useSelector((state) => state.classNameState, shallowEqual);
    const { items } = queryResponse;
    const { totalItems } = queryResponse;
    console.log(items);
    return (
        <div className="Wrapper">
            <div className="Wrapper2">
                <span className="TotalItems">Found {totalItems} results</span>
                <div className={classNameState}>
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            </div>
            <div className="BookList">
                {items.map(o => <BookCard key={o.id + Math.random()} book={o} />)}
            </div>
        </div>
    )
}

export default BookList
