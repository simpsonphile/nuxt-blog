<template>
  <pre v-highlightjs>
      <code :class="lang">
          <slot></slot>
      </code>
  </pre>
</template>

<script>
import 'highlight.js/scss/atom-one-dark-reasonable.scss'

export default {
    props: {
        lang: {
            type: String,
            default: 'javascript',
            validator: prop => [
                'html',
                'css',
                'javascript'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    code {
        padding: 1rem 1.6rem;
        overflow-x: auto;

        border-radius: .8rem;
    }
</style>