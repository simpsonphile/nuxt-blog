<template>
    <component
        :is="tag"
        :href="tag === 'a' ? href : false"
        :to="tag === 'nuxt-link' ? href : false"
        :type="tag === 'button' ? type : false"
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
        theme: {
            type: String,
            default: 'primary',
            validator: prop => [
                'primary',
                'link'
            ]
        },
        colorTheme: {
            type: [String, Number],
            default: '1'
        },
        size: {
            type: String,
            default: 'normal',
            validator: prop => [
                'tiny',
                'small',
                'normal',
                'big'
            ]
        }
    },
    computed: {
        classes () {
            return [
                this.theme ? `c-btn--t-${this.theme}` : '',
                this.colorTheme ? `c-btn--th-${this.colorTheme}` : '',
                this.size ? `c-btn--s-${this.size}` : ''
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
        --color: #{$color_white_1};
        --background-color: transparent;
        --border-color: transparent;

        height: 4rem;
        padding: 0 1.5rem;

        border-radius: 1.5rem;
        border: 2px solid transparent;
        border-color: var(--border-color);
        background-color: var(--background-color);
        color: var(--color);

        &:hover {
            border-color: var(--border-color-hover);
            background-color: var(--background-color-hover);
            color: var(--color-hover);
        }
    }

    .c-btn--t-primary.c-btn--s-tiny {
        height: 2rem;
        padding: 0 0.5rem;

        font-size: 1.2rem;
    }

    .c-btn--t-primary.c-btn--th-1 {
        --background-color: #{$color_ruby_1};
        --border-color: #{$color_ruby_1};
        --color: #{$color_white_1};

        --background-color-hover: #{$color_ruby_3};
        --border-color-hover: #{$color_ruby_3};
        --color-hover: #{$color_white_1};
    }

    .c-btn--t-primary.c-btn--th-2 {
        --background-color: #{$color_keppel_1};
        --border-color: #{$color_keppel_1};
        --color: #{$color_white_1};

        --background-color-hover: #{$color_keppel_3};
        --border-color-hover: #{$color_keppel_1};
        --color-hover: #{$color_white_1};
    }

    .c-btn--t-primary.c-btn--th-3 {
        --border-color: #{$color_ruby_1};
        --color: #{$color_ruby_1};

        --background-color-hover: #{$color_ruby_1};
        --border-color-hover: #{$color_ruby_1};
        --color-hover: #{$color_white_1};
    }

    .c-btn--t-primary.c-btn--th-4 {
        --border-color: #{$color_keppel_1};
        --color: #{$color_keppel_1};

        --background-color-hover: #{$color_keppel_1};
        --border-color-hover: #{$color_keppel_1};
        --color-hover: #{$color_white_1};
    }
</style>
