import React from 'react'

const TableRow = props => {
  const { item } = props
  const { id, name, price, quantity } = item
  return (
    <tr>
      <td>{ id }</td>
      <td>{ name }</td>
      <td>{ price }</td>
      <td>{ quantity }</td>
      <td>{ price * quantity }</td>
    </tr>
  )
}

export default TableRow