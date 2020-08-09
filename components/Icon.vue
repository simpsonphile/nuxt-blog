<template>
    <span :class="classes">
        <svg-icon :name="name" />
    </span>
</template>

<script>
export default {
    name: 'icon',
    props: {
        name: {
            type: String,
            required: true
        },
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
                'o-ico',
                this.name ? `o-ico--${this.name}` : '',
                this.size ? `o-ico--s-${this.size}` : ''
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .o-ico {
        display: inline-block;
    }

    .o-ico img,
    .o-ico svg {
        width: 100%;
        height: 100%;

        fill: currentColor;
    }

    .o-ico--s-s {
        width: 1rem;
        height: 1rem;
    }

    .o-ico--s-m {
        width: 2rem;
        height: 2rem;
    }

    .o-ico--s-b {
        width: 3rem;
        height: 3rem;
    }
</style>