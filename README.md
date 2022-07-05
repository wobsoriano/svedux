# svedux

[![npm (tag)](https://img.shields.io/npm/v/svedux?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/svedux) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/svedux?style=flat&colorA=000000&colorB=000000) ![NPM](https://img.shields.io/npm/l/svedux?style=flat&colorA=000000&colorB=000000)

This middleware allows you to easily put your Redux store into a readable Svelte store.

## Installation

```sh
npm install @reduxjs/toolkit svedux
```

## Usage

First, create a Redux State Slice

```ts
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
```

Next, add slice reducers to the store and wrap it with svedux

```ts
import toSvelteStore from 'svedux'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '$lib/store/counterSlice'

export const store = toSvelteStore(configureStore({
  reducer: {
    counter: counterReducer,
  },
}))
```

## License

MIT
