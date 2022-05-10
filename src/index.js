import React from 'react';
import ReactDOM from 'react-dom';
import Tasks from './components/Tasks';

const App = () => {
    return <div>
        <Tasks />
    </div>
}

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);