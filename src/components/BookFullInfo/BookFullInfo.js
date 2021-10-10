import React from 'react';
import './BookFullInfo.css';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { resetBookFullInfo } from '../../store/actions';


function BookFullInfo() {
    const dispatch = useDispatch();
    const bookFullInfo = useSelector((state) => state.bookFullInfo, shallowEqual);
    // console.log(bookFullInfo);
    const {img, categories, title, authors, description} = bookFullInfo;
    const categoriesToString = categories.join(' / ');
    const authorsToString = authors.join(', ');

    const handleBackBtnOnClick = () => {
        dispatch(resetBookFullInfo());
    };

    return (
        <>
            <div className="BackBtn">
                <button className="btn btn-outline-primary" onClick={handleBackBtnOnClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>Back to BookList
                </button>
            </div>
            <div className="BookInfo">
                <div className="BookImg"><img src={img} alt={title} /></div>
                <div className="Info">
                    <div className="Categories">{categoriesToString}</div>
                    <h2 className="Title">{title}</h2>
                    <div className="Authors">{authorsToString}</div>
                </div>
                <div className="Description">{description}</div>
            </div>
        </>
    )
}

export default BookFullInfo
