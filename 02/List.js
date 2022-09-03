import React from 'react'

import ListItem from './ListItem'

function List(props) {
    const { items } = props
    const list = items.map ((name, i) => <ListItem name={name} key={i} />)

    return (
        <ul>{ list }</ul>
    )
}

export default List