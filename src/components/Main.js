import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';

import { Search } from './Search.js';

export const Main = () => {
    return (
        <div>
            <Switch>
                <Route path='/search' component={Search} />
            </Switch>
        </div>
    )
}