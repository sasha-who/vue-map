<template>
  <li class="route-list__item">
    <span class="route-list__title">{{ point.title }}</span>

    <button
      class="route-list__delete-btn"
      type="button"
      aria-label="Delete point"
      @click="$emit('remove-point', point.id)"
    ></button>
  </li>
</template>

<script>
export default {
  props: {
    point: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.route-list__item {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;

  font-size: 18px;
  line-height: 1.3;

  cursor: move;
}

.route-list__title {
  padding-right: 15px;
}

.route-list__delete-btn {
  position: relative;

  width: 20px;
  height: 20px;

  border: none;
  background-color: transparent;
}

.route-list__delete-btn:before,
.route-list__delete-btn:after {
  position: absolute;
  content: '';
  top: 0;
  right: 0;

  width: 2px;
  height: 21px;
  margin-right: 10px;

  background-color: #ffffff;
}

.route-list__delete-btn:before {
  transform: rotate(45deg);
}

.route-list__delete-btn:after {
  transform: rotate(-45deg);
}
</style>
