<template>
    <component
        :is="tag"
        :href="tag === 'a' ? href : false"
        :to="tag === 'nuxt-link' ? href : false"
        :type="tag === 'button' ? type : false"
        :target="target"
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
            default: 'button'
        },
        target: {
            type: String
        },
        theme: {
            type: String,
            default: 'primary',
            validator: prop => [
                'primary',
                'link'
            ]
        },
        variation: {
            type: [String, Number],
            default: '1'
        }
    },
    computed: {
        classes () {
            return [
                this.theme ? `c-btn--th-${this.theme}` : '',
                this.variation ? `c-btn--v-${this.variation}` : ''
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

        background-color: var(--bg-color);
        border: 0;
        border-color: var(--border-color);
        cursor: pointer;
        color: var(--color);

        font-family: var(--font-normal);

        transition: all $transition_speed;

        &:focus {
            outline: none;
        }

        &:disabled {
            cursor: not-allowed;
        }

        &:hover {
            background-color: var(--bg-color-hover);
            border-color: var(--border-color-hover);
            color: var(--color-hover);
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
        /* Primary
        ====================================================================== */
    .c-btn--th-primary {
        height: 4rem;
        padding: 0 1.6rem;

        border-radius: .8rem;
        border-width: 2px;
        border-style: solid;
    }

    .c-btn--th-primary.c-btn--v-1 {
        --border-color: var(--ruby);
        --bg-color: var(--ruby);
        --color: var(--white);

        --bg-color-hover: var(--ruby-t2);
        --border-color-hover: var(--ruby-t2);
        --color-hover: var(--white);
    }

    .c-btn--th-primary.c-btn--v-2 {
        --border-color: var(--ruby);
        --color: var(--ruby);

        --border-color-over: var(--ruby-t2);
        --color-hover: var(--ruby-t2);
    }

        /* Tag
        ====================================================================== */
    .c-btn--th-tag {
        padding: .2rem .4rem;

        border-radius: .8rem;

        font-size: 1.2rem;
    }

    .c-btn--th-tag.c-btn--v-1 {
        --bg-color: var(--ruby);
        --color: var(--white);

        --bg-color-hover: var(--ruby-t2);
        --color-hover: var(--white);
    }
</style>
