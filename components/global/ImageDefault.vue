<template>
    <picture-default :src="image"></picture-default>
</template>

<script>
export default {
    name: 'image-default',
    props: {
        src: {
            type: String
        }
    },
    computed: {
        image () {
            return this.$images.get(this.src)
        }
    }
}
</script>