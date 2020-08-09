<template>
<label
    :for="id"
    :class="classes">
    <input
        class="f-checkbox__input"
        :id="id"
        :name="name"
        :value="value"
        :disabled="disabled"
        :required="required"
        :checked="checkboxState"
        type="checkbox"
        @change="toggle()"
        @click="$emit('click')"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
        @keypress.enter.prevent="toggle()" />

    <span
        v-if="theme === 'default'"
        class="f-checkbox__indicator">
    </span>

    <span
        v-if="hasLabel"
        class="f-checkbox__label">
        <slot />
    </span>
</label>
</template>

<script>
import checkbox from '../mixins/checkbox'

export default {
    name: 'checkbox',
    mixins: [checkbox]
}
</script>

<style lang="scss" scoped>
    .f-checkbox {
        position: relative;

        cursor: pointer;
    }

    .f-checkbox__input {
        position: absolute;
        z-index: -1;

        opacity: 0;

        height: .1rem;
        width: .1rem;
    }

    .f-checkbox__label {
        display: block;

        font-family: var(--font-normal);
        font-size: 1.4rem;
        line-height: 2rem;

        color: var(--color);
    }

    /* Types
    ========================================================================== */
        /* Primary
        ====================================================================== */
    .f-checkbox--th-default {
        position: relative;
        align-items: center;

        display: flex;

        .f-checkbox__input:active,
        .f-checkbox__input.is-active,
        .f-checkbox__input:focus {
            & ~ .f-checkbox__indicator {
                border-color: var(--border-color-focus);
            }
        }

        .f-checkbox__input:focus {
            & ~ .f-checkbox__indicator {
                outline: none;
                box-shadow: var(--box-shadow-focus);
            }
        }

        .f-checkbox__input:disabled {
            & ~ .f-checkbox__indicator {
                background-color: var(--bg-color-disabled);

                &:after {
                    background-color: var(--bg-color-after-disabled);
                }
            }
        }

        .f-checkbox__indicator {
            align-items: center;
            justify-content: center;

            display: flex;

            width: 2rem;
            height: 2rem;

            border: 1px solid var(--border-color);
            border-radius: .5rem;

            &:after {
                content: "";

                position: absolute;
                top: 3px;
                left: 5px;
                transform: rotate(45deg);

                display: none;

                width: 7px;
                height: 9px;

                border: solid var(--check-color);
                border-width: 0 2px 2px 0;
            }
        }

        .f-checkbox__input:checked ~ .f-checkbox__indicator:after {
            display: block;
        }

        .f-checkbox__indicator + .f-checkbox__label {
            margin-left: 1rem;
        }
    }

    .f-checkbox--th-default.f-checkbox--v-1 {
        --color: var(--textColor);
        --border-color: var(--tuftsBlue);
        --check-color: var(--tuftsBlue);

        --bg-color-after-disabled: grey;
        --bg-color-disabled: grey;

        --box-shadow-focus: var(--box-shadow-soft);
        --border-color-focus: var(--tuftsBlue);
    }

</style>
