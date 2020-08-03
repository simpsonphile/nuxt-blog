<template>
    <article class="c-post-content">
        <nuxt-content :document="data"></nuxt-content>
    </article>
</template>

<script>
export default {
	name: 'post-content',
    props: {
        data: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>

<style lang="scss">
.nuxt-content {
	max-width: 60ch;
	font-size: 2.2rem;

	@include media('<=m') {
		font-size: 1.8rem;
	}
}

.nuxt-content h1,
.nuxt-content h2,
.nuxt-content h3,
.nuxt-content h4,
.nuxt-content h5,
.nuxt-content h6 {
	margin: 0 0 2rem 0;
}

.nuxt-content h2 {
	font-size: 3.4rem;

	&:not(:first-child) {
		margin-top: 4rem;
	}

	@include media('<=m') {
		font-size: 2.8rem;
	}
}

.nuxt-content h3 {
	font-size: 2.8rem;

	@include media('<=m') {
		font-size: 2.2rem;
	}
}

.nuxt-content h4 {
	font-size: 2.2rem;

	@include media('<=m') {
		font-size: 1.8rem;
	}
}

.nuxt-content p {
	margin: 0 0 3.2rem 0;

	&:last-child {
		margin: 0;
	}
}

.nuxt-content picture {
	margin: 0 0 3.2rem 0;

	&:last-child {
		margin: 0;
	}
}

.nuxt-content pre {
	display: flex;

	margin: 0 0 3.2rem 0;

	&:last-child {
		margin: 0;
	}
}
</style>