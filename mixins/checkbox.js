export default {
  name: 'checkbox',
  model: {
      prop: 'model',
      event: 'change'
  },
  props: {
      id: {
          type: String,
          default: undefined
      },
      model: {
          type: [String, Array, Boolean, Object],
          default: undefined
      },
      checked: {
          type: Boolean,
          default: false
      },
      value: {
          type: [String, Number, Object],
          default: ''
      },
      name: {
          type: [String],
          default: ''
      },
      required: {
          type: Boolean,
          default: false
      },
      showRequired: {
          type: Boolean,
          default: false
      },
      disabled: {
          type: Boolean,
          default: false
      },
      isBig: {
          type: Boolean
      },
      theme: {
          type: String,
          default: 'default',
          validator: prop => [
              'default'
          ].includes(prop)
      },
      variation: {
          type: String,
          default: '1'
      }
  },
  computed: {
      classes () {
          return [
              'f-checkbox',
              this.theme ? `f-checkbox--th-${this.theme}` : '',
              this.variation ? `f-checkbox--v-${this.variation}` : ''
          ]
      },
      checkboxState () {
          if (this.model === undefined) {
              return this.checked
          }

          if (Array.isArray(this.model)) {
              return this.model.indexOf(this.value) !== -1
          }

          return this.model
      },
      hasLabel () {
          return !!this.$slots.default
      }
  },
  mounted () {
      if (this.checked && !this.checkboxState) {
          this.toggle()
      }
  },
  methods: {
      toggle () {
          if (this.disabled) {
              return
          }

          let value = this.model

          if (Array.isArray(value)) {
              value = value.slice()
              const i = value.indexOf(this.value)

              if (i === -1) {
                  value.push(this.value)
              } else {
                  value.splice(i, 1)
              }
          } else {
              value = !this.checkboxState
          }

          if (!value) {
              value = ''
          }

          this.$emit('change', value)
      }
  }
}