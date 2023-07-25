<script lang='ts'>
  import { Button, Spinner } from 'flowbite-svelte';
	import type { ButtonType } from 'flowbite-svelte/dist/types';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let loading = false;
  export let type: ButtonType = "button";
  export let disabled = false;
  export let size: "xs" | "sm" | "lg" | "xl" | "md" | undefined = undefined;

</script>

<main>
  <Button
    {type}
    disabled={loading || disabled}
    {size}
    on:click={() => dispatch('click')}
    >
      <slot /> 
      {#if loading}
      <div class="spinner"><Spinner size="4" color="white"/></div>
      {/if}
  </Button>
</main>

<style scoped>
  .spinner{
    margin-left:.3rem;
  }  
</style>