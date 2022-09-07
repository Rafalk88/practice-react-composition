import React from 'react'
import ReactDOM from 'react-dom'

import Category from './Category'
import Cart from './Cart'
import Product from './Product'

import data from './data.json'

class App extends React.Component {
    state = {
        cart: []
    }

    addItem = id => {
        const product = data.find(item => item.id === id)
        if(product) {
            this.setState(state => {
                return {
                    cart: [...state.cart, product]
                }
            })
        }
    }

    removeItem = id => {
        this.setState(state => {
            return {
                cart: state.cart.filter(item => item.id !== id)
            }
        })
    }

    render() {
        const { cart } = this.state

        return (
            <section>
                <Category>
                    {data.map(item => <Product key={item.id} data={item} isCategory={false} isCart={true} addItem={this.addItem} /> )}
                </Category>
                <Cart>
                    {cart.map(item => <Product key={item.id} data={item} isCategory={true} isCart={false} removeItem={this.removeItem} /> )}
                </Cart>
            </section>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);