import React from 'react'

function Product(props) {
    const { name, price } = props.info
    return (
      <tr>
        <td>{ name }</td>
        <td>{ price }</td>
        <td><button disabled={false}>dodaj do koszyka</button></td>
        <td><button disabled={true}>usuń z koszyka</button></td>
      </tr>
    )
}

export default Product