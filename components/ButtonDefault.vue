<template>
    <component
        :is="tag"
        :href="tag === 'a' ? href : false"
        :to="tag === 'nuxt-link' ? href : false"
        class="c-btn"
        :class="classes">
        <div class="c-btn__wrapper">
            <div class="c-btn__ico">
                <slot name="icoLeft"></slot>
            </div>

            <div class="c-btn__label">
                <slot></slot>
            </div>

            <div class="c-btn__ico">
                <slot name="icoRight"></slot>
            </div>
        </div>
    </component>
</template>

<script>
export default {
    name: 'button-default',
    props: {
        tag: {
            type: String,
            default: 'button',
            validator: prop => [
                'button',
                'nuxt-link',
                'a'
            ].includes(prop)
        },
        href: {
            type: String
        },
        type: {
            type: String,
            default: 'primary',
            validator: prop => [
                'primary'
            ]
        },
        theme: {
            type: [String, Number],
            default: '1',
            validator: prop => prop === parseInt(prop)
        }
    },
    computed: {
        classes () {
            return [
                this.type ? `c-btn--t-${this.type}` : '',
                this.theme ? `c-btn--th-${this.theme}` : ''
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .c-btn {
        display: inline-block;

        padding: 0;
        margin: 0;

        border: 0;
        cursor: pointer;

        transition: all $transition_speed;

        &:focus {
            outline: none;
        }

        &:disabled {
            cursor: not-allowed;
        }
    }

    .c-btn__wrapper {
        align-items: center;
        justify-content: center;

        display: flex;

        height: 100%;
    }

    .c-btn__ico {
        &:first-child:not(:last-child) {
            margin-right: .5rem;
        }

        &:last-child:not(:first-child) {
            margin-left: .5rem;
        }
    }

    /* Types
    ========================================================================== */
    .c-btn--t-primary {
        height: 4rem;
        padding: 0 1.5rem;

        border-radius: 1rem;
    }

    .c-btn--t-primary.c-btn--th-1 {
        background-color: $color_ruby_1;
        color: $color_white_1;
    }
</style>
