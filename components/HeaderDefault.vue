<template>
  <div
    :class="classes"
    class="t-header">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'header-default',
    props: {
        size: {
            type: String,
            default: 'm',
            validator: prop => [
                's',
                'm',
                'b'
            ].includes(prop)
        }
    },
    computed: {
        classes () {
            return [
                this.size ? `t-header--s-${this.size}` : ''
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .t-header--s-m:not(:last-child) {
        margin-bottom: 1.5rem;
    }

    .t-header--s-m /deep/ .t-heading:not(:last-child) {
        margin-bottom: .5rem;
    }
</style>