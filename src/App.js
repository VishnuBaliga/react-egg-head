import React from 'react';
import ReactDOM from 'react-dom'
import './style.css'
import {hot} from 'react-hot-loader'


class App extends React.Component{

    state = {
        count : 0
    }

    render (){ 
        return (
            <div>
                <h1>Hello Baliga is using react !!!</h1> 
                <p>count: {this.state.count}</p>
                <button onClick={()=>this.setState(state => ({count: state.count + 1}))}>+</button>
                <button onClick={()=>this.setState(state => ({count: state.count - 1}))}>-</button>
            </div>
        )
    }
}

export default hot(module)(App)