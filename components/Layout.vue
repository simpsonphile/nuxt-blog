<template>
        <div 
            class="l-inner"
            :class="classes">
            <slot></slot>
        </div>
</template>

<script>
    export default {
        name: 'layout',
        props: {
            isFull: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            classes () {
                return [
                    this.isFull ? 'l-inner--full' : ''
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .l-inner {
        max-width: 1360px;
        margin: 0 auto;
        padding: 0 8rem;

        @include media('<=t') {
            padding: 0 4rem;
        }

        @include media('<=m') {
            padding: 0 2rem;
        }
    }

    .l-inner--full {
        padding: 0;
    }
</style>