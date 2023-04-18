import React from 'react';
import { useSelector } from 'react-redux'

function Display() {
    const count = useSelector(state => state.counter.value);
    return (
        <header className='py-4 text-center'>
            <h1>{count}</h1>
        </header>
    )
}

export default Display;