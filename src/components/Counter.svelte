<script lang="ts">
	import { useDispatch, useSelector } from '$lib/index.js';
	import type { RootState } from '../store.js';
	import { increment } from '../store.js';

	const count = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();
</script>

<h1>Hello</h1>
<button onclick={() => dispatch(increment())}>
	Clicks: {count.current}
</button>
