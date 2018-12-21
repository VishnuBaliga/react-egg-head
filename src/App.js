import React from 'react';
import ReactDOM from 'react-dom'
import './style.css'
import '@babel/polyfill'
import {hot} from 'react-hot-loader' 

const Warning = React.lazy( () => import('./warning'))

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

            {this.state.count > 3 ?
        <React.Suspense fallback={<p>Loading....</p>}>
                <Warning />
        </React.Suspense> : null
        }

            </div>
        )
    }
}

export default hot(module)(App)