<template>
  <div class="content">
    <post-template :art="art"></post-template>
  </div>
</template>


<script>
export default {
  async asyncData({ $content, params }) {
    const art = await $content(
      'articles',
      `${params.category}/${params.title}`
    ).fetch()

    return {
      art
    }
  }
}
</script>