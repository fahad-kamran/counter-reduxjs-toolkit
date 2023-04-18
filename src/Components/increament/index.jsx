import React from 'react';
import { useDispatch } from 'react-redux';
import { increament } from '../../Store/reducer/CounterSlice';
function Increament() {
    const dispatch = useDispatch();
    return (
        <button className='btn btn-success me-2' onClick={()=>dispatch(increament())}>Increament</button>
    )
}

export default Increament;