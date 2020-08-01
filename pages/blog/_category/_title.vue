<template>
  <div class="content">
    <nuxt-content :document="art"></nuxt-content>
  </div>
</template>


<script>
export default {
  async asyncData({ $content, params }) {
    const art = await $content(
      "articles",
      `${params.category}/${params.title}`
    ).fetch();

    return {
      art,
    };
  },
};
</script>