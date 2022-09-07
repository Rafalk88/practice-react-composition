import React from 'react';

class List extends React.Component {
    render() {
        const {items} = this.props
        return <ul>
            {items.map(({id, name, size, data}) => <li key={id}>{name}: {data} ({size} MB)</li>)}
        </ul>
    }
}

export default List;