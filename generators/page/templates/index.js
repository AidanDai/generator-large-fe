/**
 * @file: 
 * @author: <%= author %>
 * @date: <%= date %>
 */

import React from 'react';
import ReactDOM from 'react-dom';
import <%= className %> from 'index.page';

let mountNode = document.querySelector('#content');
let pageData = JSON.parse(document.querySelector('[name=pageData]').getAttribute('content'));

ReactDOM.render(
    <<%= className %>
        pageData={pageData}
    />,
    mountNode
);
