<template>
	<div class="c-post-template">
		<layout isFull>
			<div class="c-post-template__head">
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
		</layout>

		<layout>
			<div class="c-post-template__content">
				<nuxt-content :document="art"></nuxt-content>
			</div>
		</layout>
	</div>
</template>

<script>
export default {
	name: "post-content",
	props: {
		art: {
			type: Object,
			default: () => ({})
		},
	},
	computed: {
		title () {
			return this.art.title
		},
		image () {
			return this.$images.get(this.art.image)
		}
	}
};
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

	// font-family: $font_primary;
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
</style>