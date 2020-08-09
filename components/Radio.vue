<template>
    <label
        class="f-radio"
        :class="classes">
        <input
            :id="id"
            :value="value"
            :name="name"
            :checked="state"
            :disabled="disabled"
            type="radio"
            class="f-radio__input"
            @change="updateInput()" />

        <span class="f-radio__indicator"></span>

        <span class="f-radio__label">
            <slot />
        </span>
    </label>
</template>

<script>
import isEqual from 'lodash/isEqual'

export default {
    name: 'radio',
    model: {
        prop: 'modelValue',
        event: 'change'
    },
    props: {
        value: {
            type: [String, Number, Boolean, Array, Object],
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        modelValue: {
            type: [String, Number, Boolean, Object],
            default: ''
        },
        id: {
            type: String,
            default: ''
        },
        theme: {
            type: String,
            default: 'circle'
        },
        disabled: {
            type: Boolean
        }
    },
    computed: {
        state () {
            return isEqual(this.value, this.modelValue)
        },
        classes () {
            return [
                this.theme ? `f-radio--th-${this.theme}` : ''
            ]
        }
    },
    methods: {
        updateInput () {
            this.$emit('change', this.value)
        }
    }
}
</script>

<style lang="scss" scoped>
.f-radio {
    position: relative;
    align-items: center;

    display: flex;

    height: 2rem;

    cursor: pointer;
}

.f-radio__label {
    display: block;

    font-family: var(--font-normal);
    font-size: 1.4rem;
    line-height: 2rem;

    color: var(--label-color);
}

.f-radio__ico {
    position: absolute;
    top: 50%;
    right: 1.5rem;
    transform: translateY(-50%);
}

.f-radio__input {
    position: absolute;
    z-index: -1;

    opacity: 0;

    height: .1rem;
    width: .1rem;
}

.f-radio__input:active,
.f-radio__input.is-active,
.f-radio__input:focus {
    & ~ .f-radio__indicator {
        border-color: var(--border-color-active);
    }
}

.f-radio__input:focus {
    & ~ .f-radio__indicator {
        outline: none;
        box-shadow: var(--box-shadow-focus);
    }
}

.f-radio__input:disabled,
.f-radio__input.is-disabled {
    & ~ .f-radio__indicator {
        background-color: var(--bg-color-disabled);

        &:after {
            background-color: (--bg-color-after-disabled);
        }
    }
}

.f-radio__indicator {
    align-items: center;
    justify-content: center;

    display: flex;

    width: 2rem;
    height: 2rem;

    border: 1px solid var(--border-color);
    border-radius: 50%;

    &:after {
        content: "";

        display: none;

        width: 1rem;
        height: 1rem;

        background-color: var(--color-after);
        border-radius: 50%;
    }
}

input:checked ~ .f-radio__indicator:after {
    display: block;
}

.f-radio__indicator + .f-radio__label {
    margin-left: 1rem;
}

/* Types
========================================================================== */
    /* Circle
    ====================================================================== */
.f-radio--th-circle {
    --label-color: var(--textColor);
    --border-color: var(--tuftsBlue);
    --border-color-active: var(--tuftsBlue);
    --box-shadow-focus: var(--box-shadow-soft);
    --bg-color-disabled: grey;
    --color-after: var(--tuftsBlue);
    --bg-color-after-disabled: grey;
}
</style>