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
            validator: prop => [
                'h1', 'h2', 'h3', 'h4', 'h5', 'p'
            ].includes(prop)
        },
        size: {
            type: String,
            default: 'm',
            validator: prop => [
                's',
                'm',
                'b'
            ].includes(prop)
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

        font-family: $font_primary;
        font-weight: 700;
    }

    .t-heading--s-m {
        font-size: 2.6rem;
    }
</style>