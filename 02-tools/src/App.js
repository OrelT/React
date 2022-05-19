import React from 'react';
import {render} from 'react-dom';

const App = () => {

    return React.createElement(
        "h1",
        {class: "goulagwe"},
        "Yosh"
    )
}

render(React.createElement(App),document.getElementById('root'));