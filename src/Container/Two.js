import React from 'react'
import { useContext } from 'react'
import { AppContext } from './Appcontext';
function Two() {
    const {data}=useContext(AppContext);
    return (
        <div>
            <h2>page 2 {data}</h2>
        </div>
    )
}

export default  Two
