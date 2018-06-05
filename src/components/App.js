import React from 'react';
import ReactDOM from 'react-dom';

import {Header} from './Header.js';
import {Main} from './Main.js';

const USERS = [ // не очень понятно как пробрасывать информацию о пользователе
    {
        login: "John Doe",
        img: "https://info-hit.ru/upload/resize_cache/iblock/695/50_50_2/khokhlov_sergey.jpg"
    }
];

export const App = () => {
    return (
        <div>
            <Header 
                user={USERS[0]}
            />
            <Main />
        </div>
    )
}