<template>
    <picture
        :class="classes"
        class="o-picture">
        <img
            :src="src.src"
            :srcset="src.srcSet"
            sizes="(max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 1280px) 1280px, 1920px"
            :alt="alt" />
    </picture>
</template>

<script>
export default {
    name: 'picture-default',
    props: {
        type: {
            type: String,
            validator: prop => [
                'fluid',
                'fit'
            ].includes(prop)
        },
        src: {
            type: Object
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
        display: block;

        width: 100%;
    }

    .o-picture--fit img {
        display: block;

        object-fit: cover;
        object-position: 50% 50%;

        width: 100%;
        height: 100%;
    }

    .o-picture--fluid img {
        width: 100%;
    }
</style>