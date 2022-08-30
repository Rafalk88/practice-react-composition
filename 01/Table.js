import React from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <td>Lp.</td>
                <td>Nazwa przedmiotu</td>
                <td>Cena jedn. [zł]</td>
                <td>Ilość</td>
                <td>Cena do zapłaty [zł]</td>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const {items} = props
    const list = items.map((item, i) => <TableRow item={item} key={i} />)

    return <tbody>{list}</tbody>
}

const TableRow = props => {
    const { item } = props
    return (
      <tr>
        <td>{ item.id }</td>
        <td>{ item.name }</td>
        <td>{ item.price }</td>
        <td>{ item.quantity }</td>
        <td>{ item.price * item.quantity }</td>
      </tr>
    )
}

const TableFooter = props => {
    const { price } = props
    return (
        <tfoot>
            <tr>
                <td></td>
                <td>Suma:</td>
                <td></td>
                <td></td>
                <td>{ price }</td>
            </tr>
        </tfoot>
    )
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
      <table>
        <TableHeader />
        <TableBody items={data}>
        </TableBody>
        <TableFooter price={sumPrices.price} />
      </table>
    )
  }
}

export default Table
