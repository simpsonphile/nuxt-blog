<template>
	<div class="c-post-template">
		<div class="c-post-template__head">
			<post-head :data="headData"></post-head>
		</div>

		
		<div class="c-post-template__col-3">
			<post-content :data="art"></post-content>
		</div>

			<div class="c-post-template__col-1">
				<div class="sam">
					{{art.createdAt | formatDate }}<br />
					{{art.updatedAt | formatDate}}<br />
					{{ art.category }}<br />
					{{ art.tags }}<br />
					{{ art.readingTime | toMinutes }} min read
					<ul>
						<li
							v-for="(link, index) in art.toc"
							:key="'tag' + index">
							<a :href="'#' + link.id">
								{{ link.text }}
							</a>
						</li>
					</ul>

				</div>
			</div>
		
	</div>
</template>

<script>
export default {
	name: "post-template",
	props: {
		art: {
			type: Object,
			default: () => ({})
		},
	},
	computed: {
		image () {
			return this.$images.get(this.art.image)
		},
		headData () {
			return {
				title: this.art.title,
				image: this.image
			}
		},
		toc () {

		}
	}
};
</script>

<style lang="scss">
.c-post-template {
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: 4fr 1fr;
}


.c-post-template__head {
	grid-column-start: 1;
	grid-column-end: 5;
	// margin-bottom: 8rem;

	// @include media('<=t') {
	// 	margin-bottom: 4rem;
	// }

	// @include media('<=m') {
	// 	margin-bottom: 2rem;
	// }
}

.sam {
	position: sticky;
	top: 0;
}

</style>