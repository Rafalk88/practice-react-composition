import React from 'react'

const TableHeader = props => {
    return <div></div>
}

const TableBody = props => {
    const {items} = props
    const list = items.map((item, i) => <TableRow item={item} key={i} />)

    return <div>{ list }</div>
}

const TableRow = props => {
    const { item } = props
    return (
      <>
        <h3>{item.name}</h3>
        <p>Ilość: {item.quantity}</p>
        <p>Cena do zapłaty: {item.price * item.quantity} zł</p>
      </>
    )
}

const TableFooter = props => {
    return <div></div>
}

class Table extends React.Component {
  render() {
    const {data} = this.props

    return (
      <>
        <TableHeader />
        <TableBody items={data}>
        </TableBody>
        <TableFooter />
      </>
    )
  }
}

export default Table
