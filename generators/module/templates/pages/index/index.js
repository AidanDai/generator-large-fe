import React from 'react';
import ReactDOM from 'react-dom';
import Index from 'index.page';

let mountNode = document.querySelector('#content');
let pageData = JSON.parse(document.querySelector('[name=pageData]').getAttribute('content'));

ReactDOM.render(
    <Index
        pageData={pageData}
    />,
    mountNode
);
