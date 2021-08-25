<template>
  <input :id="name" v-model="isOpen" type="checkbox">
  <div
    v-bind="$attrs"
    :class="`expandable expand-${direction}`"
    :style="{
      '--expanded-width': size.width,
      '--expanded-height': size.height,
    }">
    <div class="container">
      <div class="header">
        <label :for="name" class="close">&times;</label>
      </div>
      <slot />
    </div>
  </div>
  <label :for="name" class="toggler">
    <slot name="toggler" />
  </label>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'Expandable',
  props: {
    name: { type: String, default: Math.random().toString(36).substr(2, 5) },
    open: { type: Boolean, default: false },
    direction: { type: String, default: 'rb' },
    size: { type: Object, default: () => ({ width: '100vw', height: '100vh' }) },
  },
  emits: ['update:open'],
  setup(props, { emit }) {
    const isOpen = computed({
      get: () => props.open,
      set: value => emit('update:open', value),
    });

    return { isOpen };
  },
};
</script>

<style lang="scss" scoped>
input {
  display: none;

  & ~ .expandable {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: auto;
    transition: all 0.5s ease 0.25s;

    &.expand-rb,
    &.expand-lb { top: 0; }

    &.expand-rt,
    &.expand-lt { bottom: 0; }

    &.expand-lb,
    &.expand-lt { right: 0; }

    &.expand-rb,
    &.expand-rt { left: 0; }

    .container {
      opacity: 0;
      visibility: hidden;
      position: relative;
      transition: all 0.5s ease;
    }
  }

  & ~ .toggler {
    opacity: 1;
    visibility: visible;
    cursor: pointer;
    transition: all 0.5s ease 0.5s;
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
}

input:checked {
  & ~ .expandable {
    width: var(--expanded-width);
    height: var(--expanded-height);
    transition: all 0.5s ease 0.25s;

    .container {
      opacity: 1;
      visibility: visible;
      transition: all 0.5s ease 0.5s;
    }
  }

  & ~ .toggler {
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease;
  }
}

.header {
  position: sticky;
  top: 0;

  .close {
    position: absolute;
    right: 0;
    top: 1rem;
    font-size: 2rem;
    padding: 0 1.5rem;
    cursor: pointer;
    display: inline-block;
    z-index: 2;
  }
}
</style>
