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
    const { price } = props
    return <div>Suma: { price } zł</div>
}

class Table extends React.Component {
  render () {
    const { data } = this.props
    const sumPrices = data.reduce((obj1,obj2) => (
        {
            price: (obj1.price * obj1.quantity) + (obj2.price * obj2.quantity),
            quantity: obj1.quantity
        }
    ))

    return (
      <>
        <TableHeader />
        <TableBody items={data}>
        </TableBody>
        <TableFooter price={sumPrices.price} />
      </>
    )
  }
}

export default Table
