<template>
  <div class="carousel">
    <transition :name="`${transition}-${direction}`">
      <div :key="active" class="slide">
        <slot :slide="slides[active]" />
      </div>
    </transition>
    <ul v-if="showPagination" class="pagination">
      <li
        v-for="(_, i) in slides"
        :key="i"
        :class="{ active: i === active }"
        @click="goTo(i)" />
    </ul>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'Carousel',
  props: {
    slides: { type: Array, required: true },
    pagination: { type: Boolean, default: false },
    interval: { type: [Number, String], default: 0 },
    transition: { type: String, default: 'slide' },
  },
  setup(props) {
    const active = ref(0);
    const timeout = ref(0);
    const direction = ref(undefined);
    const showPagination = computed(() => props.pagination && props.slides.length > 1);

    const goTo = index => {
      const { length } = props.slides;
      direction.value = index > active.value ? 'next' : 'prev';
      active.value = (length + index) % length;

      if (props.interval) {
        clearTimeout(timeout.value);
        timeout.value = setTimeout(() => {
          goTo(active.value + 1);
        }, props.interval * 1000);
      }
    };

    goTo(0);

    return { active, goTo, direction, showPagination };
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  height: 100%;
  overflow: hidden;
  position: relative;

  .slide {
    position: absolute;
    overflow: hidden;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }

  .pagination {
    margin: var(--carouse-pagination-margin, 2rem);
    position: absolute;
    bottom: 0;
    display: flex;

    li {
      height: var(--carousel-pagination-size, 6px);
      width: var(--carousel-pagination-size, 6px);
      background: var(--carousel-pagination-color, #fff);
      border-radius: var(--carousel-pagination-radius, 3px);
      margin: var(--carousel-pagination-spacing, 2px);
      transition: all var(--carousel-transition-duration, 1s) ease;
      cursor: pointer;
      opacity: 0.5;

      &.active {
        width: var(--carousel-pagination-size--active, 24px);
        opacity: 1;
      }
    }
  }
}

.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: all var(--carousel-transition-duration, 1s) ease;
}

.slide-prev-leave-to,
.slide-next-enter-from { transform: translateX(100%); }

.slide-next-leave-to,
.slide-prev-enter-from { transform: translateX(-100%); }
</style>
