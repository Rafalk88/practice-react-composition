import React from 'react'

const TableHeader = props => {
    return <div></div>
}

const TableBody = props => {
    const {items} = props
    const list = items.map((item, i) => <TableRow item={item} key={i} />)

    return <ul>{ list }</ul>
}

const TableRow = props => {
    return <div></div>
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
