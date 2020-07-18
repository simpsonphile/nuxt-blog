<template>
  <div
    :class="classes"
    class="t-content">
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
                this.size ? `t-content--s-${this.size}` : ''
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .t-content p {
        margin: 0 0 2rem 0;

        &:last-child {
            margin: 0;
        }
    }

    .t-content--s-m {
        font-size: 1.6rem;
    }
</style>