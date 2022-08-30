import React from 'react'

const TableHeader = props => {
    return <div></div>
}

const TableBody = props => {
    return <div></div>
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
        <TableBody>
          <TableRow />
          <TableRow />
          <TableRow />
        </TableBody>
        <TableFooter />
      </>
    )
  }
}

export default Table
