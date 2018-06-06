import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';

import { Search } from './Search.js';
import { Home } from './Home.js';
import { Movie } from './Movie.js';

export const Main = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/search' component={Search} />
                <Route path='/movie' component={Movie} />
            </Switch>
        </div>
    )
}