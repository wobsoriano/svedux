<script lang="ts">
import { Provider } from "$lib/index.js";
import Counter from "../components/Counter.svelte";
import { store } from "../store.js";
</script>


<Provider {store}>
  <Counter />
</Provider>
