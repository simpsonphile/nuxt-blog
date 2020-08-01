<template>
  <nuxt-content :document="art"></nuxt-content>
</template>

<script>
export default {
  name: "post-content",
  props: {
    art: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss">
.nuxt-content {
  max-width: 60ch;

  font-size: 2.2rem;
}

.nuxt-content h1,
.nuxt-content h2,
.nuxt-content h3,
.nuxt-content h4,
.nuxt-content h5,
.nuxt-content h6 {
  margin: 0 0 2rem 0;
}

.nuxt-content h2 {
  &:not(:first-child) {
    margin-top: 4rem;
  }
}

.nuxt-content p {
  margin: 0 0 3.2rem 0;

  &:last-child {
    margin: 0;
  }
}
</style>