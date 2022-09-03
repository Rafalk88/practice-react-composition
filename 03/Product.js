import React from 'react'

function Product(props) {
    const { name, price } = props.info
    return (
      <tr>
        <td>{ name }</td>
        <td>{ price }</td>
        <td><input type="submit" value="dodaj do koszyka" disabled={false} /></td>
        <td><input type="submit" value="usuń z koszyka" disabled={true} /></td>
      </tr>
    )
}

export default Product