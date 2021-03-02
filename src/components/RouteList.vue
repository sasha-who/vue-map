<template>
  <section class="route-list">
    <h1 class="route-list__title">Route editor</h1>

    <RouteForm @add-point="addPoint" />

    <ul class="route-list__list" v-if="points.length">
      <draggable :list="points">
        <RouteListItem
          v-for="point in points"
          :key="point.id"
          :point="point"
          @remove-point="removePoint"
        />
      </draggable>
    </ul>

    <p class="route-list__notice" v-else>No points yet</p>
  </section>
</template>

<script>
import draggable from "vuedraggable";
import RouteForm from '@/components/RouteForm';
import RouteListItem from '@/components/RouteListItem';

export default {
  props: ['points'],
  components: {
    draggable,
    RouteForm,
    RouteListItem
  },
  methods: {
    removePoint(id) {
      this.$emit('remove-point', id);
    },
    addPoint(newPoint) {
      this.$emit('add-point', newPoint);
    }    
  }
}
</script>

<style>
.route-list {
  width: 25%;
  max-height: calc(100vh - 120px);
  padding-top: 60px;
  padding-right: 10px;
  padding-bottom: 60px;
  padding-left: 10px;

  overflow-y: auto;

  color: #ffffff;

  background-color: #2c3e50;
}

.route-list__title {
  margin: 0;
}

.route-list__list {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0;

  list-style: none;
}

.route-list__notice {
  margin-top: 20px;
  margin-bottom: 0;

  font-size: 16px;

  opacity: 0.7;
}
</style>
