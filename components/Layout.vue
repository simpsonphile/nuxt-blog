<template>
    <div class="l-sec">
        <div 
            class="l-sec__inner"
            :class="innerClasses">
            <slot></slot>
        </div>
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
            innerClasses () {
                return [
                    this.isFull ? 'l-sec__inner--full' : ''
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .l-sec {}

    .l-sec__inner {
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

    .l-sec__inner--full {
        padding: 0;
    }
</style>