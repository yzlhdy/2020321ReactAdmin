import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// // import App from './App';
// import * as serviceWorker from './serviceWorker';

// // const h1 = <h1>hello  word</h1>

// ReactDOM.render(clock, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

/**
 * @description: React函数组件
 * @param {props} 组件传值 
 * @return: JSX语法
 */
function Clock(props) {
    return (
        <div >
            <h1>现在的时间是：{props.date.toLocaleTimeString()}</h1>
        </div>
    )
}

function run() {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.querySelector('#root')
    )
}
setInterval(run, 1000)
