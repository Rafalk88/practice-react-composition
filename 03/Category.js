import React from 'react'

function Category(props) {
    return (
        <table>
            <thead>
                <tr>
                    <td><b>Category</b></td>
                </tr>
            </thead>
            <tbody>{ props.children }</tbody>
        </table>  
    )
}

export default Category;