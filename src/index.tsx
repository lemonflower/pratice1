import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import {createRoot} from'react-dom/client';

/**
 * 17写法
 * ReactDOM.render(
    <Home/>,
  document.getElementById('root')
);
 */
/**18 */

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render( <Home/> );

