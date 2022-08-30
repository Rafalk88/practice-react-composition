import React from 'react'

const TableFooter = props => {
  const { price } = props
  return (
      <tfoot>
          <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Suma:</td>
              <td>{ price }</td>
          </tr>
      </tfoot>
  )
}

export default TableFooter