import type { EnhancedStore } from '@reduxjs/toolkit'
import type { Readable } from 'svelte/store'
import { readable } from 'svelte/store'

const toSvelteStore = <T extends EnhancedStore<any, any, any>>(
  store: T,
): {
  subscribe: Readable<ReturnType<T['getState']>>['subscribe']
  dispatch: T['dispatch']
} => {
  const state = readable(store.getState(), (set) => {
    return store.subscribe(() => {
      set(store.getState())
    })
  })

  return {
    subscribe: state.subscribe,
    dispatch: store.dispatch,
  }
}

export default toSvelteStore
