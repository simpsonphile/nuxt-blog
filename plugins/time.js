import Vue from 'vue'

Vue.filter('toMinutes', val => {
    if (!val) return

    return Math.round(val / 1000 / 60)
})

Vue.filter('formatDate', val => {
    if (!val) return

    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(val).toLocaleDateString('en', options)
})