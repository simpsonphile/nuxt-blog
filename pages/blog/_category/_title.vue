<template>
  <div class="content">
    <post-content :art="art"></post-content>
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