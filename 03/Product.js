import React from 'react'

function Product(props) {
    const { id, name, price } = props.data
    const { addItem, removeItem, isCategory, isCart } = props

    return (
      <tr>
        <td>{ name }</td>
        <td>{ price }</td>
        <td><button disabled={isCategory} onClick={() => addItem(id)}>dodaj do koszyka</button></td>
        <td><button disabled={isCart} onClick={() => removeItem(id)}>usuń z koszyka</button></td>
      </tr>
    )
}

export default Product