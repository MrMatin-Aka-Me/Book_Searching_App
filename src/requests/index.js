const apiKey = 'AIzaSyCkQZLH6tv0IN-lvMswOyma3yR4UmDMess';

export const getRequest = (volume, subject, orderBy) => {
    let apiUrl = new URL('https://www.googleapis.com/books/v1/volumes');
    apiUrl.searchParams.set('q', `${volume}subject%3A${subject}`);
    apiUrl.searchParams.set('orderBy', `${orderBy}`);
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
            return {items: [], totalItems};
        }
        const {items} = data;
        console.log(data, items, totalItems);
        return {items: [], totalItems};
    };
    
    xhr.onerror = evt => {
        console.log(evt);
    };

    xhr.onloadend = evt => {
        
    };

    xhr.send();
    // return xhr.onload();
};