import React from 'react'
import Product from './Product'

function Category(props) {
    const { products } = props
    const list = products.map(({id, ...rest}) => {
        return (
            <Product key={id} info={{...rest}}/>
        )
    })
    return (
        <table>
            <thead>
                <tr>
                    <td><b>Category</b></td>
                </tr>
            </thead>
            <tbody>{ list }</tbody>
        </table>  
    )
}

export default Category;