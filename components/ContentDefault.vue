<template>
  <div class="t-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'content-default',
  props: {
    size: {
      type: String,
      default: 'm',
      validator: (prop) => ['s,' 'm', 'l'].includes(prop)
    }
  },
  computed: {
    classes () {
      return [
        this.size ? `t-content--s-${this.size}` : ''
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.t-content {
  max-width: 60ch;
}

.t-content h1,
.t-content h2,
.t-content h3,
.t-content h4,
.t-content h5,
.t-content h6 {
  margin: 0 0 2rem 0;
}

.t-content h2 {
  &:not(:first-child) {
    margin-top: 4rem;
  }
}

.t-content p {
  margin: 0 0 3.2rem 0;

  &:last-child {
    margin: 0;
  }
}

.t-content--s-m {
  font-size: 2.2rem;
}
</style>