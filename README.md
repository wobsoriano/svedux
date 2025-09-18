# svedux

[![npm (tag)](https://img.shields.io/npm/v/svedux?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/svedux) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/svedux?style=flat&colorA=000000&colorB=000000) ![NPM](https://img.shields.io/npm/l/svedux?style=flat&colorA=000000&colorB=000000)

Redux wrapper powered by Svelte Runes.

## Installation

```sh
npm install @reduxjs/toolkit svedux
```

## Usage

1. Create a store

```ts
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

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

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
```

2. Wrap your main App with the `<Provider>` component

```svelte
<script lang="ts">
	import { Provider } from 'svedux';
	import { store } from '../store.js';
</script>

<Provider {store}>
	<App />
</Provider>
```

3. Use the helpers in your components

```svelte
<script lang="ts">
	import { useDispatch, useSelector } from 'svedux';
	import type { RootState } from '../store.js';
	import { increment } from '../store.js';

	const count = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();
</script>

<button onclick={() => dispatch(increment())}>
	Clicks: {count.current}
</button>
```

## License

MIT
