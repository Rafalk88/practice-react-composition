import React from 'react'

function Cart(props) {
    return (
        <table>
            <thead>
                <tr>
                    <td><b>Cart</b></td>
                </tr>
            </thead>
            <tbody>{ props.children }</tbody>
        </table>  
    )
}

export default Cart;