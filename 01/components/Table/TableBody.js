import React from 'react'
import TableRow from './TableRow'

const TableBody = props => {
  const {items} = props
  const list = items.map((item, i) => <TableRow item={item} key={i} />)

  return <tbody>{list}</tbody>
}

export default TableBody