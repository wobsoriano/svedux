import type { EnhancedStore } from '@reduxjs/toolkit'

const toSvelteStore = <T extends EnhancedStore<any, any, any>>(
  store: T,
) => {
  return {
    subscribe(fn: (payload: ReturnType<T['getState']>) => void) {
      fn(store.getState())
      return store.subscribe(() => {
        fn(store.getState())
      })
    },
    dispatch: store.dispatch,
  }
}

export default toSvelteStore
