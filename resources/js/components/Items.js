import React from 'react'

const Items = ({items,loading}) =>{
    if(loading){
        return <h2>Loading .....</h2>
    }
    return(
        <ul className="list-group mb-4">
            {items.map(item => (
                <li key={item.id} className="list-group-item">
                    {item.name}
                </li>
            )

            )}

        </ul>
    )
}
export default Items;