import React from 'react'
import TableRow from './TableRow'

const TableBody = props => {
  const {items} = props
  const list = items.map(item => <TableRow item={item} key={item.id} />)

  return <tbody>{list}</tbody>
}

export default TableBody