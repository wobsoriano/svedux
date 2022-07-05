<script lang="ts">
  import { store, increment } from './store'
</script>

<button on:click={() => store.dispatch(increment())}>
  Clicks: {$store.counter.value}
</button>
