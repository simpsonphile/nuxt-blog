import Vue from 'vue';

const imageSContext = require.context('../assets/images', false, /\.jpg$/)
const imageNames = Array.from(imageSContext.keys())
const imagePaths = imageNames.map(img => {
    const name = img.replace('./', '')
    const path = require(`../assets/images/${name}`)
    return [name,path]
})

export const images = new Map(imagePaths)

Vue.prototype.$images = images