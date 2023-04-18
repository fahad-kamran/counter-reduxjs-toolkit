import React from 'react';
import { useDispatch } from 'react-redux';
import { decreament } from '../../Store/reducer/CounterSlice';
function Decreament() {
    const dispatch = useDispatch();
    return (
        <button className='btn btn-danger' onClick={() => dispatch(decreament())}>Decreament</button>
    )
}

export default Decreament;