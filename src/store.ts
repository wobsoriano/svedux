import { configureStore, createSlice } from '@reduxjs/toolkit';

export interface CounterState {
	value: number;
}

const initialState: CounterState = {
	value: 0
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		}
	}
});

export const store = configureStore({
	reducer: {
		counter: counterSlice.reducer
	}
});

export const { increment, decrement } = counterSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
