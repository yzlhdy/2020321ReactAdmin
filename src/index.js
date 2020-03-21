import React from 'react';
import ReactDOM from 'react-dom';
// import { Children } from 'react';
// import './index.css';
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
// let styleDome = {
//     width: '500px',
//     background: 'green'
// }
// let element = (
//     <div>
//         <h1 style={styleDome}>hello world</h1>
//     </div>
// )

class ParentCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            childrendata: null
        }
    }

    render() {
        return (
            <div>
                <h1>子传递给父组件的参数：{this.state.childrendata}</h1>
                <Childre handelChang={this.handelChang} />
            </div>
        )
    }

    handelChang = (data) => {
        this.setState({
            childrendata: data
        })
    }

}

/**
 * @description: 子组件通过调用父组件的函数 实现子传父组件
 * @param {type} 
 * @return: 
 */
class Childre extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mag: 'hello world'
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handelclick}>传递组件内容</button>
                <button></button>
            </div>
        )
    }

    handelclick = () => {
        console.log(this.props.handelChang(this.state.mag));

    }

}


ReactDOM.render(
    <ParentCom />,
    document.querySelector('#root')
)
