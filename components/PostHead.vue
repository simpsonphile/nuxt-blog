<template>
    <div class="c-post-head">
        <header-default>
            <heading-default 
                tag="h1"
                size="l">
                {{ title }}
            </heading-default>
        </header-default>

        <picture-default
            :src="image"
            type="fit"
            style="height: 300px"
            :alt="title">
        </picture-default>
    </div>
</template>

<script>
export default {
	name: "post-head",
    props: {
        data: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        title () {
			return this.data.title
		},
        image () {
            return this.data.image
        }
    }
}
</script>

<style lang="scss">

</style>