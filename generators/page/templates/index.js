/**
 * @file: some description for this file
 * @author: <%= author %>
 * @date: <%= date %>
 */

import React from 'react';
import ReactDOM from 'react-dom';
import <%= className %> from 'controllers/index';

import { getPagedata } from '../../../public/javascripts/utils'

const mountNode = getMountNode()
const pageData = getPagedata();

ReactDOM.render(
    <<%= className %>
        context={pageData.context}
    />,
    mountNode
);
