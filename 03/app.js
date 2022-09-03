import React from 'react';
import ReactDOM from 'react-dom';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';

class App extends React.Component {
    state = {
        products: [],
        cart: [],
    }

    componentDidMount() {
        this.setState(() => {
            return {
                products: data
            }
        })
    }
    
    render() {
        const { products, cart } = this.state
        return (
            <section>
                <Category products={ products } />
                <Cart cart={ cart }/>
            </section>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);