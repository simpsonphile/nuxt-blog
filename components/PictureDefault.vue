<template>
    <picture
        :class="classes"
        class="o-picture">
        <img
            :src="src"
            :alt="alt" />
    </picture>
</template>

<script>
export default {
    name: 'picture-default',
    props: {
        type: {
            type: String,
            default: 'fluid',
            validator: prop => [
                'fluid',
                'fit'
            ].includes(prop)
        },
        sources: { // TODO add support for sources
            type: Array,
            default: () => []
        },
        src: {
            type: String,
            default: '/images/post1.jpg'
        },
        alt: {
            type: String,
            default: 'image'
        }
    },
    computed: {
        classes () {
            return [
                this.type ? `o-picture--${this.type}` : ''
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .o-picture {
        width: 100%;
    }

    .o-picture--fit img {
        object-fit: cover;
        object-position: 50% 0;

        width: 100%;
        height: 100%;
    }

    .o-picture--fluid img {
        width: 100%;
    }
</style>