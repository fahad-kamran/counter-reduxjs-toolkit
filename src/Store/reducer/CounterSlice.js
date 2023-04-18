// couterSlice reducer
import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
    name: 'COUNTER',
    initialState: {
        value: 0
    },
    reducers: {
        increament: state => {
            state.value += 1
        },
        decreament: state => {
            if (state.value !== 0) {
                state.value -= 1
            }
            else {
                alert('your counter is already 0')
            }
        }
    }
});

// Action creators are generated for each case reducer function

export const { increament, decreament } = counterSlice.actions;

export default counterSlice.reducer;