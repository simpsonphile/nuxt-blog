<template>
  <div class="c-actions">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'actions-default'
}
</script>

<style>
    .c-actions {
        margin-top: auto;
        padding-top: 3rem;
    }
</style>