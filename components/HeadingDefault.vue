<template>
  <div 
    class="t-heading"
    :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'heading',
  props: {
    tag: {
      type: String,
      default: 'h2',
      validator: (prop) => ['h1', 'h2', 'h3', 'h4', 'h5', 'p'].includes(prop),
    },
    size: {
      type: String,
      default: 'm',
      validator: (prop) => ['xs', 's', 'xm', 'm', 'xl', 'l'].includes(prop)
    },
    color: {
      type: String
    }
  },
  computed: {
    classes () {
      return [
        this.size ? `t-heading--s-${this.size}` : ''
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .t-heading {
    margin: 0;

    font-family: var(--font-primary);
    font-weight: 700;
  }

  .t-heading--s-xs {
    font-size: 1.8rem;
  }

  .t-heading--s-s {
    font-size: 2.2rem;

    @include media('<=m') {
		  font-size: 1.8rem;
	  }
  }

  .t-heading--s-xm {
    font-size: 2.8rem;


    @include media('<=m') {
		  font-size: 2.2rem;
	  }
  }

  .t-heading--s-m {
    font-size: 3.4rem;

    @include media('<=m') {
		  font-size: 2.8rem;
	  }
  }

  .t-heading--s-xl {
    font-size: 4.2rem;


    @include media('<=m') {
		  font-size: 3.4rem;
	  }
  }

  .t-heading--s-l {
    font-size: 5.3rem;


    @include media('<=m') {
		  font-size: 4.2rem;
	  }
  }
</style>