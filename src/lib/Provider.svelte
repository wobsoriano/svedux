<script lang="ts">
import { onDestroy, setContext } from 'svelte'
import type { EnhancedStore } from '@reduxjs/toolkit'
import { contextStoreKey, contextStoreStateKey } from './hooks.js'

let { store, children } = $props<{ store: EnhancedStore; children: any }>();

let state = $state(store.getState())

const unsubscribe = store.subscribe(() => {
  state = store.getState()
})

onDestroy(() => {
  unsubscribe()
})

setContext(contextStoreKey, store)
setContext(contextStoreStateKey, () => state)
</script>

{@render children()}
