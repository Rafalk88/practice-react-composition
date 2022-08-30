import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import TableFooter from './TableFooter'

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
