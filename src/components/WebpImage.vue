<template>
  <picture>
    <source :srcset="`${src}.webp`" v-bind="$attrs" type="image/webp">
    <source :srcset="`${src}.${fallback}`" v-bind="$attrs" :type="`image/${fallback}`">
    <img v-bind="$attrs" :src="`${src}.${fallback}`">
  </picture>
</template>

<script>
export default {
  name: 'WebpImage',
  inheritAttrs: false,
  props: {
    src: { type: String, required: true },
    fallback: { type: String, default: 'jpg' },
  },
};
</script>
