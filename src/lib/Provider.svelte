<script lang="ts">
	import { setContext, untrack, type Snippet } from 'svelte';
	import type { EnhancedStore } from '@reduxjs/toolkit';
	import { contextStoreKey, contextStoreStateKey } from './hooks.js';

	const { store, children }: { store: EnhancedStore; children: Snippet } = $props();

	let state = $state(store.getState());

	$effect(() => {
		const unsubscribe = store.subscribe(() => {
			state = untrack(() => store.getState());
		});

		return unsubscribe;
	});

	setContext(contextStoreKey, store);
	setContext(contextStoreStateKey, () => state);
</script>

{@render children()}
