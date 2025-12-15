import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
    heading: string;
    paragraph: string;
    modifiedAt: string;
}

const initialState: CounterState = {
    value: 0,
    heading: '',
    paragraph: '',
    modifiedAt: '',
};

export const updateCountAsync = createAsyncThunk(
    'counter/updateCount',
    async (newCount: number) => {
        const response = await fetch('/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ newCount }),
        });
        return await response.json();
    }
);

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        reset: (state) => {
            state.value = 0;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(updateCountAsync.fulfilled, (state, action) => {
            state.value = action.payload.count;
            state.modifiedAt = action.payload.modifiedAt;
            // Ensure consistency if server modifies them, though currently constants
            state.heading = action.payload.heading;
            state.paragraph = action.payload.paragraph;
        });
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;

export default counterSlice.reducer;
